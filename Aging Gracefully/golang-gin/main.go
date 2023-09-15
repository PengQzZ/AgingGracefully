package main

import (

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
	"mih_pq87/config"
	"mih_pq87/model"
	"mih_pq87/router"
)

func main()  {
	//加载配置文件 调用config.Init 去加载配置
	if err := config.Init("");err != nil{
		panic(err)
	}

	//init db 初始化数据库
	//db := model.InitDB()
	model.InitDB()
	//defer db.Close()
	//设置 gin 的运行模式
	gin.SetMode(viper.GetString("runmode"))
	//fmt.Println(viper.GetString("runmode"))

	//路由
	g := gin.Default()
	router.Load(g)
	g.Run(viper.GetString("addr"))

}