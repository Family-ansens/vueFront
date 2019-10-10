<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 280px;">
    <el-menu
      :default-active="activeIndex"
      background-color="#081726"
      text-color="#a3b0b9"
      active-text-color="#ffffff"
      mode="vertical"
    >
      <el-menu-item
        class="menu-item-wrapper"
        v-for="(item) in items"
        :key="item.id"
        @click="onClickEven(item)"
      >{{ item.title }}</el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "GroupList"
})
export default class GroupList extends Vue {
  @Prop({ required: true }) items!: any[];
  @Prop({ required: true, default: "0" }) activeIndex!: string;
  @Prop({ required: true }) onClickEven!: (row: any) => void;

  created() {
    //
  }
}
</script>

<style lang="scss">
  .el-menu {
    border-right: none;
  }
</style>

<style lang="scss" scoped>
.menu-item-wrapper {
  border-bottom: solid #000000 1.5px;
  font-size: 16px;
  font-weight: 4px;
  letter-spacing: 1px;
  text-align: center;
}
</style>