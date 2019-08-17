/*
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */

/* Layout */
import Layout from '@/layout/index.vue';

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/dashboard.vue'),
        name: 'Dashboard',
        meta: { title: '仪表盘', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    hidden: true,
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404',
      icon: '404'
    }
  }
];

/**
 * @description 需要根据权限动态加载的路由
 */
export const asyncRoutes = [
  
];