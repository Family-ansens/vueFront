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
        meta: { title: '仪表盘' }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product',
    children: [
      {
        path: 'list',
        component: () => import('@/views/product/ProductList.vue'),
        name: 'product-list',
        meta: { title: '产品列表' }
      }
    ]
  },
  {
    path: '/case',
    component: Layout,
    redirect: '/case',
    children: [
      {
        path: 'list',
        component: () => import('@/views/case/CaseList.vue'),
        name: 'case-list',
        meta: { title: '案例列表' }
      }
    ]
  },
  {
    path: '/company',
    component: Layout,
    redirect: '/company',
    children: [
      {
        path: 'detail',
        component: () => import('@/views/company/CompanyDetail.vue'),
        name: 'company-detail',
        meta: { title: '公司信息' }
      }
    ]
  },
  {
    path: '/contact-us',
    component: Layout,
    redirect: '/contact-us',
    children: [
      {
        path: '/',
        component: () => import('@/views/contact-us/ContactUs.vue'),
        name: 'contact-us',
        meta: { title: '联系方式' }
      }
    ]
  },
  {
    path: '/test',
    component: () => import('@/views/test/test.vue'),
    name: 'test',
    meta: { title: 'test' }
  },
  {
    path: '/redirect/:path*',
    component: () => import('@/views/redirect/redirect.vue'),
    name: 'redirect',
    meta: { title: 'redirect' }
  },
  {
    path: '*',
    name: '404',
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