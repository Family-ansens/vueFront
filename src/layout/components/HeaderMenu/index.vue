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
      <el-menu-item class="menu-item" index="1" ><span>{{ $t('menuItem.home') }}</span></el-menu-item>
      <el-menu-item class="menu-item" index="2" ><span>{{ $t('menuItem.products') }}</span></el-menu-item>
      <el-menu-item class="menu-item" index="3" ><span>{{ $t('menuItem.cases') }}</span></el-menu-item>
      <el-menu-item class="menu-item" index="4" ><span>{{ $t('menuItem.company') }}</span></el-menu-item>
      <el-menu-item class="menu-item" index="5" ><span>{{ $t('menuItem.news') }}</span></el-menu-item>
      <el-menu-item class="menu-item" index="6" ><span>{{ $t('menuItem.contactUs') }}</span></el-menu-item>
    </el-menu>
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
    width: 16.6666%;
    text-align: center;
    span {
      letter-spacing: 1px;
      font-size: 25px;
    }
  }
</style>