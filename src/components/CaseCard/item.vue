<template>
  <div>
    <router-link tag="div" :to="bashUrl">
      <div class="case-card-wrapper">
        <el-image class="image-wrapper" fit="cover" :src="imgUrl" />
        <div class="title-box">
          <span>{{ title }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "CaseCardItem"
})
export default class CaseCardItem extends Vue {
  @Prop({ required: true }) imgUrl!: string;
  @Prop({ required: true }) title!: string;
  @Prop({ required: true, default: "/" }) bashUrl!: string;
}
</script>

<style lang="scss" scoped>
.case-card-wrapper {
  background-color: #003d5c;
  margin-bottom: 15px;
  cursor: pointer;
  .image-wrapper {
    width: 100%;
    height: 280px;
  }

  .title-box {
    height: 60px;
    text-align: center;
    line-height: 55px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #ffffff;
    span {
      font-size: 22px;
      letter-spacing: 2px;
      font-weight: 2px;
    }
  }
}
</style>