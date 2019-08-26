<template>
  <div class="components-wrapper">
    <el-row class="date-wrapper">
      <span>{{ date }}</span>
    </el-row>
    <el-row class="title-wrapper">
      <span>{{ title }}</span>
    </el-row>
    <el-row>
      <el-col :span="9">
        <el-image class="image-wrapper" :src="picUrl" />
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
  name: "NewsCard"
})
export default class NewsCard extends Vue {
  @Prop({}) date!: string;
  @Prop({}) title!: string;
  @Prop({}) picUrl!: string;
  @Prop({}) context!: string;
}
</script>

<style lang="scss" scoped>
.components-wrapper {
  background-color: #003d5c;
  padding: 10px 17px 17px 17px;
  width: 425.52px;
  height: 155px;
  letter-spacing: 2px;
  .date-wrapper {
    margin-bottom: 5px;
    span {
      color: #a3b0b9;
      font-size: 10px;
    }
  }

  .title-wrapper {
    margin-bottom: 8px;
    span {
      color: #ffffff;
      font-size: 14px;
    }
  }

  .image-wrapper {
    padding-right: 17px;
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