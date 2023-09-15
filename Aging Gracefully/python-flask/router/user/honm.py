from threading import Lock, RLock
from flask import request
from libs.response import generate_response
from models.Resources import Lmage, Kui
from . import user_bp
from flask_restful import Resource,Api
api = Api(user_bp)
import asyncio

asa = {}
lock = Lock()  #锁
class Hom4(Resource):
    def get(self):

        id_a = asa['id']
        a = id_a[0]
        if a <= 7 :
            pri = Kui.query.get(a)
            print(pri.lmage)
            print(pri.id)
            lock.release()
            return generate_response(message="lianjie", code=0, data=pri.lmage)
        else:
            return generate_response(message="数据库被榨干了",code=0,data=500)
api.add_resource(Hom4, "/Hom4")

class UserCenter3(Resource):
    def post(self):
        lock.acquire()
        data = request.json
        # print(data)
        global asa
        asa["id"] = data.get("id")
        print(asa["id"])
        if isinstance(asa, dict):
            return generate_response(message="User3dict", code=0)
        return generate_response(message="数据错误Us3", code=1)
api.add_resource(UserCenter3, "/UserCenter3")