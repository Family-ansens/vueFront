import storeService, { IStoreService } from '../store';
import { INamespacedState } from '../store';
import i18n from "@/lang";

export interface IViewService {
  getMenuActiveIndex();
  setMenuActiveIndex(val: string);
  getTDK();
  setTDK(val: any);
  // visitedViews: any[];
  // cachedViews: any[];

  // addView(view: any);
  // addVisitedView(view: any);
  // addCachedView(view: any);
  // delView(view: any);
  // delVisitedView(view: any);
  // delCachedView(view: any);
  // delOthersViews(view: any);
  // delOthersVisitedViews(view: any);
  // delOthersCachedViews(view: any);
  // delAllViews();
  // delAllVisitedViews();
  // delAllCachedViews();
  // updateVisitedView(view: any);

}

const stateTypes = {
  NAMESPACE: "view",
  MENUACtIVEINDEX: "menuActiveIndex",
  TDK: "tdk",
  // VISITEDVIEWS: "visitedViews",
  // CACHEDVIEWS: "cachedViews",
  // OPENTAB: "openTab",
  // ACTIVEINDEX: "activeIndex"
};

class ViewService implements IViewService {
  private _store: INamespacedState;
  // private _openTab = new Array<any>();

  constructor() {
    this._store = storeService.createNamespace(stateTypes.NAMESPACE, {
      [stateTypes.MENUACtIVEINDEX]: "dashboard",
      [stateTypes.TDK]: {
        title: "",
        description: ""
      },
      // [stateTypes.VISITEDVIEWS]: [],
      // [stateTypes.CACHEDVIEWS]: [],
      // [stateTypes.OPENTAB]: [{ route: '/index/main', name: 'main' }],
      // [stateTypes.ACTIVEINDEX]: '/main',
    });
  }

  getMenuActiveIndex() {
    return this._store.getData(stateTypes.MENUACtIVEINDEX);
  }

  setMenuActiveIndex(index: string) {
    this._store.setData(stateTypes.MENUACtIVEINDEX, index);
  }

  getTDK() {
    return this._store.getData(stateTypes.TDK);
  }

  setTDK(val: any) {
    val.title = val.title + i18n.t("systems.headTitle").toString();
    val.description = val.description.substr(0, 100);
    console.info(val.description);
    this._store.setData(stateTypes.TDK, val);
  }

  // get visitedViews() {
  //   return this._store.getData(stateTypes.VISITEDVIEWS);
  // }

  // set visitedViews(view: any) {
  //   this._store.setData(stateTypes.VISITEDVIEWS, view);
  // }

  // get cachedViews() {
  //   return this._store.getData(stateTypes.CACHEDVIEWS);
  // }

  // set cachedViews(view: any) {
  //   this._store.setData(stateTypes.CACHEDVIEWS, view);
  // }

  // public addView(view: any) {
  //   this.addCachedView(view);
  //   this.addVisitedView(view);
  // }

  // public addVisitedView(view: any) {
  //   if (this.visitedViews.some(v => v.path === view.path)) {
  //     return;
  //   }
  //   this.visitedViews.push(
  //     Object.assign({}, view, {
  //       title: view.meta.title || 'no-name'
  //     })
  //   );
  // }

  // public addCachedView(view: any) {
  //   if (this.cachedViews.includes(view.name)) {
  //     return;
  //   }
  //   if (!view.meta.noCache) {
  //     this.cachedViews.push(view.name);
  //   }
  // }

  // public delView(view: any) {
  //   return new Promise(resolve => {
  //     this.delVisitedView(view);
  //     this.delCachedView(view);
  //     resolve({
  //       visitedViews: [...this.visitedViews],
  //       cachedViews: [...this.cachedViews]
  //     });
  //   });
  // }

  // public delVisitedView(view: any) {
  //   return new Promise(resolve => {
  //     for (const [i, v] of this.visitedViews.entries()) {
  //       if (v.path === view.path) {
  //         this.visitedViews.splice(i, 1);
  //         break;
  //       }
  //     }
  //     resolve([...this.visitedViews]);
  //   });

  // }

  // public delCachedView(view: any) {
  //   return new Promise(resolve => {
  //     for (const i of this.cachedViews) {
  //       if (i === view.name) {
  //         const index = this.cachedViews.indexOf(i);
  //         this.cachedViews.splice(index, 1);
  //         break;
  //       }
  //     }
  //     resolve([...this.cachedViews]);
  //   });
  // }

  // public delOthersViews(view: any) {
  //   return new Promise(reslove => {
  //     this.delOthersVisitedViews(view);
  //     this.delOthersCachedViews(view);
  //     reslove({
  //       visitedViews: [...this.visitedViews],
  //       cachedViews: [...this.cachedViews]
  //     });
  //   });
  // }

  // public delOthersVisitedViews(view: any) {
  //   return new Promise(resolve => {
  //     this.visitedViews = this.visitedViews.filter(v => {
  //       return v.meta.affix || v.path === view.path;
  //     });
  //     resolve([...this.visitedViews]);
  //   });
  // }

  // public delOthersCachedViews(view: any) {
  //   return new Promise(reslove => {
  //     for (const i of this.cachedViews) {
  //       if (i === view.name) {
  //         const index = this.cachedViews.indexOf(i);
  //         this.cachedViews = this.cachedViews.slice(index, index + 1);
  //         break;
  //       }
  //     }
  //     reslove([...this.cachedViews]);
  //   });
  // }

  // public delAllViews() {
  //   return new Promise(resolve => {
  //     this.delAllVisitedViews();
  //     this.delAllCachedViews();
  //     resolve({
  //       visitedViews: [...this.visitedViews],
  //       cachedViews: [...this.cachedViews]
  //     });
  //   });
  // }

  // public delAllVisitedViews() {
  //   return new Promise(resolve => {
  //     // keep affix tags  固定的tag不去除，例如主页
  //     const affixTags = this.visitedViews.filter(tag => tag.meta.affix);
  //     this.visitedViews = affixTags;
  //     resolve([...this.visitedViews]);
  //   });
  // }

  // public delAllCachedViews() {
  //   return new Promise(resolve => {
  //     this.cachedViews = [];
  //     resolve([...this.cachedViews]);
  //   });
  // }

  // public updateVisitedView(view: any) {
  //   for (let v of this.visitedViews) {
  //     if (v.path === view.path) {
  //       v = Object.assign(v, view);
  //       break;
  //     }
  //   }
  // }
}

const viewService: IViewService = new ViewService();

export default viewService;