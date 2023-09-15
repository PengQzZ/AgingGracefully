package errno

//自定义错误类型
var (
	OK = &Errno{Code: 0, Message: "success!"}
	InternalServerError = &Errno{Code: 1001, Message: "Internal server error"}
	Errbind = &Errno{Code: 1002, Message: "Error occurred whie binding the request body to struct."}
	ErrEncrypt           = &Errno{Code: 20101, Message: "Error occurred while encrypting the user password."}
	ErrDatabase         = &Errno{Code: 20002, Message: "Database error."}
	ErrArgsNotComplete = &Errno{Code: 20101, Message: "Incomplete parameters"}
	ErrToken            = &Errno{Code: 20003, Message: "Error occurred while signing the JSON web token."}
	ErrValidate         = &Errno{Code: 20004, Message: "Error validate struct"}
	ErrInValiID		= &Errno{Code: 20005,Message: "The invalid id NO"}


	ErrHeader = & Errno{Code: 20105,Message: "Token"}
	ErrEmptyData = &Errno{Code: 20006,Message: "The empty data no"}
	// user errors
	ErrUserNotFound      = &Errno{Code: 20102, Message: "The user was not found."}
	ErrTokenInvalid      = &Errno{Code: 20103, Message: "The token was invalid."}
	ErrPasswordIncorrect = &Errno{Code: 20104, Message: "The password was incorrect."}

)