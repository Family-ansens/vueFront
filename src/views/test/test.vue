<template>
  <div>
    <news-card :picUrl="introductUrl" :title="data.title" :context="data.context" :date="data.date"/>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterHotSale from "@/layout/components/FooterHotSale/index.vue";
import FooterContact from "@/layout/components/FooterContact/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import NewsCard from "@/components/NewsCard/index.vue";
@Component({
  components: {
    FooterHotSale,
    FooterContact,
    ProductCard,
    NewsCard,
  }
})
export default class Test extends Vue {
  private introductUrl = require("@/assets/img/test.png");

  private data = {
    title: "标题标题标题标题",
    context: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
    date: "2019.08.26"
  };
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