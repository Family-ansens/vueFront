<template>
  <div class="company-introduction">
    <el-image class="main-pic" :src="introductUrl" fit="contain"/>
  </div>  
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
  private introductUrl = require("@/assets/img/test.png");
}
</script>

<style lang="scss">
  @import "@/assets/scss/variables.scss";
</style>

<style lang="scss" scoped>
.company-introduction {
  background-color: #05101a;

  .main-pic {
    height: 500px;
  }
}
</style>

