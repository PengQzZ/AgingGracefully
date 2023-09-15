#import json
from flask import request
from libs.auth import create_token
from fouter.user import UserForm
from . import user_bp
from flask_restful import Resource,Api
from models.user import User#,Lmage#数据库实例
from libs.response import generate_response
from fouter.user import LoginForm
from models.Resources import Lmage, Conmm,Huodong
api = Api(user_bp)
import asyncio
#异常标准化返回
#api.handle_error = default_error_handler
#handle_error 原本是处理异常返回的一个方法
#当发送异常时，会自动调用handle_error函数处理异常


#注册
class UserRegister(Resource):
    def post(self):
        # try:
        data = request.json
        form = UserForm(data=data)

        if form.validate() :
            User.create_user(
                #从request对象获取数据
                username=data.get("username"),
                #从form里获取
                password=form.password.data)
            return generate_response(message="注册成功", code=0)
        else:

            return generate_response(code=1, message=form.errors)

api.add_resource(UserRegister,"/User")


#登入
class LoginView(Resource):
    def post(self):
        #接收客户端数据
        data = request.json

        #调用form类生成实例化对象  验证器将前端 data 数据 传递进去
        form = LoginForm(data=data)

        user = form.validate()
        if user:
            #验证通过之后，标记前端
            token = create_token(user.id)
            print(token)

            return generate_response(message="login success", code=0, data={"token": token,
                                                                            "username": user.username})
        else:
            return generate_response(message="login fail", code=1)
api.add_resource(LoginView,"/login")

class UserCenter(Resource):
    def get(self):
        qqwqw = Lmage.query.all()  #获取数据库实例对象查询的 对象
        #print(123,qqwqw)
        #result = {}
        if isinstance(qqwqw,list):
            result2 = [dict(pro).pop("lmage") for pro in qqwqw] #遍历数据转换为字典类型，同时去除 id key
       # print(result2)
        #json_data = json.dumps(result)
        return generate_response(message="lianjie", code=0, data=result2)
api.add_resource(UserCenter,"/UserCenter")


#当无线循环组件每循环一次都会，发送里面组件的id





#社区查询
class Cs(Resource):
    def get(self):
        data = request.json
        a = data["id"]
        qqwqw = Conmm.query.get(a) #获取数据库实例对象查询的 对象
        return generate_response(message="sheqv", code=0, data=qqwqw.SQname)
api.add_resource(Cs,"/cs")




#活动表
class Hdong(Resource):
    def get(self):
        data = request.json
        shuive = Huodong.query.get(data["id"])
        print(shuive.sheqv,
              shuive.huodongname,
              shuive.shujiang,
              shuive.didian,
              shuive.neirong,
              shuive.jieshuSJ)
        return generate_response(message="huodong", code=0, data=shuive.shujiang)
api.add_resource(Hdong,"/Hdong")



#用户头像
class UserCenter2(Resource):
    def post(self):
        qqwqw = Lmage.query.all()  #获取数据库实例对象查询的 对象
        #print(123,qqwqw)
        #result = {}
        if isinstance(qqwqw,list):
            result2 = [dict(pro).pop("lmage") for pro in qqwqw] #遍历数据转换为字典类型，同时去除 id key
        # for row in qqwqw:
        #     row_dict = row._asdict()
        #     result.append(row_dict)
        print(result2)
        #json_data = json.dumps(result)
        return generate_response(message="lianjie", code=0, data=result2)
api.add_resource(UserCenter2,"/UserCenter2")


# post接收客户端数据 data = request.json
# get接收客户端数据  data = request.args
#
#