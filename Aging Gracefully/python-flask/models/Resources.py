#
#
import datetime
#from sqlalchemy import Column, Integer, ForeignKey
from  models import sql
db = sql

#图片表
class Lmage(sql.Model):
    __tablename__ = "static"
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    lmage = sql.Column(sql.String(360), nullable=True)

#通过dict函数将对象变成字典，对象要实现ktys和__getitem__ 的方法7.22
    #dict函数转化字典的时候，自动调用对象中的 keys方法 定义字典中的key
    #然后按照字典的取值方式（__getitem__去获取对应的key值）
    def keys(self):
        return ("id",'lmage')
    def __getitem__(self, item):

            return getattr(self,item)


#首页图片表
class Kui(sql.Model):
    __tablename__ = "static_2"
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    lmage = sql.Column(sql.String(360), nullable=True)

#通过dict函数将对象变成字典，对象要实现ktys和__getitem__ 的方法7.22
    #dict函数转化字典的时候，自动调用对象中的 keys方法 定义字典中的key
    #然后按照字典的取值方式（__getitem__去获取对应的key值）
    def keys(self):
        return ("id",'kui')
    def __getitem__(self, item):

            return getattr(self,item)





#记录后台活动表
class Huodong(sql.Model):
    __tablename__ = "huodong"
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    sheqv = sql.Column(sql.Integer, nullable=False)
    huodongname = sql.Column(sql.String(128),nullable=False)
    shujiang = db.Column(db.DateTime, default=datetime.datetime.now,nullable=False)
    didian = sql.Column(sql.String(360),nullable=False)
    neirong = sql.Column(sql.String(3000),nullable=False)
    jieshuSJ = db.Column(db.DateTime, default=datetime.datetime.now,nullable=False)

    def keys(self):
        return ("id",'sheqv',"huodongname","shujiang","didian","neirong","jieshuSJ")
    def __getitem__(self, item):

            return getattr(self,item)



#记录用户所属社区表


class Conmm(sql.Model):
    __tablename__ = "conmm"
    id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    SQname = sql.Column(sql.String(128), nullable=False)
    def keys(self):
        return ("id", "SQname")
    def __getitem__(self, item):
        return getattr(self, item)



