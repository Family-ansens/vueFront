<template>
  <div style="padding: 0 15px 0 15px;">
    <model-title :showMoreButton="true" :title="$t('modelTitle.products')" url="/product/list" style="margin-bottom: 15px;" />
    <el-row>
      <el-col class="hidden-xs-only" style="text-align: center; margin-bottom: 15px;">
        <card-group-tab
          :dataList="productsGroupsArrays"
          v-model="activeIndex"
          :itemOnChangeEven="tabHandleClick"
        />
      </el-col>
    </el-row>
    <el-row v-for="(item, index) in newsData" :key="index" :gutter="10">
      <el-col :xs="24" :sm="24" :lg="8" v-for="(childItem, childIndex) in item" :key="childIndex">
        <product-card-item
          :imgUrl="childItem.imgUrl"
          :title="childItem.name"
          :bashUrl="'/product/detail?id=' + childItem.id"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ProductCardItem from "@/components/ProductCard/item.vue";
import CardGroupTab from "@/components/CardGroupTab/index.vue";
import ModelTitle from "@/components/ModelTitle/index.vue";
import * as ProductApi from "@/api/peacock/product";
@Component({
  name: "ProductCardGroup",
  components: {
    ProductCardItem,
    ModelTitle,
    CardGroupTab
  }
})
export default class ProductCardGroup extends Vue {
  private activeIndex = 0;
  private productsGroupsArrays = [
    {
      id: 0,
      code: "",
      title: "",
      products: [
        {
          id: 0,
          name: "",
          introduction: "",
          imgUrl: ""
        }
      ]
    }
  ];

  private productData = [
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

  private introductUrl = require("@/assets/img/test.png");

  created() {
    ProductApi.homeProductGroups().then((resolve: any) => {
      this.productsGroupsArrays = resolve;
      this.tabHandleClick(this.activeIndex);
    });
  }

  private tabHandleClick(index: number) {
    this.productData = this.productsGroupsArrays[index].products;
    this.firstNewsList = this.productData.slice(0, 3);
    this.secondNewsList = this.productData.slice(3, 6);
    this.newsData = [this.firstNewsList, this.secondNewsList];
  }
}
</script>