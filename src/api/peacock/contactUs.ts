import request from '@/utils/request';

export const evaluation = (data: any) => {
  return request.post("/evaluation", data); // 留言
};