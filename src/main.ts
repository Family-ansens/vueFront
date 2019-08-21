import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
// import permission from '@/directive/permission/permission';
import "@/assets/scss/common.scss";
import "@/styles/index.scss";
import '../theme/index.css';

import i18n from '@/lang';
import SvgIcon from 'vue-svgicon';
import '@/icons';

import './core';

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
/**
 * 自定义指令 权限校验 v-permission
 */
// Vue.directive('permission', permission);

new Vue({
  router,
  store,
  data() {
    return {
      //
    };
  },
  render: (h) => h(App)
}).$mount('#app');

