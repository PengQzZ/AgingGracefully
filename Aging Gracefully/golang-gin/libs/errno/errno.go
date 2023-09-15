package errno

import "fmt"


// 定义错误码结构体: Errno => 仅用于保存错误码及错误提醒，便于统一管理
type Errno struct {
	Code    int
	Message string
}

/*
实现Error方法 才属于error接口类型
type error interface {
	Error() string
}
*/

// 给Errno添加字符串返回方法：obj.Error()
func (err Errno) Error() string {
	return err.Message
}

/*
// Err represents an error
// 定义错误信息结构体：Err => 用于返回格式化的错误信息
//type Err struct {
//	Code    int
//	Message string
//	Err     error
//}

// 创建错误 => 实例化一个Err
//func New(errno *Errno, err error) *Err {
//	return &Err{Code: errno.Code, Message: errno.Message, Err: err}
//}

// 给Err添加Add方法，添加错误消息
//func (err *Err) Add(message string) error {
//	//err.Message = fmt.Sprintf("%s %s", err.Message, message)
//	err.Message += " " + message
//	return err
//}

// 给Err添加Addf方法，添加错误消息，可加更多数据
//func (err *Err) Addf(format string, args ...interface{}) error {
//	//return err.Message = fmt.Sprintf("%s %s", err.Message, fmt.Sprintf(format, args...))
//	err.Message += " " + fmt.Sprintf(format, args...)
//	return err
//}

// 给Err添加Error方法，返回格式化的错误信息
// Error是error接口的方法, 用于输出
//func (err *Err) Error() string {
//	return fmt.Sprintf("Err - code: %d, message: %s, error: %s", err.Code, err.Message, err.Err)
//}
*/

// 解析定制的错误 => 该函数主要是为了标准化返回
// 没错误返回OK、有错误返回对应错误、未知错误返回InternalServerError
// 返回err的Message信息
func DecodeErr(err error) (int, string) {
	if err == nil {
		return OK.Code, OK.Message
	}

	// type-switch
	fmt.Println("haha:", err)
	switch typed := err.(type) {
	//case *Err:
	//	return typed.Code, typed.Error()
	case *Errno:
		return typed.Code, typed.Message
	default:
	}
	return InternalServerError.Code, err.Error()
}



