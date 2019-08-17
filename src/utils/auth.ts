import Cookies from 'js-cookie';
import { cookieExpires } from '@/config'; // cookie保存的天数

/**
 * @description 用户登录Token密钥
 */
const TokenKey = 'Admin-Token';

export interface IAuth {
    Token: string | undefined;
    /**
     * @description 移除登录Token
     */
    removeToken(): void;
}

class Auth implements IAuth {
    get Token() {
        return Cookies.get(TokenKey);
    }

    set Token(token: string | undefined) {
        if (token || token !== '') {
            Cookies.set(TokenKey, token as string, { expires: cookieExpires});
        } else {
            // TODO: 报错信息整合
            console.error("set Token error, token was null");
        }
    }

    public removeToken() {
        Cookies.remove(TokenKey);
    }
}

const authService = new Auth();
export default authService;