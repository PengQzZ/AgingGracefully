from flask import Blueprint

user_bp = Blueprint("user_bp",__name__,url_prefix="/v1")


from . import user
#login,

from  . import  honm
from  . import auobt