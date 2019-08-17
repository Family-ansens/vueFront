<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >        
        <sidebar-item v-for="route in permissionRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";
import Logo from "./Logo.vue";
import SidebarItem from './SidebarItem.vue';
import variables from '@/styles/variables.scss';

@Component({
  components: {
    Logo,
    SidebarItem,
  }
})

export default class Sidebar extends Vue {

  get showLogo() {
    return this.$services.setting.sidebarLogo;
  }

  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    // if set path, the sidebar will highlight the path you set
    // 如果路由中有配置 activeMenu,会优先点亮所配置的路由
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }

  get isCollapse() {
    return !this.$services.app.sidebar.opened;
  }

  get variables() {
    return variables;
  }

  get permissionRoutes() {
    return this.$services.permission.routes;
  }
}
</script>
<style lang='scss' scoped>
</style>
