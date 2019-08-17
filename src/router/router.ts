/*
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */

 /* Layout */
import Layout from '@/layout';

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
    path: '/login',
    hidden: true,
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/index',
    component: Layout,
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/views/test-pages/main.vue'),
        meta: {
          title: '主页',
          icon: 'home',
        },
      },
    ]
  },
  {
    path: '/test-pages',
    name: 'TestPages',
    redirect: 'noRedirect',
    component: Layout,
    meta: {
      icon: 'edit',
      title: '测试',
    },
    children: [
      {
        path: 'axios',
        name: 'AxiosTest',
        component: () => import('@/views/test-pages/AxiosTest.vue'),
        meta: {
          icon: 'edit',
          title: 'AxiosTest',
        },
      },
      {
        path: 'sidebar',
        name: 'SidebarTest',
        component: () => import('@/views/test-pages/SidebarTest.vue'),
        meta: {
          title: 'SidebarTest',
          icon: 'edit',
        },
      },
      {
        path: 'icon',
        name: 'IconTest',
        component: () => import('@/views/test-pages/IconTest.vue'),
        meta: {
          title: 'IconTest',
          icon: 'edit',
        },
      },
      {
        path: 'page4',
        name: 'page4',
        component: () => import('@/views/test-pages/page4.vue'),
        meta: {
          title: 'page4',
          icon: 'edit',
        },
      },
    ]
  }
];

/**
 * @description 需要根据权限动态加载的路由
 */
export const asyncRoutes = [
  {
    path: '/permissionTest1',
    name: 'page5',
    redirect: "noRedirect",
    component: Layout,
    children: [
      {
        path: 'page5',
        name: 'page5 - 1',
        component: () => import('@/views/test-pages/page5.vue'),
        meta: {
          title: 'page5',
          icon: 'edit',
          permission: 'page5'
        },
      },
    ]
  },  
  {
    path: '/permissionTest2',
    name: 'page6',
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: 'page6',
        name: 'page6 - 1',
        component: () => import('@/views/test-pages/page6.vue'),
        meta: {
          title: 'page6',
          icon: 'edit',
          permission: 'page6'
        },
      },
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