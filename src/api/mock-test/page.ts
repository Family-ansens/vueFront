import request from '@/utils/request';

export const get = (params: any) => {
    return request.get('/get_test', params); // get测试 来自 easy mock
};

export const post = (params: any) => {
    return request.post('/post_test', params); // post测试 来自 easy mock
};

export const upload = (params: File | { key: string, file: File }) => {
    return request.upload('/upload_test', params); // upload测试 来自 easy mock
};

export const download = (params?: any) => {
    return request.download('/download_test', params); // download测试 来自 easy mock
};