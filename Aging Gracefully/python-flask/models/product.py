from . import sql
import datetime
#创建 模型

class ProductInfo(sql.Model):
    #跟 product_info 数据库 建立连接
    __tablename__="info"
    #Column() 类用于定义表结构中的列。它接受多个参数来配置和定义列的属性、数据类型、约束等
    # primary_key = True, autoincrement 是不是主键 是不是自增
    product_id = sql.Column(sql.Integer,primary_key=True,autoincrement = True)
    product_name = sql.Column(sql.String(256))
    # 创建外键；联系   relationship  orm层的外键  数据库里其实是没有的
    #  product_kind字段 与pro_kind表里的kind_id字段 建立外键
    product_kind = sql.Column(sql.ForeignKey('pro_kind.kind_id'))

    product_price = sql.Column(sql.Float)
    product_address = sql.Column(sql.String(256))

    add_time = sql.Column(sql.DateTime,default=datetime.datetime.now)
    update_time = sql.Column(sql.DateTime,default=datetime.datetime.now)

#通过dict函数将对象变成字典，对象要实现ktys和__getitem__ 的方法
    #dict函数转化字典的时候，自动调用对象中的 keys方法 定义字典中的key
    #然后按照字典的取值方式（__getitem__去获取对应的key值）
    def keys(self):
        return ('product_name','product_kind','product_price','product_address')
    def __getitem__(self, item):
        if item == 'produck_kind':
            return self.kind.kind_name
        else:
            return getattr(self,item)
#这是 数据库 里的 prokind表
class ProKind(sql.Model):
    __tablename__ = "pro_kind"
    #获得 kind_id 这个字段 对象
    kind_id = sql.Column(sql.Integer, primary_key=True, autoincrement=True)
    # 获得 kind_name 这个字段 对象
    kind_name = sql.Column(sql.String(256))
    #建立联系  与ProductInfo表建立联系  我们在ProductInfo表里设置了外键
    #一对多的联系
    pro_info = sql.relationship("ProductInfo",backref = "kind")
    #一对一联系
    #pro_info = sql.relationship("ProductInfo",backref = "kind",uselist=False)

    #数据库关系  建立关系  relationship
#  一对一   一对多 多对多  数据库关系3种
#多对多需要中间表
#对象可以通过relationship的关系属性来访问建立关系的别的表字段
