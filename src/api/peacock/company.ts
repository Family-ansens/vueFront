import request from '@/utils/request';

export const companyList = () => {
  return request.get("/company/list"); // 公司列表
};

export const companyDetail = () => {
  return request.get("/company/list-detail"); // 公司详情
};