<template>
  <div>
    <el-row>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
      <el-col :xs="24" :sm="20" :lg="18">
        <el-row>
          <div style="padding: 15px;">
            <model-title size="large" :showMoreButton="false" :title="caseData.name" />
            <detail-pic-list :imgList="caseData.imgList" interval="6000"/>
          </div>
        </el-row>
        <el-row>
          <!-- 富文本 -->
          <content-box :content="caseData.desc" />
        </el-row>
        <el-row>
          <div style="background-color: #171f2a;">
            <model-title
              size="small"
              :showMoreButton="false"
              :title="$t('products.relatedProductsTitle')"
            />
            <el-carousel type="card" height="250px">
              <el-carousel-item v-for="(item, index) in caseData.relationProducts" :key="index">
                <router-link :tag="div" :to="'/product/detail?id='+item.productId">
                  <div style="text-align: center;">
                    <el-image :src="item.imgUrl" style="height: 250px; width: 100%;" fit="cover" lazy />
                  </div>
                </router-link>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import ContentBox from "@/components/ContentBox/index.vue";
import DetailPicList from "@/components/DetailPicList/index.vue";
import * as CasesApi from "@/api/peacock/cases";
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
  name: "ProductDetail",
  components: {
    ModelTitle,
    ContentBox,
    DetailPicList
  }
})
export default class ProductDetail extends Vue {
  private caseData = {
    id: 0,
    name: "",
    desc: "",
    imgList: [""],
    introduction: "",
    relationProducts: [
      {
        productId: 0,
        imgUrl: ""
      }
    ],
    imgUrl: "" // 不使用
  };

  get caseId() {
    return this.$route.query.id;
  }

  private created() {
    this.onCaseIdChange();
  }

  @Watch("caseId")
  private onCaseIdChange() {
    CasesApi.getExampleById(this.$route.query.id).then((resolve: any) => {
      this.caseData = resolve;
      this.$services.view.setTDK({title: this.caseData.name, description: this.caseData.introduction });
    });
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>