<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-image class="logo" :src="logoUrl"></el-image>
      </el-col>
      <el-col :offest="12" :span="12">
        <el-row>
          <el-col class="borderBottom">
            <div class="topContactBox">
              <svg-icon class="svg-icon" name="微信" />
              <span>15612839018</span>
            </div>
            <div class="topContactBox">
              <svg-icon class="svg-icon" name="QQ" />
              <span>552453110</span>
            </div>
            <div class="topContactBox">
              <svg-icon class="svg-icon" name="email" />
              <span>552453110@qq.com</span>
            </div>
            <div class="topContactBox">
              <svg-icon class="svg-icon" name="中文" />
              <svg-icon class="svg-icon" name="英文" />
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="topRightContactBox" >
              <svg-icon name="skype" color="#15ACE5"/>
              <svg-icon name="fackbook" color="#3C5A99"/>
              <svg-icon name="original-whatapp" color="#3EBE2A"/>
              <svg-icon name="youtube" color="#cc0002" />
              <svg-icon name="优酷" color="#38CEFF #0B99FF #FF4A4A" />
              <svg-icon name="推特" color="#0a71b0"/>
              <svg-icon name="领英" color="#008DC2"/>
              <svg-icon name="instagram" color="#D81E06"/>
              <svg-icon name="pinterest" color="#C02328"/>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "HeaderTitle"
})
export default class HeaderTitle extends Vue {
  private logoUrl = require("@/assets/img/logo.png");
}
</script>

<style lang="scss" scoped>
.logo {
  width: 550px;
  padding: 30px 0px 0px 90px;
}

.borderBottom {
  background: #003d5c;
  border-bottom-left-radius: 40px;
}

.topContactBox {
  display: inline-block;
  margin-left: 40px;
  span {
    margin-left: 5px;
    line-height: 40px;
    height: 40px;
    font-size: 15px;
    color: #bbc7cf;
    text-align: center;
  }
  .svg-icon {
    color: #bbc7cf;
    vertical-align: middle;
  }
}

.topRightContactBox {
  margin-right: 60px;
  margin-top: 60px;
  clear: both;
  * {
    float: right;
    margin-left: 15px;
  }
}
</style>