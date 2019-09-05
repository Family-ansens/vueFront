import request from '@/utils/request';

export const advertiseList = () => {
  return request.get("/advertise/list"); // 主页走马灯
};