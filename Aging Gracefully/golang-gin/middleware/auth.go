package middleware

import (
	"github.com/gin-gonic/gin"
	"mih_pq87/handler"
	"mih_pq87/libs/errno"
	"mih_pq87/libs/token"
)

func AuthMiddleware()gin.HandlerFunc  {
	return func(c *gin.Context) {
		if   _,err := token.ParseRequest(c); err!= nil{
			handler.SendResponse(c,errno.ErrTokenInvalid,nil)
			c.Abort()
			return
		}
		// 跳转视图函数处理之前的 程序， 必须要写在 C.Next() 之前
		//反之亦然
		c.Next()


	}
}
