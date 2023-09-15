package user

import (
	"github.com/gin-gonic/gin"
	"mih_pq87/libs/errno"
	"mih_pq87/model"
	."mih_pq87/handler"
	"strconv"
)


func DeletePro( c *gin.Context)  {
	Id,err := strconv.Atoi(c.Param("id"))
	if err != nil{
		SendResponse(c,errno.ErrArgsNotComplete,"id错误")
	}
	if err:= model.DeletePro2(Id); err!=nil{
		SendResponse(c,errno.ErrDatabase,"id错误")
	}
	SendResponse(c,errno.OK,nil)
}





