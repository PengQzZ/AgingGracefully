import serviceAxios from "@/utils/serviceAxios";

export const Hom4 = () => {
  return serviceAxios({
    url: "/v1/Hom4",
    method: "get",
   
  });
};

export const getHomeSwiper2 = (data) => {
    //console.log("这里是APIAPIAPI",data)
    return serviceAxios({
      url: "/v1/UserCenter3",
      method: "post",
      data
     
    });
    
  };

  export const poshRoi = (data) => {
    //console.log("这里是APIAPIAPI",data)
    return serviceAxios({
      url: "/v1/Roi",
      method: "post",
      data
    }); 
  };
  export const getLiComp = (data) => {
    //console.log("这里是APIAPIAPI",data)
    return serviceAxios({
      url: "/v1/LiComp",
      method: "get",
      data
    });
  };
  export const poshRoi2 = (data) => {
    //console.log("这里是APIAPIAPI",data)
    return serviceAxios({
      url: "/v1/Roi2",
      method: "post",
      data
    }); 
  };

 export const getLiComp2 = (data) => {
    //console.log("这里是APIAPIAPI",data)
    return serviceAxios({
      url: "/v1/LiComp2",
      method: "get",
      data
    });
  };