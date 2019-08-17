import Cookies from 'js-cookie';
import storeService, { IStoreService } from '../store';
import { INamespacedState } from '../store';

export interface IAppService {
  /**
   * @description 导航栏对象
   */
  sidebar: any;

  /**
   * @description 设备
   */
  device: string;

  /**
   * @description 折叠导航栏
   */
  toggleSidebar();

  /**
   * @description 关闭导航栏
   * @param withoutAnimation 
   */
  closeSidebar(withoutAnimation: boolean);
}

const stateTypes = {
  NAMESPACE: 'app',
  SIDEBAR: 'sidebar',
  DEVICE: 'device', // 设备
  SIZE: 'size', // 前端全局样式
};

class AppService implements IAppService {
  private _store: INamespacedState;

  constructor() {
    this._store = storeService.createNamespace(stateTypes.NAMESPACE, {
      [stateTypes.SIDEBAR]: {
        opened: Cookies.get('sidebarStatus') ? !!+ (Cookies.get('sidebarStatus') as any) : true,
        withoutAnimation: false
      },
      [stateTypes.DEVICE]: 'desktop',
      [stateTypes.SIZE]: Cookies.get('size') || 'medium',
    });
  }

  toggleSidebar() {
    this.sidebar.opened = !this.sidebar.opened;
    this.sidebar.withoutAnimation = false;
    if (this.sidebar.opened) {
      Cookies.set('sidebarStatus', '1');
    } else {
      Cookies.set('sidebarStatus', '0');
    }
  }

  closeSidebar(withoutAnimation: boolean) {
    Cookies.set('sidebarStatus', '0');
    this.sidebar.opened = false;
    this.sidebar.withoutAnimation = withoutAnimation;
  }

  toggleDevice(device: string) {
    this._store.setData(stateTypes.DEVICE, device);
  }

  setSize(size: string) {
    this._store.setData(stateTypes.SIZE, size);
  }

  get sidebar() {
    return this._store.getData(stateTypes.SIDEBAR);
  }

  set sidebar(val: any) {
    this._store.setData(stateTypes.SIDEBAR, val);
  }

  get device() {
    return this._store.getData(stateTypes.DEVICE);
  }
}

const appService: IAppService = new AppService();

export default appService;