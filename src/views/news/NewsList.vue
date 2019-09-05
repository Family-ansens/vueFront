<template>
  <div class="main-wrapper">
    <header-carousel />
    <model-title :showMoreButton="false" :title="$t('news.title')" size="large"/>
    <el-row>
      <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
      <!-- 主 -->
      <el-col :xs="22" :sm="18" :lg="22">
        <el-row>
          <el-col>
            <news-card-item
              v-for="(item, index) in newsListData.item"
              class="news-card-wrapper"
              :key="index"
              size="large"
              :id="item.id"
              :picUrl="item.imgUrl"
              :title="item.title"
              :context="item.introduction"
              :date="item.publishTime"
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
          :total="newsListData.count"
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
import moment from 'moment';
import ModelTitle from "@/components/ModelTitle/index.vue";
import NewsCardItem from "@/components/NewsCard/item.vue";
import HeaderCarousel from "@/components/HeaderCarousel/index.vue";
import * as NewsApi from "@/api/peacock/news";
@Component({
  name: "NewsList",
  components: {
    ModelTitle,
    NewsCardItem,
    HeaderCarousel,
  }
})
export default class NewsList extends Vue {
  private newsListData = {
    item: [{
    id: 0,
    title: "",
    introduction: "",
    imgUrl: "",
    publishTime: moment().format("YYYY-MM-DD HH:mm:ss")
  }],
    count: 0
  };

  private searchData = {
    page: 1,
    size: 10
  };

  created() {
    this.getNewsList(this.searchData);
  }

  private getNewsList(searchData: any) {
    NewsApi.newsList(this.searchData).then((resolve: any) => {
      this.newsListData.item = resolve.rows;
      this.newsListData.count = resolve.count;
    });
  }

  private async onPageIndexChange(page: number) {
    this.searchData.page = page;
    this.getNewsList(this.searchData);
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 15px;
}

.news-card-wrapper {
  margin-bottom: 15px;
}
</style>