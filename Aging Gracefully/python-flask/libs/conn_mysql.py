import pymysql
# 用做 数据库的绑定 连接
# 参数都是从 settinfs文件调取的
from config import settings
host2 = settings.DATABASE_HOST
user2 = settings.DATABASE_USER
password2 = settings.DATABASE_PASS
database2 = settings.DATABASE_database
port2 = settings.DATABASE_PORT
def conn_mysql():
    # 打开数据库连接
    DB = pymysql.connect(
        host=host2,
        user=user2,
        password=password2,
        database=database2,
        port=port2
    )
    return DB

