<template>
  <el-row style="height: 200px; background-color: #000; padding-top: 50px;">
    <el-col :span="8">
      <div class="contact-box">
        <span class="header-title">{{ $t('footerContact.contactUs') }}</span>
        <div style="height: 25px;"/>
        <span class="company-title">安平县优瑞丝网机械有限公司</span>
        <br />
        <span class="company-title-english">Yourui Wire Mesh Machinery Manufacturing Co. Ltd.</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="contact-box" style="width: 300px;">
        <span>{{ $t('footerContact.qq') }}：552453110</span>
        <br />
        <span>{{ $t('footerContact.weChat') }}：15612839018</span>
        <br />
        <span>{{ $t('footerContact.phone') }}：+86 15612839018</span>
        <br />
        <span>Skype:+86 15612839018</span>
        <br />
        <span>WhatsApp:+86 15612839018</span>
        <br />
        <span>{{ $t('footerContact.email1') }}：552453110@qq.com</span>
        <br />
        <span>{{ $t('footerContact.email2') }}：puscreenmesh@gmail.com</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="contact-box" style="text-align: center;">
        <el-image class="trcode-image" :src="trCodeUrl" />
        <br />
        <span>{{ $t('footerContact.weChatQRCode') }}</span>
      </div>
    </el-col>
  </el-row>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  name: 'FooterContact'
})
export default class FooterContact extends Vue {
  private trCodeUrl = require("@/assets/img/TRcode.png");
}
</script>

<style lang="scss">
  .contact-box {
    color: #d4d4d4;
    font-weight: bold;
    width: 340px;
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
      width: 100px;
    }

    span {
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
</style>