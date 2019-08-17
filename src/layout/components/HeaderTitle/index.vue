<template>
  <div>
    <el-row>
      <el-col class="borderBottom" :offset="12">
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
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-8 logo">
          <!-- <a href="index.html">
            <img src="images/logo.png" alt="MojoCube 官方" />
          </a>-->
        </div>

        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="address"></div>
        </div>

        <div class="col-xs-6 col-sm-3 col-md-2">
          <div class="topRightContactBox">
            <svg-icon name="skype" />
            <svg-icon name="fackbook" />
            <svg-icon name="original-whatapp" />
            <svg-icon name="微信" />
            <span>15612839018</span>
            <svg-icon name="QQ" />
            <span>552453110</span>
            <svg-icon name="email" />
            <span>552453110@qq.com</span>
            <svg-icon name="中文" />
            <svg-icon name="英文" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.borderBottom {
  background: #397dce;
  border-radius: 20px;
}

.topContactBox {
  display: inline-block;
  margin-left: 40px;
  span {
    line-height: 40px;
    height: 40px;
    font-size: 15px;
    color: #bbc7cf;
    text-align: center;
  }
  .svg-icon {
    vertical-align: middle;
  }
}
</style>