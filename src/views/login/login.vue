<template>
  <div class="login-container">
    <el-row :gutter="24">
      <el-col :offset="8" :span="8">
        <div class="login-form">
          <el-card>
            <div slot="header" class="clearfix">
              <span>登录</span>
            </div>
            <el-form label-position="left" label-width="80px" :model="LoginData" :rules="dataRule">
              <el-form-item label="账号" prop="userName">
                <el-input type="text" v-model="LoginData.userName"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="userPassword">
                <el-input
                  show-password
                  @keyup.enter.native="login"
                  v-model="LoginData.userPassword"
                ></el-input>
              </el-form-item>
            </el-form>
            <div style="text-align: center;">
              <el-button @click="login">登录</el-button>
              <el-button @click="test">注册</el-button>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss">
@import "./login.scss";
</style>

