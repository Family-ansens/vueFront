<template>
  <div style="background-color: #05101a;">
    <model-title :showMoreButton="true" :title="$t('modelTitle.hotSale')" size="small" url="/product/list"/>
    <el-row>
      <div>
        <el-carousel type="card" height="200px">
          <el-carousel-item v-for="(item, index) in productList" :key="index">
            <router-link tag="div" :to="'/product/detail?id='+item.productId">
            <el-row>
              <el-col :span="12">
                <el-image :src="item.imgUrl" style="width: 100%;" fit="cover"></el-image>
              </el-col>
              <el-col :span="12">
                <div class="text-box">
                  <span>{{ item.productName }}</span>
                  <p>{{ item.introduction }}</p>
                </div>
              </el-col>
            </el-row>
            </router-link>
          </el-carousel-item>
        </el-carousel>
        <div class="bottom-box"></div>
      </div>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";

import * as ProductApi from "@/api/peacock/product";

@Component({
  name: "FooterHotSale",
  components: {
    ModelTitle,
  }
})
export default class FooterHotSale extends Vue {

  private productList = [{
    imgUrl: "",
    introduction: "",
    productName: "",
    productId: 0,
  }];

  created() {
    ProductApi.productHotSaleProducts().then((resolve: any) => {
      this.productList = resolve.rows;
    });
  }
}
</script>

<style lang="scss">
.el-carousel__item {
  background-color: #242628;
}
</style>

<style lang="scss" scoped>
// 热销走马灯标题
.footer-hot-sale-box {
   padding-top: 15px;
  .title {
    height: 85px;
    text-align: center;
    span {
      font-size: 30px;
      color: #fff;
      border-bottom: solid #1d678c 4px;
      padding-bottom: 8px;
    }
  }
}

.more-button {
  float: right;
  margin:10px 100px 0 0;
}
//热销走马灯样式
.text-box {
  span {
    font: 25px bolder;
  }
  padding: 5px;
  color: #fff;
  font-size: 14px;
}

.bottom-box {
  margin: 0 30px 0 30px;
  border-bottom: solid #fff 3px;
}

.carousel-wrapper {
  height: 200px;
}
</style>