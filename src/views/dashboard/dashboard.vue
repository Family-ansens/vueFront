<template>
  <div>
    <!-- 公司介绍 -->
    <el-row>
      <company-introduction />
    </el-row>

    <!-- 产品介绍 -->
    <el-row style="margin-bottom: 30px;">
      <product-card-group />
    </el-row>

    <!-- 应用展示 -->
    <el-row style="background-color: #05101a; padding-bottom: 30px;">
      <case-card-group />
    </el-row>

    <!-- 公司动态 -->
    <el-row style="margin-bottom: 30px;">
      <news-card-group />
    </el-row>
  </div>
</template>

<script lang="ts">
import CompanyIntroduction from "@/components/CompanyIntroduction/index.vue";
import ProductCardGroup from "@/components/ProductCard/index.vue";
import CaseCardGroup from "@/components/CaseCard/index.vue";
import NewsCardGroup from "@/components/NewsCard/index.vue";
import HeaderCarousel from "@/components/HeaderCarousel/index.vue";
import { Vue, Component } from "vue-property-decorator";
import { MetaInfo } from 'vue-meta';

@Component({
  metaInfo(): MetaInfo {
    return {
      title: this.$services.view.getTDK().title,
      htmlAttrs: {
        lang: this.$utils.common.language,
      },
      meta: [{                 // set meta
        name: 'description',
        content: this.$services.view.getTDK().description,
      }],
      // link: [{                 // set link
      //   rel: 'asstes',
      //   href: 'https://assets-cdn.github.com/'
      // }]
    };
  },
  components: {
    CompanyIntroduction,
    ProductCardGroup,
    CaseCardGroup,
    NewsCardGroup,
    HeaderCarousel
  }
})
export default class Dashboard extends Vue {
  
  created() {
    this.$services.view.setTDK({title: this.$i18n.t("router.dashboard"), description: "tttttttttt"});
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
</style>

