
import hashlib
import random
import string
from datetime import time
import requests

import time


def calculate_sign(appid, salt, secretkey,timestamp):

    timestamp = str(timestamp)
    user_sign = appid + salt + secretkey + timestamp
    m1 = hashlib.md5()
    m1.update(user_sign.encode(encoding='utf-8'))
    return m1.hexdigest()


#number_of_strings = random.randint(1, 10)
length_of_string = random.randint(1, 10)
#
#for x in range(number_of_strings):
salt = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length_of_string))
# random.choices()

appid = 'sc'
secretkey = '123456'
timestamp = time.time()
sign = calculate_sign(appid, salt, secretkey,timestamp)

url = 'http://127.0.0.1:9001/product'
params = {
    'appid': appid,
    'salt': salt,
    'sign': sign,
    'timestamp':timestamp

}

response = requests.get(url, params=params)

if response.status_code == 200:
    print(response.json())
else:
    print(f"请求失败，状态码：{response.status_code}")
