<template>
  <div :class="{'show':show}" class="header-search">
    <svg-icon name="search" class="search-icon" @click.stop="click"/>
    <el-select
      v-model="search"
      class="header-search-select"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Fuse from "fuse.js"; // A lightweight fuzzy-search module, make search results more in line with expectations
import path from "path";
import { RouteConfig } from "vue-router";
@Component({
  name: "HeaderSearchSelect"
})
export default class HeaderSearchSelect extends Vue {
  private search = "";
  private show = false;
  private options: RouteConfig[] = [];
  private searchPool: RouteConfig[] = [];
  private fuse?: Fuse<RouteConfig>;

  get routes() {
    return this.$services.permission.routes;
  }

  mounted() {
    this.searchPool = this.generateRoutes(this.routes);
  }

  // 监控路由
  @Watch("routes")
  private onRoutesChange() {
    this.searchPool = this.generateRoutes(this.routes);
  }

  // 监控搜索池
  @Watch('searchPool')
  private onSearchPoolChange(value: RouteConfig[]) {
    this.initFuse(value);
  }

  @Watch('show')
  private onShowChange(value: boolean) {
    if (value) {
      document.body.addEventListener('click', this.close);
    } else {
      document.body.removeEventListener('click', this.close);
    }
  }


  private click() {
    this.show = !this.show;
    if (this.show) {
      if (this.$refs.headerSearchSelect) {
        (this.$refs.headerSearchSelect as HTMLElement).focus();
      }
    }
  }

  private close() {
    if (this.$refs.headerSearchSelect) {
        (this.$refs.headerSearchSelect as HTMLElement).blur();
     }
    this.options = [];
    this.show = false;
  }

  // 创建fuse实例 详细见文档
  private initFuse(list: RouteConfig[]) {
    this.fuse = new Fuse(list, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {
          name: "title",
          weight: 0.7
        },
        {
          name: "path",
          weight: 0.3
        }
      ]
    });
  }

  private change(route: RouteConfig) {
      this.$router.push(route.path);
      this.search = '';
      this.options = [];
      this.$nextTick(() => {
        this.show = false;
      });
    }

  private generateRoutes(
    routes: RouteConfig[],
    basePath = "/",
    prefixTitle: string[] = []
  ) {
    let res: RouteConfig[] = [];

    for (const router of routes) {
      // skip hidden router 去掉meta为空或为隐藏的路由
      if (router.meta && router.meta.hidden) {
        continue;
      }

      const data = {
        path: path.resolve(basePath, router.path),
        title: [...prefixTitle]
      };

      if (router.meta && router.meta.title) {
        data.title = [...data.title, router.meta.title];
      }

      if (router.redirect !== "noRedirect") {
        // only push the routes with title 只显示在导航栏显示的路由
        // special case: need to exclude parent router without redirect
        res.push(data);
      }

      // recursive child routes 递归
      if (router.children) {
        const tempRoutes = this.generateRoutes(
          router.children,
          data.path,
          data.title
        );
        if (tempRoutes.length >= 1) {
          res = [...res, ...tempRoutes];
        }
      }
    }
    return res;
  }

  /**
   * @description 使用fuse快速搜索
   * @param query
   */
  private querySearch(query: string) {
    console.info(this.fuse);
    if (query !== "") {
      if (this.fuse) {
        this.options = this.fuse.search(query);
      }
    } else {
      this.options = [];
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>