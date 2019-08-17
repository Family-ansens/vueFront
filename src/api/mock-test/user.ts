import request from '@/utils/request';

export const login = (userInfo: {userName: string, userPassword: string}) => {
    return request.post("/login", userInfo); // 来自 easy mock
};

export const logout = () => {
    return request.get("/logout"); // 来自 easy mock
};

export const getInfo = (token: string) => {
    return request.post("/get_userInfo", token); // 来自 easy mock
};