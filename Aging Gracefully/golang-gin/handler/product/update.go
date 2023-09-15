package product

import (
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"mih_pq87/libs/errno"
	"mih_pq87/model"
	."mih_pq87/handler"
	"strconv"
)

func UpdatePro(c *gin.Context)  {
	var p model.ProductModel


	Id,err := strconv.Atoi(c.Param("id"))
	if err != nil{
		SendResponse(c,errno.ErrArgsNotComplete,"id错误")
	}
	if err := c.ShouldBindJSON(&p);err != nil{
		SendResponse(c,errno.Errbind,err.Error())
		return
	}
	//
	validate := validator.New()
	if err := validate.Struct(p);err!=nil{
		SendResponse(c,errno.ErrValidate,err.Error())
		return
	}

	p.ProductID = Id
	if err := p.UpdatePro(Id); err != nil{
		SendResponse(c,errno.ErrDatabase,err.Error())
		return
	}
	SendResponse(c,errno.OK,nil)

}
