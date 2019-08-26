<template>
  <div class="app-wrapper">
    <header-title />
    <header-menu />
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <el-image :key="fill" :src="product1Url" />
      </el-carousel-item>
    </el-carousel>
    <div class="main-container">
      <app-main />
    </div>
    <footer-hot-sale />
    <footer-contact />
    <header-menu />
  </div>
</template>

<script lang="ts" >
import { Component, Vue } from "vue-property-decorator";
import AppMain from "@/layout/components/AppMain/index.vue";
import HeaderTitle from "@/layout/components/HeaderTitle/index.vue";
import HeaderMenu from "@/layout/components/HeaderMenu/index.vue";
import FooterHotSale from "@/layout/components/FooterHotSale/index.vue";
import FooterContact from "@/layout/components/FooterContact/index.vue";

@Component({
  components: {
    AppMain,
    HeaderTitle,
    HeaderMenu,
    FooterHotSale,
    FooterContact,
  }
})
export default class Layout extends Vue {
  private product1Url = require("@/assets/img/product/product1.png");
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #000000;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
</style>

