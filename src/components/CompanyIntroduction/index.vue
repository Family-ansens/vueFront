<template>
  <div class="company-introduction">
    <header-carousel />
    <model-title :showMoreButton="false" :title="$t('modelTitle.company')" size="large"/>
    <el-row>
      <el-col :xs="24" :sm="24" :lg="15" style="padding: 15px;">
        <el-image class="synopsis-main-pic" :src="companyData.img" fit="contain" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="9">
        <el-row>
          <div style="padding: 15px 15px 0 15px;">
            <span class="company-title">{{ companyData.title }}</span>
          </div>
        </el-row>
        <el-row>
          <div class="synopsis-text-box">
            <p>{{ companyData.introduction }}</p>
          </div>
        </el-row>
        <!-- <el-row>
          <el-col :span="12">
            <el-image class="synopsis-pic" :src="introductUrl" />
          </el-col>
          <el-col :span="12">
            <el-image class="synopsis-pic" :src="introductUrl" />
          </el-col>
        </el-row> -->
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import * as CompanyApi from "@/api/peacock/company";

@Component({
  name: "CompanyIntroduction",
  components: {
    ModelTitle
  }
})
export default class CompanyIntroduction extends Vue {

  private companyData = {
    id: 0,
    title: "",
    content: "",
    introduction: "",
    img: ""
  };

  created() {
    CompanyApi.companyList({ size: 1 }).then((resolve: any) => {
      this.companyData = resolve.rows[0];
    });
  }
}
</script>

<style lang="scss" scoped>
.company-introduction {
  background-color: #05101a;

  .synopsis-main-pic {
    height: 500px;
    width: 100%;
  }

  .company-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 1px;
    letter-spacing: 2px;
    color: #ffffff;
    border-left: solid #1d678c 3px;
    padding-left: 17px;
  }

  .synopsis-text-box {
    padding: 15px;
    p {
      -webkit-line-clamp: 11;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-indent: 30px;
      font-size: 17px;
      font-weight: 2px;
      letter-spacing: 1px;
      color: #ffffff;
      line-height: 50px;
    }
  }

  .synopsis-pic {
    padding: 15px;
  }
}
</style>