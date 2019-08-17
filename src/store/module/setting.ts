import defaultSetting from '@/settings';
import storeService, { IStoreService } from '../store';
import { INamespacedState } from '../store';

export interface ISettingService {
  sidebarLogo: boolean;
}

const stateTypes = {
  NAMESPACE: 'setting',
  SIDEBARLOGO: 'sidebarLogo',
};

class SettingService implements ISettingService {
  private _store: INamespacedState;

  constructor() {
    this._store = storeService.createNamespace(stateTypes.NAMESPACE, {
        [stateTypes.SIDEBARLOGO]: defaultSetting.sidebarLogo
    });
  }

  get sidebarLogo() {
    return this._store.getData(stateTypes.SIDEBARLOGO);
  }

  set sidebarLogeo(val: boolean) {
    this._store.setData(stateTypes.SIDEBARLOGO, val);
  }
}

const settingService: ISettingService = new SettingService();

export default settingService;