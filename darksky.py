import requests
import json
from geolocation.main import GoogleMaps
from json import JSONEncoder

gmap_key="AIzaSyDepLmH5__DHciuZds4CRYd2ENaIKPd3iQ"
google_maps =GoogleMaps(api_key=gmap_key)
location = google_maps.search(location="Boston,MA")
lat = location.first().lat
lng = location.first().lng



url = "https://api.darksky.net/forecast/7553fba24d9aec652624e7ae324fe84b/"+str(lat)+","+str(lng)

querystring = {
  "apikey":"7553fba24d9aec652624e7ae324fe84b",
 # "q": "temperature"
}

response = requests.request("GET", url, params=querystring)


# response.text is raw output
result = response.json()  # turn JSON into python data structure
day_of_week = {0:'Today', 1:'Sunday', 2:'Monday', 3:'Tuesday', 4:'Wednesday', 5:'Thursday', 6:'Friday', 7:'Next Saturday'}
cnt =0
js_dict={}
for days in result['daily']['data']:

    if 'precipType' in days.keys():
        print day_of_week[cnt], days['precipType']
        js_dict[day_of_week[cnt]]=days['precipType']
    cnt+=1

data = JSONEncoder().encode(js_dict)

with open('awesome_precip_data.txt', 'w') as outfile:
    json.dump(data, outfile)
