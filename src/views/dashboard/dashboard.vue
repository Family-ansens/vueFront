<template>
  <!-- 公司介绍 -->
  <div>
    <el-row>
      <div class="company-introduction">
        <model-title :showMoreButton="false" :title="$t('modelTitle.company')" />
        <el-row>
          <el-col :xs="24" :sm="24" :lg="15" style="padding: 15px;">
            <el-image class="synopsis-main-pic" :src="introductUrl" fit="contain" />
          </el-col>
          <el-col :xs="24" :sm="24" :lg="9">
            <el-row>
              <div style="padding: 15px 15px 0 15px;">
                <span class="company-title">{{ $t('modelTitle.companySynopsis') }}</span>
              </div>
            </el-row>
            <el-row>
              <div class="synopsis-text-box">
                <p>优瑞丝网机械制造有限公司位于河北省安平县，1998年开始从事丝网机械制造，历经20年的发展，积累了大量的技术和研发实力，自研发机械生产的产品包括聚氨酯筛网、拉丝机、金刚网、钛克网等，为丝网行业贡献了稀有的高质量产品，在国内畅销多年，并销往世界各国。</p>
              </div>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-image class="synopsis-pic" :src="introductUrl" />
              </el-col>
              <el-col :span="12">
                <el-image class="synopsis-pic" :src="introductUrl" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-row>

    <!-- 产品介绍 -->
    <el-row style="margin-bottom: 30px;">
      <model-title :showMoreButton="true" :title="$t('modelTitle.products')" url="/" />
      <el-row>
        <el-col class="hidden-xs-only">
          <el-tabs style="width: 720px; margin: 0 auto;">
            <el-tab-pane
              v-for="(item, index) in productsGroupsArrays"
              :label="item.title"
              :name="item.name"
              :key="index"
              style="color: #ffffff;"
            />
          </el-tabs>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 35px;">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
      </el-row>
    </el-row>

    <!-- 应用展示 -->
    <el-row style="background-color: #05101a; padding-bottom: 30px;">
      <model-title :showMoreButton="true" :title="$t('modelTitle.cases')" url="/" />
      <el-col class="hidden-xs-only">
        <el-tabs style="width: 720px; margin: 0 auto;">
          <el-tab-pane
            v-for="(item, index) in productsGroupsArrays"
            :label="item.title"
            :name="item.name"
            :key="index"
            style="color: #ffffff;"
          />
        </el-tabs>
      </el-col>
      <el-row>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 35px;">
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :lg="8">
          <div class="chart-wrapper">
            <product-card :picUrl="introductUrl" title="test" class="product-card" />
          </div>
        </el-col>
      </el-row>
    </el-row>

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
    </el-row>
  </div>
</template>

<script lang="ts">
import ModelTitle from "@/components/ModelTitle/index.vue";
import ProductCard from "@/components/ProductCard/index.vue";
import NewsCard from "@/components/NewsCard/index.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    ModelTitle,
    ProductCard,
    NewsCard
  }
})
export default class Dashboard extends Vue {
  private introductUrl = require("@/assets/img/test.png");
  private productsGroupsArrays = [
    {
      title: "最新产品",
      name: "1"
    },
    {
      title: "注塑聚氨酯筛板",
      name: "2"
    },
    {
      title: "钢丝网窗纱",
      name: "3"
    },
    {
      title: "拉丝机",
      name: "4"
    },
    {
      title: "钢丝绳芯聚氨酯筛网",
      name: "5"
    }
  ];

  private data = {
    title: "标题标题标题标题",
    context:
      "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
    date: "2019.08.26"
  };
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.el-tabs__item {
  color: #ffffff;
  font-size: 20px;
}
</style>

<style lang="scss" scoped>
.company-introduction {
  background-color: #05101a;

  .synopsis-main-pic {
    height: 500px;
    width: 100%;
  }

  .company-title {
    font-size: 17px;
    font-weight: 1px;
    letter-spacing: 2px;
    color: #ffffff;
    border-left: solid #1d678c 3px;
    padding-left: 17px;
  }

  .synopsis-text-box {
    padding: 15px;
    p {
      text-indent: 30px;
      font-size: 17px;
      font-weight: 2px;
      letter-spacing: 1px;
      color: #ffffff;
      line-height: 50px;
    }
  }

  .synopsis-pic {
    padding: 15px;
  }
}

.chart-wrapper {
  text-align: center;
  .product-card {
    display: inline-block;
  }
}

.news-card-wrapper {
  margin: 0 auto;
}
</style>

