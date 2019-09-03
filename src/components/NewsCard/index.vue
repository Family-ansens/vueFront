<template>
  <div class="components-wrapper" :class="componentSize">
    <el-row class="date-wrapper">
      <span>{{ date }}</span>
    </el-row>
    <el-row class="title-wrapper">
      <router-link :to="'/news/detail?id='+id" >
      <div>
        <span>{{ title }}</span>
      </div>
      </router-link>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="9">
        <el-image class="image-wrapper" :class="imageSize" fit="cover" :src="picUrl" />
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
  @Prop({ required: true, default: ""}) id!: string;
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
  
  created() {
    console.info(this.size);
  }
}
</script>

<style lang="scss" scoped>
.componentlarge {
  height: 260px;
}
.componentsmall {
  height: 185px;
}

.imagelarge {
  height: 185px;
}
.imagesmall {
  height: 110px;
}

.components-wrapper {
  background-color: #003d5c;
  padding: 10px 17px 17px 17px;
  letter-spacing: 2px;
  .date-wrapper {
    margin-bottom: 5px;
    span {
      color: #a3b0b9;
      font-size: 10px;
    }
  }

  .title-wrapper {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fff;
    margin-bottom: 8px;
    span {
      font-size: 14px;
    }
  }

  .image-wrapper {
    width: 100%;
  }

  .context-box-wrapper {
    border-top: solid #ffffff 1.5px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #a3b0b9;
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
}
</style>