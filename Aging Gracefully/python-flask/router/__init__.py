#蓝图封装模板
from .user import user_bp

def init_app(app):
    app.register_blueprint(user_bp)
#注意，在导入 product 的时候
# 要放在 蓝图实例的下面，
# 因为在product模块里面使用蓝图，
# 如果放在上面先导入的话，蓝图实例还没有加载
#Llq_bpt_dp就是蓝图的实例化对象