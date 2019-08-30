<template>
  <div class="main-wrapper">
    <div style="background-color: #05101a;">
      <model-title :showMoreButton="false" :title="$t('company.title')" />
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
            <h1>{{ this.$route.query.company_id }}</h1>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
      </el-row>
    </div>
    <!-- 公司动态 -->
    <el-row style="margin-bottom: 30px;">
      <div>
        <model-title :showMoreButton="true" :title="$t('modelTitle.news')" url="/" />
      </div>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 35px;">
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div>
            <news-card
              class="news-card-wrapper"
              :picUrl="introductUrl"
              :title="data.title"
              :context="data.context"
              :date="data.date"
            />
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import GroupList from "@/components/GroupList/index.vue";
import NewsCard from "@/components/NewsCard/index.vue";
@Component({
  name: "CompanyDetail",
  components: {
    ModelTitle,
    GroupList,
    NewsCard
  }
})
export default class CompanyDetail extends Vue {
  private introductUrl = require("@/assets/img/test.png");

  private data = {
    title: "标题标题标题标题",
    context:
      "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
    date: "2019.08.26"
  };

  private activeIndex = 1;
  private groupListData = [
    { label: "test1", id: 1 },
    { label: "test2", id: 2 },
    { label: "test3", id: 3 },
    { label: "test4", id: 4 },
    { label: "test5", id: 5 },
    { label: "test6", id: 6 },
    { label: "test7", id: 7 },
    { label: "test8", id: 8 },
    { label: "test9", id: 9 }
  ];

  private groupListEven(row: any) {
    this.$router.push( { path: '/company/detail', query: { company_id: row.id}});
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 15px;
}

.item-wrapper {
  margin-bottom: 15px;
}

.news-card-wrapper {
  margin: 0 auto;
}
</style>