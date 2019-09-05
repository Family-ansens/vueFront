import request from '@/utils/request';

export const companyList = (data: any) => {
  return request.get("/company/list", data); // 公司列表
};

export const companyDetail = () => {
  return request.get("/company/list-detail"); // 公司详情
};