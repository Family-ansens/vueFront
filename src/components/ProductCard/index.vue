<template>
  <div>
    <el-image class="pic-main" :src="picUrl"></el-image>
    <div class="title-box">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "ProductCard"
})
export default class ProductCard extends Vue {
  @Prop({}) picUrl!: string;
  @Prop({}) title!: string;
  @Prop({}) path!: string;
}
</script>

<style lang="scss" scoped>
.pic-main {
  width: 467.52px;
  height: 280px;
}

.title-box {
  background-color: #003d5c;
  width: 467.52px;
  height: 60px;
  text-align: center;
  line-height: 55px;
  span {
    color: #ffffff;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: 2px;
  }
}
</style>