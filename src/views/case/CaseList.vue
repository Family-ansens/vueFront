<template>
  <div class="main-wrapper">
    <header-carousel />
    <model-title :showMoreButton="false" :title="$t('cases.title')" size="large" />
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
            <item
              class="item-wrapper"
              v-for="(item, index) in casesItemData.item"
              :key="index"
              :picUrl="item.imgUrl"
              :id="item.id"
              :bashPath="'/case/detail?id=' + item.id"
              :title="item.name"
              :context="item.introduction"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
    </el-row>
    <!-- 翻页 -->
    <el-row>
      <el-col>
        <el-pagination
          style="text-align: center;"
          layout="prev, pager, next"
          :total="casesItemData.count"
          :page-size="searchData.size"
          :current-page="searchData.page"
          @current-change="onPageIndexChange"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import GroupList from "@/components/GroupList/index.vue";
import Item from "@/components/Item/index.vue";
import HeaderCarousel from "@/components/HeaderCarousel/index.vue";
import * as CasesApi from "@/api/peacock/cases";
@Component({
  name: "CaseList",
  components: {
    ModelTitle,
    GroupList,
    Item,
    HeaderCarousel,
  }
})
export default class CaseList extends Vue {
  private casesItemData = {
    item: [
      {
        id: 0,
        name: "",
        introduction: "",
        imgUrl: ""
      }
    ],
    count: 0
  };
  
  private activeIndex = "0";
  private groupListData = [
    {
      id: 0,
      title: "",
      code: ""
    }
  ];

  private searchData = {
    groupId: 0,
    size: 10,
    page: 1
  };

  created() {
    CasesApi.exampleGroups().then((resolve: any) => {
      this.groupListData = resolve.rows;
      this.searchData.groupId = this.groupListData[0].id;
      this.getCaseByGroup(this.searchData);
    });
  }

  private getCaseByGroup(searchData: any) {
    CasesApi.getExampleByGroupId(searchData).then((resolve: any) => {
      this.casesItemData.item = resolve.rows;
      this.casesItemData.count = resolve.count;
    });
  }

  private groupListEven(row: any) {
    this.searchData.groupId = row.id;
    this.searchData.page = 1;
    this.getCaseByGroup(this.searchData);
  }
  private async onPageIndexChange(page: number) {
    this.searchData.page = page;
    this.getCaseByGroup(this.searchData);
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
</style>