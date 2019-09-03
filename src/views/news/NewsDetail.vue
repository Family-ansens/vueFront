<template>
  <div class="main-wrapper">
    <div style="background-color: #05101a;">
      <model-title :showMoreButton="false" :title="newsDetail.title" size="large" />
      <div class="publish-time">
        <span>{{ newsDetail.publishTime }}</span>
      </div>
      <el-row>
        <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
        <!-- 主 -->
        <el-col :xs="22" :sm="18" :lg="22">
          <el-row>
            <el-col>
              <!-- 富文本 -->
              <content-box :content="newsDetail.content" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="1" :sm="3" :lg="1">&nbsp;</el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import ContentBox from "@/components/ContentBox/index.vue";
import * as NewsCardApi from "@/api/peacock/news";
import moment from "moment";

@Component({
  name: "NewsDetail",
  components: {
    ModelTitle,
    ContentBox
  }
})
export default class NewsDetail extends Vue {
  private newsDetail = {
    title: "",
    content: "",
    introduction: "",
    publishTime: moment().format("YYYY-MM-DD HH:mm:ss"),
    imgUrl: "",
    id: 0
  };

  get newsId() {
    return this.$route.query.id;
  }

  created() {
    NewsCardApi.getNewsById({ id: this.newsId }).then((resolve: any) => {
      this.newsDetail = resolve;
      this.newsDetail.publishTime = this.$utils.common.formatDate(
        resolve.publishTime,
        "l"
      );
    });
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 15px;
}

.publish-time {
  color: #fff;
  text-align: center;
  span {
    font-size: 15px;
    font-weight: 1px;
    letter-spacing: 1px;
  }
}
</style>