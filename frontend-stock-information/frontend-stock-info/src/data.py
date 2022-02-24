import requests
import json
import os

from sympy import public

url = "https://yfapi.net/v8/finance/chart/AAPL"

headers = { 'x-api-key': "HbCxQcsNmp2Q5zyWeN3kk4ctTR4jSbZY6PPy08XP" }

response = requests.request("GET", url, headers=headers)

data = json.loads(response.text)

save_path = '/Users/dirgh/Desktop/Quant/Dirgh-Shah-Quant-OA/frontend-stock-information/stocks/src'
file_name1 = "meta.json"
file_name2 = "time.json"
file_name3 = "quote.json"
file_name4 = "ref_data.json"

completeName1 = os.path.join(save_path, file_name1)
completeName2 = os.path.join(save_path, file_name2)
completeName3 = os.path.join(save_path, file_name3)
completeName4 = os.path.join(save_path, file_name4)

ref_data = data["chart"]["result"][0]
meta = ref_data["meta"]
timestamp = ref_data["timestamp"]
quote = ref_data["indicators"]["quote"][0]

with open(completeName1, 'w') as a:
    a.write("[")
    a.write(json.dumps(meta))
    a.write("]")

with open(completeName2, 'w') as b:
    b.write("[")
    b.write(json.dumps(timestamp))
    b.write("]")
    
with open(completeName3, 'w') as c:
    c.write("[")
    c.write(json.dumps(quote))
    c.write("]")
    
with open(completeName4, 'w') as d:
    d.write("[")
    d.write(json.dumps(ref_data))
    d.write("]")
    
    

