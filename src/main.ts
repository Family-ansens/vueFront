import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
// import permission from '@/directive/permission/permission';
import "@/assets/scss/common.scss";
import "@/styles/index.scss";
import '../theme/index.css';
// 响应式css
import 'element-ui/lib/theme-chalk/display.css';

import i18n from '@/lang';
import SvgIcon from 'vue-svgicon';
import VueMeta from 'vue-meta';
import '@/icons';

import './core';
// 引入vue-amap 高德地图控件
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'a594a0e89a9c860c5b177ca23aa97d90',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 
  'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 
  'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false;
Vue.use(ElementUI, {
  i18n: (key: string, value: string) => i18n.t(key, value)
});

/**
 * 图标控件全局注册, 别名为svg-icon
 */
Vue.use(SvgIcon, {
  defaultWidth: '1.5em',
  defaultHeight: '1.5em',
  tagName: 'svg-icon'
});
// 添加vue-meta
Vue.use(VueMeta);
/**
 * 自定义指令 权限校验 v-permission
 */
// Vue.directive('permission', permission);

new Vue({
  router,
  store,
  i18n,
  data() {
    return {
      //
    };
  },
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app');

