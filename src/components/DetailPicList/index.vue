<template>
  <div>
    <el-carousel height="400px" :interval="interval" type="card">
      <el-carousel-item v-for="(item, index) in imgList" :key="index">
        <div style="text-align: center;">
          <el-image :src="item" :height="height" style="height: 400px; width: 100%;" fit="contain" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "DetailPicList"
})
export default class DetailPicList extends Vue {
  @Prop({ required: true }) private imgList!: [];
  @Prop({ default: "3000" }) private interval!: number;
}
</script>

<style lang="scss" scoped>

</style>