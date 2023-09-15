#全局变量  这是主机名以及 端口号
DEBUG = True
HOST="127.0.0.1"
PORT = 9000



DATABASE_HOST = "192.168.142.129"
DATABASE_database = 'pengqing730'

#DATABASE_database = 'Llq'

DATABASE_USER = "sc"
DATABASE_PASS = 'sc123789'
DATABASE_PORT = 3306

# #orm 数据库连接设置                           #用户名：密码@数据库地址：端口/库名？编码
# SQLALCHEMY_DATABASE_URI = "mysql+pymysql://sc:sc123789@192.168.6.254:3306/Llq?charset=utf8"
#
# #内部私钥
# SECRET_KEY = "123456"
# EXPIRES_IN = "10"

#orm 数据库连接设置                           #用户名：密码@数据库地址：端口/库名？编码
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://sc:sc123789@192.168.142.129:3306/pengqing730?charset=utf8"
#SQLALCHEMY_DATABASE_URI = "mysql+pymysql://sc:sc123789@192.168.6.254:3306/Llq?charset=utf8"

#内部私钥
SECRET_KEY = "123456"
EXPIRES_IN = 6000
