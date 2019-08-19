<template>
  <el-row>
    <div class="footer-hot-sale-box">
      <div style="height: 80px;">
        <span class="title">热销产品</span>
      </div>
      
      <el-carousel type="card" :autoplay="false">
        <el-carousel-item v-for="item in 6" :key="item">
          <el-row >
            <el-col :span="12" style="background-color: #252729">
            <el-image :src="productUrl"></el-image>
          
            </el-col>
            <el-col :span="12" style="background-color: #fff">
            <el-image :src="productUrl"></el-image>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "FooterHotSale"
})
export default class FooterHotSale extends Vue {
  private productUrl = require("@/assets/img/product/product1.png");
}
</script>

<style lang="scss" scoped>
.footer-hot-sale-box {
  text-align: center;
  background: #05101a;
}

.title {
  font-size: 30px;
  color: #fff;
  border-bottom: solid #1d678c 4px;
  padding-bottom: 8px;
}
  
  .el-carousel__item {
    background-color: #252729;
  }
</style>