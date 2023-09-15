package config

import (
	"github.com/spf13/viper"  //解析配置文件 viper
)

type Config struct {
	Name string

}
//viper 解析配置： json  yaml  xml  监听配置文件(当文件被修改可以监测到)
/*
读取配置文件的包 ， 支持配置文件的格式： json  yanml xml hcl

支持从命令行远程配置中心读取配置
支持从环境变量中读取
*/
func (c *Config) initConfig() error  {
	if c.Name != ""{
		viper.SetConfigFile(c.Name)
	}else {
		//如果没有传入 数据 就 使用 conf 下面的 config文件
		viper.AddConfigPath("conf")
		viper.SetConfigName("config")
	}
	//解析 yanml 类型 数据
	viper.SetConfigType("yaml")

	//读取配置文件
	if err := viper.ReadInConfig();err != nil{
		return err
	}
	return nil
}

//初始化函数 会自动调用 initConfig 函数进行解析
func Init(cfg string) error {
	c:=Config{
		Name: cfg,
	}
	if err:=c.initConfig();err !=nil{
		return err
	}
	return nil
}