import contactUs from '@/views/contact-us/ContactUs.vue';

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
      },
      {
        path: 'detail',
        component: () => import('@/views/product/ProductDetail.vue'),
        name: 'product-detail',
        meta: { title: '产品查询' }
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
      },
      {
        path: 'detail',
        component: () => import('@/views/case/CaseDetail.vue'),
        name: 'case-detail',
        meta: { title: '案例查询' }
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
    path: '/news',
    component: Layout,
    redirect: '/news',
    children: [
      {
        path: 'list',
        component: () => import('@/views/news/NewsList.vue'),
        name: 'news-list',
        meta: { title: '最新资讯' }
      },
      {
        path: 'detail',
        component: () => import('@/views/news/NewsDetail.vue'),
        name: 'news-detail',
        meta: { title: '最新资讯' }
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
        component: contactUs,
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