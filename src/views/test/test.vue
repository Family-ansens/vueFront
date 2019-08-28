<template>
  <div>
    <el-pagination
      layout="prev, pager, next"
      :total="1000"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterHotSale from "@/layout/components/FooterHotSale/index.vue";
import FooterContact from "@/layout/components/FooterContact/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import NewsCard from "@/components/NewsCard/index.vue";
import GroupList from "@/components/GroupList/index.vue";
import Item from "@/components/Item/index.vue";
@Component({
  components: {
    FooterHotSale,
    FooterContact,
    ProductCard,
    NewsCard,
    GroupList,
    Item,
  }
})
export default class Test extends Vue {
  private introductUrl = require("@/assets/img/test.png");

  private data1 = {
    title: "标题标题标题标题",
    context: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
    date: "2019.08.26"
  };
  private activeIndex = "";
  private data = [
    { label: "test1", id: 1 },
    { label: "test2", id: 2 },
    { label: "test3", id: 3 },
    { label: "test4", id: 4 },
    { label: "test5", id: 5 },
    { label: "test6", id: 6 },
    { label: "test1", id: 1 },
    { label: "test2", id: 2 },
    { label: "test3", id: 3 },
    { label: "test4", id: 4 },
    { label: "test5", id: 5 },
    { label: "test6", id: 6 },
    { label: "test1", id: 1 },
    { label: "test2", id: 2 },
    { label: "test3", id: 3 },
    { label: "test4", id: 4 },
    { label: "test5", id: 5 },
    { label: "test6", id: 6 }
  ];

  private test() {
    console.info("onClick");
  }
}
</script>

<style lang="scss">
  .chart-wrapper {
    text-align: center;
    .product-card {
      display: inline-block;
    }
  }
</style>