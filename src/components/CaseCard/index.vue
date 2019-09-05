<template>
  <div style="padding: 0 15px 0 15px;">
    <model-title :showMoreButton="true" :title="$t('modelTitle.cases')" url="/case/list" style="margin-bottom: 15px;"/>
    <el-row>
      <el-col class="hidden-xs-only" style="text-align: center; margin-bottom: 15px;">
        <card-group-tab
          :dataList="casesGroupsArrays"
          v-model="activeIndex"
          :itemOnChangeEven="tabHandleClick"
        />
      </el-col>
    </el-row>
    <el-row v-for="(item, index) in newsData" :key="index" :gutter="10">
      <el-col :xs="24" :sm="24" :lg="8" v-for="(childItem, childIndex) in item" :key="childIndex">
        <case-card-item
          :imgUrl="childItem.imgUrl"
          :title="childItem.name"
          :bashUrl="'/case/detail?id=' + childItem.id"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CaseCardItem from "@/components/CaseCard/item.vue";
import CardGroupTab from "@/components/CardGroupTab/index.vue";
import ModelTitle from "@/components/ModelTitle/index.vue";
import * as CasesApi from "@/api/peacock/cases";
@Component({
  name: "CaseCardGroup",
  components: {
    CaseCardItem,
    ModelTitle,
    CardGroupTab
  }
})
export default class CaseCardGroup extends Vue {
  private activeIndex = 0;
  private casesGroupsArrays = [
    {
      id: 0,
      code: "",
      title: "",
      examples: [
        {
          id: 0,
          name: "",
          introduction: "",
          imgUrl: ""
        }
      ]
    }
  ];

  private caseData = [
    {
      id: 0,
      name: "",
      introduction: "",
      imgUrl: ""
    }
  ];
  private firstNewsList = new Array<any>();
  private secondNewsList = new Array<any>();
  private newsData = new Array<any>();

  created() {
    CasesApi.homeExampleGroups().then((resolve: any) => {
      this.casesGroupsArrays = resolve.slice(0, 5);
      this.tabHandleClick(this.activeIndex);
    });
  }

  private tabHandleClick(index: number) {
    this.caseData = this.casesGroupsArrays[index].examples;
    this.firstNewsList = this.caseData.slice(0, 3);
    this.secondNewsList = this.caseData.slice(3, 6);
    this.newsData = [this.firstNewsList, this.secondNewsList];
  }
}
</script>
