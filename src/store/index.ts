import Vue from 'vue';
import Vuex from 'vuex';
import store, { IStoreService } from './store';
import view, { IViewService } from './module/view';
// import user, { IUserService } from './module/user';
// import permission, { IPermissionService } from './module/permission';
// import setting, { ISettingService } from './module/setting';
// import app, { IAppService } from './module/app';

// modules

Vue.prototype.$services = {
  store,
  view,
  // user,
  // permission,
  // setting,
  // app,
};

declare module 'vue/types/vue' {
  interface Vue {
    $services: {
      store: IStoreService,
      view: IViewService,
      // user: IUserService,
      // permission: IPermissionService,
      // setting: ISettingService,
      // app: IAppService,
    };
  }
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: store.getStorer(),
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {

  }
});
