from _datetime import datetime
import time
from itsdangerous import TimedSerializer
from flask import request,current_app
from models.user import ApiToken,ApiPermission
import jwt
from jwt.exceptions import ExpiredSignatureError, ImmatureSignatureError, InvalidSignatureError

#哈希算法 --MD5
from hashlib import md5
def auth_required(func):
    def inner(*args,**kwargs):
        a = request.args.get("api")

        if(a =="1"  and api_auth())or token_auth():
            #登入成功就运行 不成功就不行
            return  func(*args,**kwargs)

        else:
            return "认证失败"
    return inner

#api授权函数  返回为真就认证 成功 为假就失败
#单向加密
def api_auth():

    params = request.args
    appid = params.get("appid")
    salt = params.get("salt")  # 盐值
    sign = params.get("sign")  # 签名
    timestamp = params.get(("timestamp"))

    if timestamp is not None and int(time.time()) - int(float(timestamp)) > 600:
        return False

    api_token = ApiToken.query.filter_by(appid=appid).first()
    if not api_token:
        return False

    # 验证有没有此url和方法的权限
    if not has_permission(api_token, request.path, request.method.lower()):
        return False
    # 获取数据库里的密钥
    secretkey = api_token.secretkey
    # 生成服务端的签名
    # 可以加上时间戳来防止签名被别人盗取，重复访问
    user_sign = appid + salt + secretkey + timestamp
    m1 = md5()
    m1.update(user_sign.encode(encoding="utf-8"))
    # 判断客户端传递过来的签名和服务端生成签名是否一致
    if sign != m1.hexdigest():
       # raise AuthFailException
        return False
    else:
        return True



# url验证
#api_token表记录
#method 客户端请求过来的方法
def has_permission(api_token, url, method):
    # 客户端请求的方法和url
    mypermission = method + url
    # 获取此api_token对象的所有url权限
    all_permission = [permission.method_type + permission.url
                      for permission in api_token.manage]
    if mypermission in all_permission:
        return True
    else:
        return False
#api授权流程
#客户端向服务端申请授权，服务端向客户端提供 appid 和 secretkey,以及加密算法
#客户端按照服务端提供的信息，算法，生成签名，请求时发送给服务端
#服务端收到信
#
#息验证是否成功

#token

def create_token(uid):
    #生成token
    expir_in = current_app.config.get("EXPIRES_IN")
    payload = {"uid":uid, "exp":time.time() + expir_in}
    print(payload)
    key = current_app.config["SECRET_KEY"]
    token = jwt.encode(payload, key)
    return token


#验证token
def token_auth():
    token = request.headers.get("token")
    if token:
        try:
            print(time.time(), datetime.now())
            jwt_obj = jwt.decode(token, current_app.config.get("SECRET_KEY"),
                                 algorithms=["HS256"])
        except InvalidSignatureError as  e:
            print("token不合法", e)
            return False
        except ExpiredSignatureError as e:
            print("token过期", e)
            return False
        return True
    else:
        return False