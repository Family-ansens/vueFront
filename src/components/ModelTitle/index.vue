<template>
  <div>
    <el-row class="footer-hot-sale-box">
      <el-col :xs="2" :sm="2" :lg="2">&nbsp;</el-col>
      <el-col :xs="20" :sm="20" :lg="20">
        <div class="title">
          <span :class="titleSize">{{ title }}</span>
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :lg="2">
        <more-button class="more-button hidden-xs-only" :url="url" v-if="showMoreButton" />
        <div v-if="!showMoreButton">&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MoreButton from "@/components/MoreButton/index.vue";
@Component({
  name: "ModelTitle",
  components: {
    MoreButton
  }
})
export default class ModelTitle extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true }) private url!: string;
  @Prop({ default: false }) private showMoreButton!: boolean;
  @Prop({ required: true, default: "large" }) private size!: string;

  get titleSize() {
    return {
      large: this.size === "large",
      small: this.size === "small"
    };
  }
}
</script>

<style lang="scss" scoped>
.footer-hot-sale-box {
  padding: 15px 0 15px 0;
  .title {
    text-align: center;
    // text-overflow: ellipsis;
    // overflow: hidden;
    // white-space: nowrap;
    color: #fff;
    .large {
      font-size: 45px;
    }
    .small {
      font-size: 25px;
    }
    span {
      // word-break: normal 默认的|break-all 在单词内换行|keep-all 只能在半角空格或连字符处换行
      word-break: break-all;
      letter-spacing: 3px;
      border-bottom: solid #1d678c 4px;
      padding-bottom: 4px;
    }
  }
}

.more-button {
  float: right;
  margin: 13px 50px 0 0;
}
</style>