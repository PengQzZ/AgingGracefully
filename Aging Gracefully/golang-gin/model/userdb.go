package model

import (
	"golang.org/x/crypto/bcrypt"
	"mih_pq87/libs/errno"
	"time"
)

type UserModel struct {

	UserId int `json:"-" gorm:"column:id primary_key"`
	UserName string `json:"username" gorm:"column:username"`
	PassWord string `json:"password" gorm:"column:password"`
	Role int `json:"role" gorm:"column:role"`
	Add_Time time.Time `json:"add_time" gorm:"add_time"`
	//可更改为Time  配置文件需要更新

}
func (u *UserModel) UserT() string  {
	return "userdb"
}
//
//func (u *UserModel) BeforeCreate() error {
//	u.Add_Time = time.Now().Format("2006-01-02 15:04:05")
//	return nil
//}



//新增
func (u *UserModel) AddUser() error {
	hashpass,err := bcrypt.GenerateFromPassword([]byte(u.PassWord),bcrypt.DefaultCost)

	if err != nil {
		return err
	}
	u.PassWord = string(hashpass)
	return DB.Create(&u).Error
}

//修改
func (u *UserModel) UpdatePro(Id int) error  {
	result := DB.Model(&u).Where("product_id=?", Id).Update(&u)
	if result.Error == nil && result.RowsAffected == 0{
		return errno.ErrInValiID
	}
	return result.Error //?????

}

//删除
func DeletePro2(Id int) error{
	u := UserModel{}
	u.UserId = Id
	result:= DB.Delete(&u)
	if result.Error == nil && result.RowsAffected == 0{
		return errno.ErrInValiID
	}
	return result.Error
}

//查询  返回
func GetPorList2() ([] *UserModel,error){
	pros := make([]  *UserModel,0)
	result:=DB.Find(&pros)

	if result.Error == nil && result.RowsAffected == 0{
		return pros,errno.ErrEmptyData
	}
	return pros,result.Error

}

//查某一个\
func GetPro2(Id int)( *UserModel,error) {
	//println("到model userdb")
	u := &UserModel{}

	result := DB.First(&u, Id)

	return u, result.Error
}

//查某一个name\
func GetPro3(username string)( *UserModel,error) {
	//println("到model userdb")
	u := &UserModel{}

	result := DB.First(&u, username)

	return u, result.Error
}

//将org模型映射到数据库里去
func AutoUserMigrate()error  {
	return DB.AutoMigrate(&UserModel{}).Error

}

func GetUserByName(username string) (*UserModel,error)  {
	u := &UserModel{}
	d := DB.Where("username=?",username).First(&u)
	return u,d.Error


}

