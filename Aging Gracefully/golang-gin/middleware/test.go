package middleware

import (
	"fmt"
	"github.com/gin-gonic/gin"
)

func TestMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		fmt.Println("处理函数运行之前。。")
		c.Next()
		fmt.Println("处理函数运行之后。。")


	}
}




