<template>
  <el-carousel class="img-wrapper">
    <el-carousel-item class="img-wrapper" v-for="(item, index) in imgUrlList" :key="index">
      <div style="text-align: center;">
      <el-image class="img-wrapper" style="width: 100%;" fit="cover" :key="index" :src="item" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import * as LayoutApi from '@/api/peacock/layout';
@Component({})
export default class HeaderCarousel extends Vue {
  private imgUrlList = [""];

  created() {
    LayoutApi.advertiseList().then((resolve: any) => {
      this.imgUrlList = resolve;
    });
  }
}
</script>

<style lang="scss" scoped>
.img-wrapper {
  height: 500px;
}
</style>