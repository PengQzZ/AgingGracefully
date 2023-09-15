from app import creaate_app

#启动我们的 flask 核心 对象
app = creaate_app()

#数据库迁移工具，版本管理 -- flask-migrate
#  flask cli   在命令行操控flask
from flask_migrate import Migrate
from models import sql

migrate = Migrate(app, sql)


#因为 我们在app 里面添加了 启动的配置路径 所以直接可以使用config目录里的变量
#run()函数是服务器启动函数 run 一般用做开发环境
if __name__ == "__main__":
        app.run(host=app.config['HOST'],
                port=app.config["PORT"],
                debug=app.config["DEBUG"]
                )

#web 开发模式
#MVC  M model 数据模型  v view  视图(用户界面)  c  control 控制-路由查找 -逻辑控制
#flask是--MTV  model 数据模型  v view  视图(用户界面) T template
