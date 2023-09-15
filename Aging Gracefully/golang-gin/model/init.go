package model

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/spf13/viper"
	_"github.com/jinzhu/gorm/dialects/mysql"
)

//
//import (
//	"fmt"
//	"github.com/jinzhu/gorm"
//
//	_ "github.com/jinzhu/gorm/dialects/mysql"
//	"github.com/spf13/viper"
//)
////可连接多个数据库
//type  DataBase struct {
//	Self *gorm.DB
////	Model *gorm.DB
//
//}
//
//var DB *DataBase
//
//func openDB(username, password,addr,name string) *gorm.DB  {
//	confg:=fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8",
//		username,password,addr,name)
//	db,err := gorm.Open("mysql",confg)
//	if err != nil{
//		fmt.Println(err,"dataBase connection failed!")
//	}
//	return db
//}
//
//func InitDB()* gorm.DB  {
//	//连接数据库
//	db:=openDB(viper.GetString("db.username"),
//		viper.GetString("db.password"),
//		viper.GetString("db.addr"),
//		viper.GetString("db.name"),
//		)
//	DB = &DataBase{
//		Self: db,
//	}
//	return db
//}

/*
//
//package model
//
//import (
//	"fmt"
//	"github.com/jinzhu/gorm"
//	_ "github.com/jinzhu/gorm/dialects/mysql"
//	"github.com/spf13/viper"
//)
//方便后续连接多个数据库
//type DataBase struct {
//	Self *gorm.DB
//	Flask *gorm.DB
//}

 */
var DB *gorm.DB

func openDB(username, password, addr, name string) *gorm.DB {
	//&parseTime=true
	config := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8&parseTime=true",
		username, password, addr, name)

	db, err := gorm.Open("mysql", config)
	if err != nil {
		fmt.Println(err, "Database connection failed!")
	}
	return db
}

func InitDB() *gorm.DB {

	DB = openDB(viper.GetString("db.username"),
		viper.GetString("db.password"),
		viper.GetString("db.addr"),
		viper.GetString("db.name"))
	return DB
}
