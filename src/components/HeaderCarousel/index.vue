<template>
  <el-carousel>
    <el-carousel-item v-for="item in 4" :key="item">
      <el-image :key="fill" :src="introductUrl" />
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({})
export default class HeaderCarousel extends Vue {
  private introductUrl = require("@/assets/img/test.png");
}
</script>