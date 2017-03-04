import requests
import json
from geolocation.main import GoogleMaps
from json import JSONEncoder
from collections import OrderedDict

gmap_key="AIzaSyDepLmH5__DHciuZds4CRYd2ENaIKPd3iQ"
google_maps =GoogleMaps(api_key=gmap_key)
js_dict=OrderedDict()
city_dict = {"Boston,MA":0,"Seattle,WA":0,"Portland,OR":0,"Calgary,AB":0,"Boulder,CO":0,"Phoenix,AZ":0,"New York,NY":0,"Oslo,NO":0 }


for city in city_dict.iterkeys():
    print city
    location = google_maps.search(location=city)
    lat = location.first().lat
    lng = location.first().lng




    url = "https://api.darksky.net/forecast/7553fba24d9aec652624e7ae324fe84b/"+str(lat)+","+str(lng)

    querystring = {
      "apikey":"7553fba24d9aec652624e7ae324fe84b",

    }

    response = requests.request("GET", url, params=querystring)


    # response.text is raw output
    result = response.json()  # turn JSON into python data structure
    day_of_week = {0:'Today', 1:'Sunday', 2:'Monday', 3:'Tuesday', 4:'Wednesday', 5:'Thursday', 6:'Friday', 7:'Saturday'}
    day_of_week = OrderedDict(day_of_week)
    cnt =0

    for days in result['daily']['data']:
        #print city
        if 'precipType' in days.keys():
            print day_of_week[cnt], days['precipType']
            if 'precipAccumulation' in days.keys():
                js_dict[city+" "+day_of_week[cnt]]=str(days['precipAccumulation'])+'in '+str(days['precipType'])
            else:
                js_dict[city+" "+day_of_week[cnt]]=str(days['precipIntensityMax'])+'in '+str(days['precipType'])
        else:
            js_dict[city+" "+day_of_week[cnt]]="no precip"
        cnt+=1

    data = JSONEncoder().encode(js_dict)
    data = js_dict

    with open('awesome_precip_data.txt', 'w') as outfile:
        json.dump(data, outfile)
