import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import permission from '@/directive/permission/permission';
import "@/assets/scss/common.scss";
import "@/styles/index.scss";
import '../theme/index.css';

import SvgIcon from 'vue-svgicon';
import '@/icons';

import './core';

Vue.config.productionTip = false;
Vue.use(ElementUI);

/**
 * 图标控件全局注册, 别名为svg-icon
 */
Vue.use(SvgIcon, {
  defaultWidth: '1em',
  defaultHeight: '1em',
  tagName: 'svg-icon'
});
/**
 * 自定义指令 权限校验 v-permission
 */
Vue.directive('permission', permission);

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

