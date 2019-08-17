<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <!-- 面包削动画 -->
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span v-if="item.redirect === 'noRedirect' || index == levelList.length - 1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { RouteRecord } from 'vue-router';
import pathToRegexp from 'path-to-regexp';
@Component({
  //
})
export default class Breadcrumb extends Vue {
  private levelList: RouteRecord[] = [];

  private created() {
    this.getBreadcrumb();
  }

  @Watch('$route')
  private onRouteChange() {
    // if you go to the redirect page, do not update the breadcrumbs
    if (this.$route.path.startsWith('/redirect/')) {
      return;
    }
    this.getBreadcrumb();
  }

  private getBreadcrumb() {
    // 只显示有meta.title的路由
    let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
    const first = matched[0];
    // 前往该路径不为仪表盘是，添加仪表盘为上级
    if (!this.isDashboard(first)) {
      matched = [{ path: '/dashboard', meta: { title: '仪表盘' } } as RouteRecord].concat(matched);
    }

    this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false );
  }

  /**
   * @description 判断是否为Dashboard路由
   * @param route
   */
  private isDashboard(route: RouteRecord) {
    const name = route && route.name;
    if (!name) {
      return false;
    }
    return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase();
  }

  private pathCompile(path: string) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const { params } = this.$route;
    const toPath = pathToRegexp.compile(path);
    return toPath(params);
  }

  private  handleLink(item) {
    const { redirect, path } = item;
    if (redirect) {
      this.$router.push(redirect);
      return;
    }
    this.$router.push(this.pathCompile(path));
  }
}
</script>


<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>