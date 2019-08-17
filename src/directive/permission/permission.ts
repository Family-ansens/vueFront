import userService from '@/store/module/user';

export default {
    /**
     * 自定义指令 判断是否有权限，若权限不够则隐藏控件
     * @param el 使用指令的控件实例
     * @param binding 从指令传进的参数
     * @param vnode 虚拟DOM
     */
    inserted(el: any, binding: any, vnode: any) {
        // 从指令传进的参数
        const { value } = binding;
        const roles = userService.permissions;

        if (value && value instanceof Array && value.length > 0) {
            const temp = value;
            const hasPermission = roles.some(role => {
                    return temp.includes(role);
            });

            if (!hasPermission) {
                el.parentNode.removeChild(el);
            }
        } else {
            throw new Error(`参数错误, 例子: v-permission="['admin','editor']"`);
        }
    }
};