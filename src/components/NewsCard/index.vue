<template>
  <div class="news-card-group-wrapper">
    <el-row>
      <model-title
        :showMoreButton="true"
        :title="$t('modelTitle.news')"
        url="/news/list"
        size="large"
      />
      <el-row
        :gutter="10"
        style="margin-bottom: 30px;"
        v-for="(item, index)  in newsData"
        :key="index"
      >
        <el-col
          :xs="24"
          :sm="24"
          :lg="8"
          v-for="(childItem, childIndex)  in item"
          :key="childIndex"
        >
          <div>
            <news-card-item
              class="news-card-wrapper"
              :picUrl="childItem.imgUrl"
              size="small"
              :title="childItem.title"
              :context="childItem.introduction"
              :date="childItem.publishTime"
              :id="childItem.id"
            />
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import NewsCardItem from "@/components/NewsCard/item.vue";
import moment from "moment";
import * as NewsApi from "@/api/peacock/news";
@Component({
  name: "NewsCardGroup",
  components: {
    ModelTitle,
    NewsCardItem
  }
})
export default class NewsCardGroup extends Vue {
  private newsList = [
    {
      id: 0,
      title: "",
      introduction: "",
      imgUrl: "",
      publishTime: moment().format("YYYY-MM-DD HH:mm:ss")
    }
  ];

  private firstNewsList = new Array<any>();
  private secondNewsList = new Array<any>();
  private newsData = new Array<any>();

  created() {
    NewsApi.newsList({ size: 6, page: 1 }).then((resolve: any) => {
      this.newsList = resolve.rows;
      this.firstNewsList = this.newsList.slice(0, 3);
      this.secondNewsList = this.newsList.slice(3, 6);
      this.newsData = [this.firstNewsList, this.secondNewsList];
    });
  }
}
</script>

<style lang="scss" scoped>
.news-card-group-wrapper {
  padding: 15px;
  .news-card-wrapper {
    margin: 0 auto;
  }
}
</style>