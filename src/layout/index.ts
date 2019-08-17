import { Component, Vue } from "vue-property-decorator";
import Navbar from '@/layout/components/Navbar/index.vue';
import Sidebar from '@/layout/components/Sidebar/index.vue';
import AppMain from '@/layout/components/AppMain/index.vue';
import TagsView from '@/layout/components/TagsView/index.vue';

@Component({
  components: {
    Sidebar,
    Navbar,
    AppMain,
    TagsView,
  }
})
export default class Index extends Vue {

  get sidebar() {
    return this.$services.app.sidebar;
  }

  get device() {
    return this.$services.app.device;
  }

  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      mobile: this.device === 'mobile'
    };
  }

  created() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
