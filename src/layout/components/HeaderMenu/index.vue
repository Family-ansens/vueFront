<template>
  <div>
    <!-- el-menu的低外框线死活去不掉，唯有用style来搞它 -->
    <el-menu
      style="border-bottom: none;" 
      mode="horizontal"
      background-color="#000"
      text-color="#fff"
      active-text-color="#006699"
    >
      <el-menu-item class="menu-item" index="1" ><span>首页</span></el-menu-item>
      <el-menu-item class="menu-item" index="2" ><span>产品展示</span></el-menu-item>
      <el-menu-item class="menu-item" index="3" ><span>案例展示</span></el-menu-item>
      <el-menu-item class="menu-item" index="4" ><span>公司介绍</span></el-menu-item>
      <el-menu-item class="menu-item" index="5" ><span>新闻中心</span></el-menu-item>
      <el-menu-item class="menu-item" index="6" ><span>联系我们</span></el-menu-item>
    </el-menu>
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 style="color: #fff; text-align: center;">{{item}}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
  name: 'HeaderMenu'
})
export default class HeaderMenu extends Vue {
  
}
</script>

<style lang="scss">
  .menu-item {
    width: 16.66%;
    text-align: center;
    span {
      font-size: 25px;
    }
  }
</style>