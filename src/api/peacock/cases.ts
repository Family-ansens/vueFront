import request from '@/utils/request';

export const exampleGroups = () => {
  return request.get("/example/example-groups"); // 获取应用分组列表
};

export const homeExampleGroups = () => {
  return request.get("/example/home/example-groups"); // 首页获取应用分组列表
};

export const getExampleByGroupId = (data: any) => {
  return request.get("/example/examples", data); // 获取应用列表
};

export const getNewestExample = () => {
  return request.get("/example/newest-examples"); // 获取最新应用
};

export const getExampleById = (id: any) => {
  return request.get(`/example/get/${id}`); // 获取应用详情
};
