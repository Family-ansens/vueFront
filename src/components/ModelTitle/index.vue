<template>
  <div>
    <el-row class="footer-hot-sale-box">
      <el-col :xs="2" :sm="4" :lg="8">
        &nbsp;
      </el-col>
    <el-col :xs="20" :sm="16" :lg="8">
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </el-col>
    <el-col :xs="2" :sm="4" :lg="8">
      <more-button class="more-button hidden-xs-only" :url="url" v-if="showMoreButton"/>
    </el-col>
  </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import MoreButton from "@/components/MoreButton/index.vue";
@Component({
  name: 'ModelTitle',
  components: {
    MoreButton,
  }
})
export default class ModelTitle extends Vue {
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true }) private url!: string;
  @Prop({ default: false }) private showMoreButton!: boolean;
}
</script>

<style lang="scss" scoped>
 .footer-hot-sale-box {
   padding-top: 15px;
  .title {
    height: 85px;
    text-align: center;
    span {
      font-size: 45px;
      letter-spacing: 3px;
      color: #fff;
      border-bottom: solid #1d678c 4px;
      padding-bottom: 8px;
    }
  }
}

.more-button {
  float: right;
  margin:13px 50px 0 0;
}
</style>