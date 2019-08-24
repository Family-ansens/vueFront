<template>
  <div>
    <el-row class="footer-hot-sale-box">
    <el-col :offset="8" :span="8">
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </el-col>
    <el-col :span="8">
      <more-button class="more-button" :url="url" />
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
}
</script>

<style lang="scss" scoped>
 .footer-hot-sale-box {
   padding-top: 15px;
  .title {
    height: 85px;
    text-align: center;
    span {
      font-size: 30px;
      color: #fff;
      border-bottom: solid #1d678c 4px;
      padding-bottom: 8px;
    }
  }
}

.more-button {
  float: right;
  margin:10px 100px 0 0;
}
</style>