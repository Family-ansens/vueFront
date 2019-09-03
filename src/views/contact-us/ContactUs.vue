<template>
  <div class="main-wrapper">
    <el-row>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
      <el-col :xs="24" :sm="20" :lg="18">
        <el-row style="background-color: #05101a; padding: 15px; margin-bottom: 15px;">
          <model-title :showMoreButton="false" :title="$t('contactUs.title')" size="large"/>
          <!-- 文本介绍 -->
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :lg="12">
              <div class="contact-box first-box">
                <span class="title">{{ $t('contactUs.ZHANGRUI') }}</span>
                <br />
                <span>{{ $t('footerContact.qq') }}: 552453110</span>
                <br />
                <span>{{ $t('footerContact.weChat') }}: 15612839018</span>
                <br />
                <span>{{ $t('footerContact.phone') }}: +86 15612839018</span>
                <br />
                <span>Skype: +86 15612839018</span>
                <br />
                <span>WhatsApp: +86 15612839018</span>
                <br />
                <span>{{ $t('footerContact.email') }}: 552453110@qq.com</span>
              </div>
              <!-- second-box -->
              <div class="contact-box second-box">
                <span class="title">{{ $t('contactUs.ZHANGJIANFENG') }}</span>
                <br />
                <span>{{ $t('footerContact.weChat') }}: 13831813004</span>
                <br />
                <span>{{ $t('footerContact.phone') }}: +86 15612831218</span>
              </div>
              <!-- third-box -->
              <div class="contact-box">
                <span class="title">{{ $t('contactUs.HEYING') }}</span>
                <br />
                <span>{{ $t('footerContact.qq') }}: 279052016</span>
                <br />
                <span>{{ $t('footerContact.weChat') }}: 13231868828</span>
                <br />
                <span>{{ $t('footerContact.phone') }}: +86 13231868828</span>
                <br />
                <span>Skype: +86 15612839018</span>
                <br />
                <span>WhatsApp: +86 13231868828</span>
                <br />
                <span>{{ $t('footerContact.email') }}: helenhewiremesh@gmail.com</span>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
              <div class="contact-box first-box" style="margin-top: 15px;">
                <span>{{ $t('contactUs.company') }}</span>
                <br />
                <span>{{ $t('contactUs.webSite') }}: puwiremesh.com</span>
                <br />
                <span>{{ $t('contactUs.address') }}</span>
                <br />
                <span>{{ $t('footerContact.email') }}: puwiremesh@gmail.com</span>
                <br />
              </div>
              <!-- second-box -->
              <div class="contact-box topRightContactBox second-box">
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
          </el-row>
          <el-form
            label-width="100px"
            label-position="top"
            ref="messageForm"
            :model="messageFormData"
            :rules="messageFormRules"
            style="margin-bottom: 15px;"
          >
            <el-row :gutter="200">
              <div class="online-message-title">
                <span>{{ $t('contactUs.onlineMessage') }}</span>
              </div>
              <el-col :xs="24" :sm="24" :lg="12">
                <el-form-item :label="$t('contactUs.name')" prop="name">
                  <el-input v-model="messageFormData.name" maxlength="50" />
                </el-form-item>
                <el-form-item :label="$t('contactUs.tel')" prop="tel">
                  <el-input v-model="messageFormData.tel" maxlength="50" />
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :lg="12">
                <el-form-item :label="$t('footerContact.email')" prop="email">
                  <el-input v-model="messageFormData.email" maxlength="50" />
                </el-form-item>
                <el-form-item :label="$t('contactUs.otherContact')" prop="otherContact">
                  <el-input v-model="messageFormData.otherContact" maxlength="50" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col>
                <el-form-item :label="$t('contactUs.content')" prop="content">
                  <el-input
                    v-model="messageFormData.content"
                    maxlength="500"
                    type="textarea"
                    :rows="5"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-button
                style="background-color: #1d678c; color: #fff; float: right;"
                @click="onEvaluation"
              >{{$t('contactUs.send')}}</el-button>
            </el-row>
          </el-form>
        </el-row>
        <!-- map -->
        <el-row>
          <div class="online-message-title">
            <span>{{ $t('contactUs.findUs') }}</span>
          </div>
          <el-amap
            vid="amapDemo"
            lang="zh_en"
            :center="amapData.center"
            :zoom="amapData.zoom"
            :map-manager="amapData.amapManager"
            class="amap-wrapper"
          >
            <el-amap-marker vid="component-marker" :position="amapData.center" />
          </el-amap>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="2" :lg="3">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ModelTitle from "@/components/ModelTitle/index.vue";
import * as ContactUsApi from "@/api/peacock/contactUs";
import { AMapManager } from "vue-amap";
@Component({
  name: "ContactUs",
  components: {
    ModelTitle
  }
})
export default class ContactUs extends Vue {
  private messageFormData = {
    name: "",
    tel: "",
    email: "",
    otherContact: "",
    content: ""
  };

  private messageFormRules = {
    name: [{ required: true, trigger: "blur" }],
    tel: [{ required: true, trigger: "blur" }],
    email: [{ required: true, trigger: "blur" }],
    content: [{ required: true, trigger: "blur" }]
  };

  private amapData = {
    zoom: 14,
    center: [115.549235, 38.209193],
    amapManager: {}
  };

  private onEvaluation() {
    (this.$refs.messageForm as any).validate((valid: any) => {
      if (valid) {
        ContactUsApi.evaluation(this.messageFormData).then(resolve => {
          this.$message.success(this.$t('systems.putSuccess').toString());
        });
      }
    });
  }
}
</script>

<style lang="scss">
.el-form-item__label {
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
}
</style>

<style lang="scss" scoped>
.main-wrapper {
  padding: 15px;
}

.contact-box {
  color: #d4d4d4;
  padding: 0 0 20px 0px;
  margin: 0 auto;

  .title {
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 45px;
  }

  span {
    font-weight: 2px;
    line-height: 27px;
    font-size: 14px;
    letter-spacing: 2px;
  }
}

.topRightContactBox {
  * {
    margin-left: 15px;
  }
}

.first-box {
  height: 230px;
}

.second-box {
  height: 150px;
}

.online-message-title {
  height: 85px;
  text-align: center;
  span {
    font-size: 30px;
    color: #fff;
    border-bottom: solid #1d678c 4px;
    padding-bottom: 8px;
  }
}

.amap-wrapper {
  height: 500px;
}
</style>