#导入 sql 管理 工具
from flask_sqlalchemy import SQLAlchemy

#将工具 实例化为 sql 变量
sql = SQLAlchemy() # 实例化对象

#这个函数作用于 将 数据库管理工具的实例化对象sql
#绑定到 app实例化对象上
def init_app_db(app):
   sql.init_app(app)
