<template>
  <div class="app-wrapper">
    <header-title />
    <header-menu />
    <div class="main-container">
      <app-main />
    </div>
    <div class="footer-container">
    </div>
  </div>
</template>

<script lang="ts" >
import { Component, Vue } from "vue-property-decorator";
import AppMain from "@/layout/components/AppMain/index.vue";
import HeaderTitle from "@/layout/components/HeaderTitle/index.vue";
import HeaderMenu from "@/layout/components/HeaderMenu/index.vue";

@Component({
  components: {
    AppMain,
    HeaderTitle,
    HeaderMenu,
  }
})
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
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

