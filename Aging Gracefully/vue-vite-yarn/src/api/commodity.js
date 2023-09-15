import serviceAxios from "@/utils/serviceAxios";

export const getCommodities = (params) => {
  return serviceAxios({
    url: "/commodities",
    method: "get",
	params
  });
};