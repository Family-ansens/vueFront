<template>
  <el-row style="background-color: #000; padding: 50px 0 10px 0;">
    <el-col :xs="24" :sm="10" :lg="8">
      <el-row>
        <el-col :xs="6" :sm="3" :lg="2">&nbsp;</el-col>
        <el-col :xs="12" :sm="18" :lg="20">
          <div class="contact-box">
            <span class="header-title">{{ $t('footerContact.contactUs') }}</span>
            <div style="height: 25px;" />
            <span class="company-title">安平县优瑞丝网机械有限公司</span>
            <br />
            <span class="company-title-english">Yourui Wire Mesh Machinery Manufacturing Co. Ltd.</span>
            <br />
            <span>{{ $t('systems.ICP')}}</span>
          </div>
        </el-col>
        <el-col :xs="6" :sm="3" :lg="2">&nbsp;</el-col>
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="10" :lg="8">
      <el-row>
        <el-col :xs="6" :sm="3" :lg="2">&nbsp;</el-col>
        <el-col :xs="12" :sm="18" :lg="20">
          <div class="contact-box">
            <el-row>
              <el-col :xs="24" :sm="24" :lg="12">
                <span>{{ $t('footerContact.qq') }}: 630510239</span>
                <br />
                <span>{{ $t('footerContact.weChat') }}: 17631803952</span>
                <br />
                <span>{{ $t('footerContact.phone') }}: +86 15612839018</span>
                <br />
                <span>Skype:+86 15612839018</span>
                <br />
                <span>WhatsApp:+86 15612839018</span>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="12">
                <span>{{ $t('footerContact.email') }}1: yourui@puwiremesh.com</span>
                <br />
                <span>{{ $t('footerContact.email') }}2: puscreenmesh@gmail.com</span>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :xs="6" :sm="3" :lg="2">&nbsp;</el-col>
      </el-row>
    </el-col>
    <el-col :xs="24" :sm="4" :lg="8">
      <div class="contact-box" style="text-align: center;">
        <el-image fit="contain" class="trcode-image" :src="trCodeUrl" />
        <br />
        <span>{{ $t('footerContact.weChatQRCode') }}</span>
      </div>
    </el-col>
  </el-row>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "FooterContact"
})
export default class FooterContact extends Vue {
  private trCodeUrl = require("@/assets/img/TRcode.png");
}
</script>

<style lang="scss" scoped>
.contact-box {
  color: #d4d4d4;
  font-weight: bold;
  padding: 0 0 20px 0px;
  margin: 0 auto;
  .header-title {
    letter-spacing: 4px;
    font-size: 30px;
    border-bottom: solid #ffff 2px;
    padding-bottom: 4px;
  }

  .company-title {
    letter-spacing: 8px;
    font-size: 15px;
  }

  .company-title-english {
    letter-spacing: 1px;
    font-size: 10px;
  }

  .trcode-image {
    height: 100px;
    width: 100%;
  }

  span {
    font-size: 12px;
    letter-spacing: 2px;
  }
}
</style>