package product

import (
	"github.com/gin-gonic/gin"
	"mih_pq87/model"
	."mih_pq87/handler"
	"mih_pq87/libs/errno"
	"strconv"
)


//
func GetProductInfoList(c *gin.Context)  {
	pros,err:=model.GetPorList()
	if err!= nil{
		SendResponse(c,errno.ErrEmptyData,err.Error())
		return
	}
	SendResponse(c,nil,pros)
}


//
func GetProductInfo(c *gin.Context){
	Id,err:= strconv.Atoi(c.Param("id"))
	if err!= nil{
		SendResponse(c,errno.ErrArgsNotComplete,"idcw")
		return
	}
	pro,err := model.GetPro(Id)
	if err !=nil{
		SendResponse(c,errno.ErrDatabase,err.Error())
		return
	}
	SendResponse(c,nil,pro)


}