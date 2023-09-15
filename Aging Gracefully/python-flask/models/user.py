#API授权表的模型
#多对多的关系
import datetime
#from .Resources import Conmm
from  models import sql
#from sqlalchemy import Column, Integer, ForeignKey
#generate_password_hash 这个函数生成被哈希的密码
from werkzeug.security import generate_password_hash
db = sql

app_permission = db.Table("app_permission",
                          db.Column("api_id",db.ForeignKey("api_token.id")),
                          db.Column("permission_id",db.ForeignKey("api_permission.id"))
                          )
# api_token表
#存放的是授权密钥，以及授权id
class ApiToken(db.Model):
    __tablename__ = "api_token"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    appid = db.Column(db.String(128), nullable=False)
    secretkey = db.Column(db.String(128), nullable=False)
    #通过中间表去创建多对多的关系
    manage = db.relationship("ApiPermission", secondary=app_permission, backref="token")

#存放的是授权的url
class ApiPermission(db.Model):
    __tablename__ = "api_permission"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    url = db.Column(db.String(128), nullable=False)
    method_type = db.Column(db.String(128), nullable=False)

class User(sql.Model):
    #__table__ 被赋值为字符串 "userdb"，
    # 这意味着该类将与名为 "userdb" 的数据库表相关联
    __tablename__ = "userdb"
    id = sql.Column(sql.Integer,primary_key = True,autoincrement=True)
    username = sql.Column(sql.String(128),nullable = False)
    _password = sql.Column("password",sql.String(128),nullable = False)
    role = sql.Column(sql.Integer,nullable = True)
    #
    add_time = db.Column(db.DateTime, default=datetime.datetime.now)

#自带装饰器，属性包装装饰器，把方法当作属性使用
    @property
    #代表  当我调用了 password方法 就会返回  _password 实例对象
    def password(self):# 使用self引用实例的属性 代表类本身
        return self._password

    @password.setter
    def password(self,value):
        self._password = generate_password_hash(value)

    @classmethod #类方法  的第一个参数代表自己本身  User
    def create_user(cls,username,password):
        user = cls() #实例化对象
        #将传进去的 参数 赋值给 类属性本身
        user.username = username
        user.password = password  #这个User类的_password属性被赋值为password
        sql.session.add(user)
        sql.session.commit()
    def keys(self):
        return ('id', 'username', '_password', 'role','add_time')
    def __getitem__(self, item):

            return getattr(self, item)

