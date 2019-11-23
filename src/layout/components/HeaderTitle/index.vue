<template>
  <div>
    <el-row style="background-color: #f3f3f3;">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-row>
          <el-col :xs="0.5" :sm="1" :lg="3">&nbsp;</el-col>
          <el-col :xs="23" :sm="22" :lg="20">
            <el-image class="logo" fit="cover" :src="logoUrl" ></el-image>
          </el-col>
          <el-col :xs="0.5" :sm="1" :lg="1">&nbsp;</el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <el-row class="borderBottom">
          <el-col class="topContactBox" :xs="12" :sm="12" :lg="6">
            <span class="hidden-xs-only hidden-sm-only">&nbsp;</span>
            <svg-icon class="svg-icon" name="微信" />
            <span>17631803952</span>
          </el-col>
          <el-col class="topContactBox" :xs="12" :sm="12" :lg="5">
            <svg-icon class="svg-icon" name="QQ" />
            <span>630510239</span>
          </el-col>
          <el-col class="topContactBox" :xs="12" :sm="12" :lg="8">
            <svg-icon class="svg-icon" name="email" />
            <span>yourui@puwiremesh.com</span>
          </el-col>
          <el-col class="topContactBox" :xs="12" :sm="12" :lg="5">
            <el-dropdown trigger="click" @command="handleSetLanguage">
              <svg-icon name="language" class="svg-icon" color="#bbc7cf" style="cursor: pointer;"/>
              <span style="color: #bbc7cf; font-size: 10px;">{{ $t('components.languageButton') }}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :disabled="language==='zhCn'" command="zhCn">中文</el-dropdown-item>
                <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :lg="22">
            <div class="topRightContactBox">
              <svg-icon name="skype" color="#15ACE5" />
              <svg-icon name="fackbook" color="#3C5A99" />
              <svg-icon name="original-whatapp" color="#3EBE2A" />
              <svg-icon name="youtube" color="#cc0002" />
              <svg-icon name="优酷" color="#38CEFF #0B99FF #FF4A4A" />
              <svg-icon name="推特" color="#0a71b0" />
              <svg-icon name="领英" color="#008DC2" />
              <svg-icon name="instagram" color="#D81E06" />
              <svg-icon name="pinterest" color="#C02328" />
            </div>
          </el-col>
          <el-col :xs="0" :lg="2">
            &nbsp;
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

  get language() {
    return this.$utils.common.language;
  }

  set language(val: string) {
    this.$utils.common.language = val;
  }

  private handleSetLanguage(lang: string) {
    this.$i18n.locale = lang;
    this.language = lang;
    this.$message({
      message: "Switch Language Success!",
      type: "success"
    });
    this.$router.push(`/redirect${this.$route.fullPath}`);
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  padding: 20px 0 10px 0;
}

.borderBottom {
  background: #003d5c;
  border-bottom-left-radius: 25px;
}

.topContactBox {
  color: #bbc7cf;
  padding-left: 10px;
  height: 40px;
  span {
    margin-left: 5px;
    line-height: 40px;
    font-size: 15px;
  }
  .svg-icon {
    vertical-align: middle;
  }
}

.topRightContactBox {
  margin-top: 60px;
  clear: both;
  * {
    float: right;
    margin: 0 15px 10px 0;
  }
}
</style>