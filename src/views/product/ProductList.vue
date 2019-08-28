<template>
  <div class="main-wrapper">
    <header-carousel />
    <model-title :showMoreButton="false" :title="$t('products.title')" />
    <el-row>
      <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
      <!-- 主 -->
      <el-col :xs="22" :sm="18" :lg="22">
        <el-row>
          <el-col :xs="24" :sm="24" :lg="5">
            <group-list
              style="margin-bottom: 20px;"
              :items="groupListData"
              :activeIndex="activeIndex"
              :onClickEven="groupListEven"
            />
          </el-col>
          <el-col :xs="0" :sm="1" :lg="1">&nbsp;</el-col>
          <el-col :xs="24" :sm="24" :lg="18">
            <item
              class="item-wrapper"
              v-for="item in itemData"
              :key="item.productId"
              :picUrl="introductUrl"
              :title="item.title"
              :context="item.context"
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
          :total="1000"
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
@Component({
  name: "ProductList",
  components: {
    ModelTitle,
    GroupList,
    Item,
    HeaderCarousel,
  }
})
export default class ProductList extends Vue {
  private introductUrl = require("@/assets/img/test.png");
  private itemData = [
    {
      id: 1,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    },
    {
      id: 2,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    },
    {
      id: 3,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    },
    {
      id: 4,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    },
    {
      id: 5,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    },
    {
      id: 6,
      title: "标题标题标题标题",
      context:
        "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试"
    }
  ];

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

  private groupListEven() {
    console.info("onClick");
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