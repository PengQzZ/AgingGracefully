import serviceAxios from "@/utils/serviceAxios";

export const getHomeMenu = () => {
  return serviceAxios({
    url: "/home-menu",
    method: "get"
  });
};

export const getHomeSwiper = () => {
  return serviceAxios({
    url: "/v1/UserCenter",
    method: "get"
  });
};



export const getHotCommodities = () => {
  return serviceAxios({
    url: "/hot-commodities",
    method: "get"
  });
};
