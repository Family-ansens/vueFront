<template>
  <div class="app-wrapper" :class="classObj">
    <!-- 左侧导航栏 -->
    <sidebar class="sidebar-container" />
    <!-- header -->
    <div class="main-container">
      <div >
        <navbar  />
        <!-- 此处放置el-tabs代码 -->
        <tags-view />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

