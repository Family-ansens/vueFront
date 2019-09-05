<template>
  <div class="main-wrapper">
    <div style="background-color: #05101a;">
      <model-title :showMoreButton="false" :title="companyDetail.title" size="large" />
      <el-row>
        <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
        <!-- 主 -->
        <el-col :xs="22" :sm="18" :lg="22">
          <el-row :gutter="25">
            <el-col :xs="24" :sm="24" :lg="5">
              <group-list
                style="margin-bottom: 20px;"
                :items="groupListData"
                :activeIndex="activeIndex"
                :onClickEven="groupListEven"
              />
            </el-col>
            <el-col :xs="24" :sm="24" :lg="19">
              <!-- 富文本 -->
              <content-box :content="companyDetail.content" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
      </el-row>
    </div>
    <!-- 公司动态 -->
    <news-card-group />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import GroupList from "@/components/GroupList/index.vue";
import NewsCardGroup from "@/components/NewsCard/index.vue";
import ContentBox from "@/components/ContentBox/index.vue";
import * as CompanyApi from "@/api/peacock/company";

@Component({
  name: "CompanyDetail",
  components: {
    ModelTitle,
    GroupList,
    NewsCardGroup,
    ContentBox
  }
})
export default class CompanyDetail extends Vue {
  private activeIndex = 0;
  private groupListData = [];
  private companyListDetail = new Array({ title: "", content: "" });
  private companyDetail = { title: "", content: "" };

  get companyDetailId() {
    return this.$route.query.company_id;
  }

  created() {
    CompanyApi.companyList({})
      .then((resolve: any) => {
        this.groupListData = resolve.rows;
      })
      .catch(rejects => {
        console.info(rejects);
      });

    CompanyApi.companyDetail().then((resolve: any) => {
      this.companyListDetail = resolve.rows;
      // 默认拿第一个
      this.companyDetail.title = this.companyListDetail[0].title;
      this.companyDetail.content = this.companyListDetail[0].content;
    });
  }

  @Watch("companyDetailId")
  private onCompanyDetailIdChange() {
    if (this.$route.query.company_id && this.companyListDetail.length > 1) {
      this.companyListDetail.forEach((val: any, idx: number) => {
        if (val.id === this.companyDetailId) {
          this.companyDetail.title = this.companyListDetail[idx].title;
          this.companyDetail.content = this.companyListDetail[idx].content;
        }
      });
    }
  }

  private groupListEven(row: any) {
    this.$router.push({
      path: "/company/detail",
      query: { company_id: row.id }
    });
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 15px;
}
</style>