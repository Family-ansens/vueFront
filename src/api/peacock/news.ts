import request from '@/utils/request';

export const newsList = (data: any) => {
  return request.get("/new/list", data); // 获取新闻列表
};

export const getNewsById = (data: any) => {
  return request.get("/new/detail", data); // 获取新闻详情
};
