package router

import (
	"github.com/gin-gonic/gin"
	"mih_pq87/handler/product"
	"mih_pq87/handler/user"
	"mih_pq87/middleware"
	"net/http"
)

func Load(g *gin.Engine)  {
	//每一个，http方法 都维护了 一颗方法树
	//
	pro := g.Group("/v1/product")

	{
		pro.GET("/", product.GetProductInfoList)
		pro.GET("/:id", product.GetProductInfo)

		pro.POST("",product.AddProduct)
		pro.PUT("/:id",product.UpdatePro)
		pro.DELETE("/:id",product.DeletePro)
	}

	//
	//use := g.Group("/v1/user")
	//{
	//	use.GET("/",user.GetProductInfoList)
	//	use.GET("/:id",user.GetProductInfo)
	//
	//	use.POST("",user.AddProduct)
	//	use.PUT("/:id",user.UpdatePro)
	//	use.DELETE("/:id",user.DeletePro)
	//
	//
	//
	//}




	//使用这个路由对数据库创建了 orm的 模型  表到数据库
	route_user := g.Group("/v1/uroute_user")
	{
		route_user.GET("/",user.GetProductInfoList)
		route_user.GET("/:id",user.GetProductInfo)

		route_user.POST("/",user.CreateUser)
		route_user.PUT("/:id",user.UpdatePro)
		route_user.DELETE("/:id",user.DeletePro)
		route_user.GET("/migrate",user.AutoMigrate)

	}
	//登入
	g.POST("/v1/login",middleware.TestMiddleware(),user.Login)





	//没有url 就调用下列函数
	g.NoRoute(func(c *gin.Context) {
		c.String(http.StatusNotFound,"incorrect API route.")
	})

	//全局使用中间件
	g.Use(middleware.TestMiddleware())


}