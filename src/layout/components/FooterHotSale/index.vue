<template>
  <div style="background-color: #05101a;">
    <model-title :title="$t('modelTitle.hotSale')" url="/" />
    <el-row>
      <div>
        <el-carousel type="card" height="200px">
          <el-carousel-item v-for="item in 6" :key="item">
            <el-row>
              <el-col :span="12">
                <el-image :src="product1Url"></el-image>
              </el-col>
              <el-col :span="12">
                <div class="text-box">
                  <span>标题</span>
                  <p>在全球范围内，目前对于大数据都有一个共识，即大数据技术的战略意义不在于掌握庞大的数据信息，而在于对这些含有意义的数据进行专业化处理。换言之，如果把大数据比作一种产业，那么这种产业实现盈利的关键，在于提高对数据的“加工能力”，通过“加工”实现数据的“增值”...</p>
                </div>
              </el-col>
            </el-row>
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
import i18n from "@/lang";

@Component({
  name: "FooterHotSale",
  components: {
    ModelTitle
  }
})
export default class FooterHotSale extends Vue {
  private product1Url = require("@/assets/img/product/product1.png");
}
</script>

<style lang="scss">
.el-carousel__item {
  background-color: #242628;
}
</style>

<style lang="scss" scoped>
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
</style>