import request from '@/utils/request';

export const productGroups = () => {
  return request.get("/product/product-groups"); // 获取商品分组列表
};

export const productByGroups = (data: any) => {
  return request.get("/product/products", data); // 根据分组获取产品列表
};

export const homeProductGroups = () => {
  return request.get("/product/home/product-groups"); // 首页获取商品分组列表
};

export const productGetById = (id: any) => {
  return request.get(`/product/get/${id}`); // 获取商品详情
};

export const relateProductGetById = (id: any) => {
  return request.get(`/product/get-relate/${id}`); // 相关商品
};

export const productHotSaleProducts = () => {
  return request.get("/product/hot-sale-products"); // 获取热销商品列表
};

