package handler

import (
	"github.com/gin-gonic/gin"
	"mih_pq87/libs/errno"
	"net/http"
)

//定义返回的数据格式
type Response struct {
	Code int `json:"code"`
	Message string `json:"message"`
	Data interface{} `json:"data"`
}

//定义返回的函数
func SendResponse(c *gin.Context,err error, data interface{})  {
	code, message := errno.DecodeErr(err)
	resp := Response{
		Code: code,
		Message: message,
		Data: data,
	}
	c.JSON(http.StatusOK, resp)
}
