#核心对象
import os
from libs.conn_mysql import conn_mysql
from  flask import  Flask
def creaate_app():
    #文件启动
    app = Flask(__name__)  #相当于 main 文件 就是要 启动这个 Flask 框架
    #from_object() 方法用于导入配置信息，它接受一个字符串参数，
    # 指定包含配置的 Python 对象路径。下面就是 路径
    app.config.from_object('config.settings')

    #环境变量启动'FLASK_CONK  在启动的时候 在'FLASK_CONK 环境变量里找
    if 'FLASK_CONK' in os.environ:  #
        app.config.from_envvar('FLASK_CONF')

    #蓝图注册
    import router #导router 目录
    # 调用 router目录里的 init_app（）函数 这个函数作用于 蓝图的注册
    # 将 app实例对象传递进去
    router.init_app(app)

    #smy数据库的连接与app实例属性建立
    #现在我们创建了 app 属性 mysql_1 这个属性作用于 与mysql数据库连接绑定
    app.mysql_1 = conn_mysql()

    #klask框架的数据库管理工具SQLAlchemy() 绑定
    import models
    models.init_app_db(app) #将框架的实例化对象传递给 数据库管理工具 定义的函数

    return app

