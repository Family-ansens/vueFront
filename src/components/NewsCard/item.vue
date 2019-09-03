<template>
  <div class="components-wrapper" :class="componentSize">
    <el-row class="date-wrapper">
      <span>{{ formatTime(date) }}</span>
    </el-row>
    <el-row class="title-wrapper">
      <router-link :to="'/news/detail?id='+id">
        <span>{{ title }}</span>
      </router-link>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="9">
        <el-image class="image-wrapper" :class="imageSize" fit="cover" :src="picUrl" />
      </el-col>
      <el-col :span="15">
        <div class="context-box-wrapper">
          <p :class="contextSize">{{ context }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "NewsCardItem"
})
export default class NewsCardItem extends Vue {
  @Prop({ required: true, default: "" }) id!: string;
  @Prop({}) date!: string;
  @Prop({ required: true }) title!: string;
  @Prop({}) picUrl!: string;
  @Prop({}) context!: string;
  @Prop({ required: true, default: "small" }) size!: string;

  get componentSize() {
    return {
      componentlarge: this.size === "large",
      componentsmall: this.size === "small"
    };
  }

  get imageSize() {
    return {
      imagelarge: this.size === "large",
      imagesmall: this.size === "small"
    };
  }

  get contextSize() {
    return {
      contextlarge: this.size === "large",
      contextsmall: this.size === "small"
    };
  }

  private formatTime(val: any) {
    return this.$utils.common.formatDate(val, "l");
  }
}
</script>

<style lang="scss" scoped>
.components-wrapper {
  background-color: #003d5c;
  padding: 8px 17px 17px 17px;
  letter-spacing: 2px;

  .componentlarge {
    height: 260px;
  }
  .componentsmall {
    height: 180px;
  }

  .date-wrapper {
    margin-bottom: 5px;
    span {
      color: #a3b0b9;
      font-size: 10px;
    }
  }

  .title-wrapper {
    color: #fff;
    margin-bottom: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      font-size: 14px;
    }
  }
  .imagelarge {
    height: 185px;
  }
  .imagesmall {
    height: 105px;
  }
  .image-wrapper {
    width: 100%;
  }

  .context-box-wrapper {
    border-top: solid #ffffff 1.5px;
    color: #a3b0b9;
    .contextsmall {
      -webkit-line-clamp: 5;
    }
    .contextlarge {
      -webkit-line-clamp: 10;
    }
    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>