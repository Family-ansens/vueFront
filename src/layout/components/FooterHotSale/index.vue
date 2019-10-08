<template>
  <div style="background-color: #05101a; padding-top: 10px;">
    <model-title
      :showMoreButton="true"
      :title="$t('modelTitle.hotSale')"
      size="small"
      url="/product/list"
    />
    <el-row>
      <div>
        <el-carousel type="card" height="200px">
          <el-carousel-item v-for="(item, index) in productList" :key="index" style="background-color: #242628;">
            <router-link tag="div" :to="'/product/detail?id='+item.productId">
              <el-row>
                <el-col :xs="24" :sm="12" :lg="12">
                  <div style="text-align: center;">
                    <el-image :src="item.imgUrl" style="height: 200px; width: 100%;" fit="cover" lazy />
                  </div>
                </el-col>
                <el-col :xs="0" :sm="12" :lg="12">
                  <div class="text-box">
                    <div class="title">
                      <span>{{ item.productName }}</span>
                    </div>
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
    ModelTitle
  }
})
export default class FooterHotSale extends Vue {
  private productList = [
    {
      imgUrl: "",
      introduction: "",
      productName: "",
      productId: 0
    }
  ];

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
.more-button {
  float: right;
  margin: 10px 100px 0 0;
}
//热销走马灯样式
.text-box {
  padding: 5px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  .title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    span {
      font: 25px bolder;
    }
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 8;
    overflow: hidden;
  }
}

.bottom-box {
  margin: 0 30px 0 30px;
  border-bottom: solid #fff 3px;
}

.carousel-wrapper {
  height: 200px;
}
</style>