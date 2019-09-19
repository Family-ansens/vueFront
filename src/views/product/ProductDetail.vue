<template>
  <div>
    <el-row>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
      <el-col :xs="24" :sm="20" :lg="18">
        <el-row>
          <div style="background-color: #171f2a; padding: 15px;">
            <model-title size="large" :showMoreButton="false" :title="productData.name" />
            <el-carousel type="card" height="300px" :interval="5000">
              <el-carousel-item v-for="(item, index) in productData.imgList" :key="index">
                <div style="text-align: center;">
                  <el-image :src="item" style="height: 300px; width: 100%;" fit="contain" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-row>
        <el-row>
          <!-- 富文本 -->
          <content-box :content="productData.desc" />
        </el-row>
        <el-row>
          <div style="background-color: #171f2a;">
            <model-title
              size="small"
              :showMoreButton="false"
              :title="$t('products.relatedProductsTitle')"
            />
            <el-carousel type="card" height="150px">
              <el-carousel-item v-for="item in relatedProducts" :key="item">
                <router-link :tag="div" :to="'/product/detail?id='+item.id">
                  <div style="text-align: center;">
                    <el-image
                      :src="item.imgUrl"
                      style="height: 150px; width: 100%;"
                      fit="contain"
                      lazy
                    />
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
import * as ProductApi from "@/api/peacock/product";
import { MetaInfo } from "vue-meta";
@Component({
  metaInfo(): MetaInfo {
    return {
      title: this.$services.view.getTDK().title,
      htmlAttrs: {
        lang: this.$utils.common.language
      },
      meta: [
        {
          // set meta
          name: "description",
          content: this.$services.view.getTDK().description
        }
      ]
      // link: [{                 // set link
      //   rel: 'asstes',
      //   href: 'https://assets-cdn.github.com/'
      // }]
    };
  },
  name: "ProductDetail",
  components: {
    ModelTitle,
    ContentBox
  }
})
export default class ProductDetail extends Vue {
  private productData = {
    id: 0,
    name: "",
    desc: "",
    imgList: [""],
    introduction: ""
  };

  private relatedProducts = [
    {
      id: 0,
      name: "",
      imgUrl: "",
      introduction: ""
    }
  ];

  get productId() {
    return this.$route.query.id;
  }

  private created() {
    this.onProductIdChange();
  }

  @Watch("productId")
  private onProductIdChange() {
    ProductApi.productGetById(this.$route.query.id).then((resolve: any) => {
      this.productData = resolve;
      this.$services.view.setTDK({
        title: this.productData.name,
        description: this.productData.introduction
      });
    });

    ProductApi.relateProductGetById(this.$route.query.id).then(
      (resolve: any) => {
        this.relatedProducts = resolve;
      }
    );
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
</style>