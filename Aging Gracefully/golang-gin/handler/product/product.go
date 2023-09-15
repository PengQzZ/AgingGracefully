package product

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"  //validator/v10数据校验
	"mih_pq87/libs/errno"
	"mih_pq87/model"
	 . "mih_pq87/handler"
)

//func GetProductInfo(c *gin.Context)  {
//	c.String(200,"this is get product info")
//}

func AddProduct(c *gin.Context)  {
	var p model.ProductModel
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

	fmt.Println(p)
	if err := p.Create(); err != nil{
		//c.String(500,"add error!")
		SendResponse(c,errno.ErrDatabase,err.Error())
		return
	}
	//标准化返回
	SendResponse(c,errno.OK,nil)

	//c.String(200, "add 成功")

}
