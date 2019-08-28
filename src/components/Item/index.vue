<template>
  <div class="components-wrapper">
    <el-row class="title-wrapper">
      <span>{{ title }}</span>
    </el-row>
    <el-row>
      <el-col :span="9">
        <el-image class="image-wrapper" fit="contain" :src="picUrl" />
      </el-col>
      <el-col :span="15">
        <div class="context-box-wrapper">
          <p>{{ context }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "Item"
})
export default class Item extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop({ required: true }) picUrl!: string;
  @Prop({ required: true }) context!: string;
}
</script>

<style lang="scss" scoped>
.components-wrapper {
  background-color: #003d5c;
  padding: 10px 17px 17px 17px;
  height: 155px;
  letter-spacing: 2px;

  .title-wrapper {
    margin-bottom: 8px;
    span {
      color: #ffffff;
      font-size: 14px;
    }
  }

  .image-wrapper {
    margin-right: 17px;
    max-height: 130px;
  }

  .context-box-wrapper {
    border-top: solid #ffffff 1.5px;
    p {
      font-size: 12px;
      color: #a3b0b9;
      line-height: 18px;
    }
  }
}
</style>