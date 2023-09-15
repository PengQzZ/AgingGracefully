package model


import "mih_pq87/libs/errno"
type ProductModel struct {
	ProductID int `json:"-" gorm:"column:product_id primary_key"`
	ProductName string `json:"product_name" gorm:"column:product_name"`
	ProductKind int `json:"product_kind" gorm:"column:product_kind"`
	ProductPrice float32 `json:"product_price" gorm:"column:product_price"`
	ProductAddr string `json:"product_address" gorm:"column:product_address"`
}

func (p *ProductModel) TableName() string  {
	return "info"
}

//新增
func (p *ProductModel) Create() error {
	return DB.Create(&p).Error
}

//修改
func (p *ProductModel) UpdatePro(Id int) error  {
	result := DB.Model(&p).Where("product_id=?", Id).Update(&p)
	if result.Error == nil && result.RowsAffected == 0{
		return errno.ErrInValiID
	}
	return result.Error //?????

}

//删除
func DeletePro(Id int) error{
	p := ProductModel{}
	p.ProductID = Id
	result:= DB.Delete(&p)
	if result.Error == nil && result.RowsAffected == 0{
		return errno.ErrInValiID
	}
	return result.Error
}

//查询  返回
func GetPorList() ([] *ProductModel,error){
	pros := make([] *ProductModel,0)
	result:=DB.Find(&pros)

	if result.Error == nil && result.RowsAffected == 0{
		return pros,errno.ErrEmptyData
	}
	return pros,result.Error

}

//查某一个\
func GetPro(Id int)(*ProductModel,error) {
	p:= &ProductModel{}
	result:= DB.First(&p,Id)
	return p, result.Error
}