<template>
  <div>
    <el-row>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
      <el-col :xs="24" :sm="20" :lg="18">
        <el-row>
          <div style="background-color: #171f2a; padding: 15px;">
            <model-title :showMoreButton="false" :title="productData.name" />
            <el-carousel type="card" height="200px">
              <el-carousel-item v-for="(item, index) in productData.imgList" :key="index">
                <div style="text-align: center;">
                  <el-image
                    :src="item"
                    style="height: 200px; width: 100%;"
                    fit="contain"
                  />
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
            <div class="title">
              <span>{{ $t('products.relatedProductsTitle') }}</span>
            </div>
            <el-carousel type="card" height="150px">
              <el-carousel-item v-for="item in relatedProducts" :key="item">
                <router-link :tag="div" :to="'/product/detail?id='+item.id">
                  <div style="text-align: center;">
                    <el-image :src="item.imgUrl" style="height: 150px; width: 100%;" fit="contain" />
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
@Component({
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
    imgList: [""]
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
.title {
  height: 65px;
  text-align: center;
  span {
    font-size: 25px;
    color: #fff;
    border-bottom: solid #1d678c 4px;
    padding-bottom: 8px;
  }
}
</style>