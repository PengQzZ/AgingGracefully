package user
import (
	"github.com/gin-gonic/gin"
	"mih_pq87/model"
	."mih_pq87/handler"
	"mih_pq87/libs/errno"
	"strconv"
)


//
func GetProductInfoList(c *gin.Context)  {
	pros,err:=model.GetPorList2()
	if err!= nil{
		SendResponse(c,errno.ErrEmptyData,err.Error())
		return
	}
	SendResponse(c,nil,pros)
}

//
//func GetProductInfoList2(c *gin.Context)  {
//
//	pros,err:=model.Create()
//	if err!= nil{
//		SendResponse(c,errno.ErrEmptyData,err.Error())
//		return
//	}
//	SendResponse(c,nil,pros)
//}
//




//
func GetProductInfo(c *gin.Context){
	println("GetPInf到user gey_po")
	Id,err:= strconv.Atoi(c.Param("id"))
	if err!= nil{
		SendResponse(c,errno.ErrArgsNotComplete,"idcw")
		return
	}
	pro,err := model.GetPro2(Id)
	if err !=nil{
		SendResponse(c,errno.ErrDatabase,err.Error())
		return
	}
	SendResponse(c,nil,pro)


}

func AutoMigrate(c *gin.Context)  {
	if err := model.AutoUserMigrate(); err != nil{
		SendResponse(c,errno.ErrDatabase,err.Error())
		return


	}


	SendResponse(c,nil,"迁移成功")
}