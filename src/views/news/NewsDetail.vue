<template>
  <div class="main-wrapper">
    <div style="background-color: #05101a;">
      <model-title :showMoreButton="false" :title="newsDetail.title" size="large" />
      <div class="publish-time">
        <span>{{ formatTime(newsDetail.publishTime) }}</span>
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
import * as NewsApi from "@/api/peacock/news";
import moment from "moment";
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
    NewsApi.getNewsById({ id: this.newsId }).then((resolve: any) => {
      this.newsDetail = resolve;
      this.$services.view.setTDK({title: this.newsDetail.title, description: this.newsDetail.content });
    });
  }

  private formatTime(val: any) {
    return this.$utils.common.formatDate(val, 'l');
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