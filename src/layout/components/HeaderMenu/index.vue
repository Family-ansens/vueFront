<template>
  <div>
    <!-- el-menu的低外框线死活去不掉，唯有用style来搞它 PS:激活颜色原本为#006699，但因为页面跳转，需要另外开发 -->
    <el-menu
      style="border-bottom: none;"
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#fff"
      :default-active="activeIndex"
    >
      <el-row>
        <el-col v-for="item in menuItem" :key="item.index" :xs="24" :sm="8" :lg="4">
          <router-link tag="el-menu-item" :to="item.bashUrl">
            <el-menu-item class="menu-item" :index="item.index">
              <span>{{ $t('menuItem.' + item.name) }}</span>
            </el-menu-item>
          </router-link>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "HeaderMenu"
})
export default class HeaderMenu extends Vue {
  // @Prop() activeIndex!: string;

  get activeIndex() {
    return this.$services.view.getMenuActiveIndex();
  }

  set activeIndex(index: string) {
    this.$services.view.setMenuActiveIndex(index);
  }

  private menuItem = [
    { bashUrl: "/dashboard", index: "dashboard", name: 'dashboard' },
    { bashUrl: "/product/list", index: "product-list", name: 'products' },
    { bashUrl: "/case/list", index: "case-list", name: 'cases' },
    { bashUrl: "/company/detail", index: "company-detail", name: 'company' },
    { bashUrl: "/news/list", index: "news-list", name: 'news' },
    { bashUrl: "/contact-us", index: "contact-us", name: 'contactUs' }
  ];
}
</script>

<style lang="scss" scoped>
.menu-item {
  // width: 16.6666%;
  text-align: center;
  span {
    letter-spacing: 1px;
    font-weight: 2px;
    font-size: 25px;
  }
}
</style>