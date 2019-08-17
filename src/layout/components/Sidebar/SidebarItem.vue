<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <!-- 判断该item是否没有子项 若没有子项,显示的元素为el-menu-item,否则显示sidebar(回调) -->
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Mixins, Prop } from "vue-property-decorator";
import Item from './Item.vue';
import AppLink from './Link.vue';
import path from 'path';
import { Route } from 'vue-router';

@Component({
  name: 'SidebarItem',
  mixins: [],
  components: {
     Item, 
     AppLink
  },
})

export default class SidebarItem extends Vue {  
  // route object
  @Prop({ required: true }) private item!: any;
  @Prop({ default: false }) private isNest!: boolean;
  @Prop({ default: '' }) private basePath!: string;

  // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
  // TODO: refactor with render function
  private onlyOneChild: any = null;
  
  // 查看该路由是否存在子项
  protected hasOneShowingChild(children: Route[], parent: Route) {
    let showingChildren: Route[] = [];
    if (children) {
      // 过滤是否有子项
      showingChildren = children.filter((item: any) => {
        // 若子项为隐藏,跳过
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item;
          return true;
        }
      });
    }

    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
      return true;
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      this.onlyOneChild = { 
        ... parent, 
        path: '',
        noShowingChildren: true
      };
      return true;
    }
    return false;
  }

  protected resolvePath(routePath) {
    if (this.$utils.validate.isExternal(routePath)) {
      return routePath;
    }
    if (this.$utils.validate.isExternal(this.basePath)) {
      return this.basePath;
    }
    // 路径拼接,获取绝对路径
    return path.resolve(this.basePath, routePath);
  }
}
</script>
