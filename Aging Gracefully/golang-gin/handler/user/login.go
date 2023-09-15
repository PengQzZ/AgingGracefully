package user

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"mih_pq87/handler"
	"mih_pq87/libs/errno"
	"mih_pq87/libs/token"
	"mih_pq87/model"
)


//token 返回的数据格式
type RspData struct {
	Token string `json:"token"`
	Username string `json:"username"`
}



func Login(c *gin.Context)  {
	var u model.UserModel
	//以数据库映射为结构体，接收客户端传递过来的参数
	if err:= c.ShouldBindJSON(&u);err!=nil {
		handler.SendResponse(c,errno.Errbind,err.Error())
		return
	}
	data,err := model.GetUserByName(u.UserName)
	if err != nil{
		handler.SendResponse(c,errno.ErrUserNotFound,err.Error())
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(data.PassWord),[]byte(u.PassWord));err!=nil{
		handler.SendResponse(c,errno.ErrPasswordIncorrect,err.Error())
		return
	}


	//
	t,err:= token.Sign(c,token.Context{data.UserId,data.UserName},"")
	if err != nil{
		handler.SendResponse(c , errno.ErrToken, err.Error())
		return
	}


	handler.SendResponse(c , nil,RspData{t,data.UserName})
}


