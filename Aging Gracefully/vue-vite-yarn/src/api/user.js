import serviceAxios from "@/utils/serviceAxios";

export const getTest = (params) => {
  return serviceAxios({
    url: "/test",
    method: "get",
    params
  });
};


export const login = (data) => {
  return serviceAxios({
    url: "/v1/login",
    method: "post",
    data
  });
};

export const logout = (params) => {
  return serviceAxios({
    url: "/auth/logout",
    method: "get",
    params
  });
};


export const checkUsername = (params) => {
  return serviceAxios({
    url: "/check/username",
    method: "get",
    params,
  });
};

export const createUser = (data) => {
  return serviceAxios({
    url: "/v1/User",
    method: "post",
    data
  });
  
};


export const getUserInfo = (username) => {
  return serviceAxios({
    url: "/v1/user/"+username,
    method: "get"
  });
};


export const uploadAvator = (username, data)=>{
	return serviceAxios({
	  url: "/v1/user/"+username+"/avator",
	  method: "post",
	  data
	});
};


