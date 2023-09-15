from threading import Lock, RLock
from flask import request
from libs.response import generate_response
from models.Resources import Lmage, Kui
from . import user_bp
from flask_restful import Resource,Api
api = Api(user_bp)
import asyncio

asa = {"id":1}
asa2 = {"id":1}
lock = Lock()  #锁
class LiComp(Resource):
    def get(self):
        id_a = asa['id']
        if id_a <= 10 :
            pri = Kui.query.get(id_a)
            print(pri.lmage)
            print(pri.id)
            lock.release()
            return generate_response(message="LiComp list", code=0, data=pri.lmage)
        else:
            print(pri.id)
            asa["id"] = 1
            return generate_response(message="数据库被榨干了",code=1)
api.add_resource(LiComp, "/LiComp")


class LiComp2(Resource):
    def get(self):
        id_a = asa2['id']
        if id_a <= 10 :
            pri = Kui.query.get(id_a)
            print(pri.lmage)
            print(pri.id)
            lock.release()
            return generate_response(message="LiComp list2", code=0, data=pri.lmage)
        else:
            asa2["id"] = 1
            return generate_response(message="数据库被榨干了",code=1)
api.add_resource(LiComp2, "/LiComp2")



class Roi(Resource):
    def post(self):
        lock.acquire()
        data = request.json
        # print(data)
        global asa
        asa["id"] = data.get("id")

        print(asa["id"])

        if isinstance(asa, dict):
             return generate_response(message=" Roidict", code=0)
        return generate_response(message="数据错误 Roi", code=0)
api.add_resource(Roi, "/Roi")


class Roi2(Resource):
    def post(self):
        lock.acquire()
        data = request.json
        # print(data)
        global asa2

        asa2["id"] = data.get("id2")

        print(asa2["id"])
        if isinstance(asa2, dict):
             return generate_response(message=" Roidict2", code=0)
        return generate_response(message="数据错误 Roi2", code=0)
api.add_resource(Roi2, "/Roi2")