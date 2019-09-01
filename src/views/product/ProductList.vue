<template>
  <div class="main-wrapper">
    <header-carousel />
    <model-title :showMoreButton="false" :title="$t('products.title')" />
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
              v-for="item in productsItemData"
              :key="item.id"
              :id="item.id"
              bashPath="/product/detail"
              :picUrl="item.imgUrl"
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
        <el-pagination style="text-align: center;" layout="prev, pager, next" :total="1000" />
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
import * as ProductApi from "@/api/peacock/product";
@Component({
  name: "ProductList",
  components: {
    ModelTitle,
    GroupList,
    Item,
    HeaderCarousel
  }
})
export default class ProductList extends Vue {
  private introductUrl = require("@/assets/img/test.png");
  private productsItemData = [
    {
      id: 0,
      name: "",
      introduction: "",
      imgUrl: ""
    }
  ];

  private activeIndex = 0;
  private groupListData = [];

  created() {
    ProductApi.homeProductGroups().then((resolve: any) => {
      this.groupListData = resolve;
      this.productsItemData = resolve[0].products;
    });
  }

  private groupListEven(row: any) {
    this.productsItemData = row.products;
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