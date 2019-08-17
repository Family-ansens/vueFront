import request from '@/utils/request';

export const health = () => {
  return request.get('/health'); // 心跳测试 来自 easy mock
};

