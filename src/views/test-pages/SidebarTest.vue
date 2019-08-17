<template>
    <div>
        <span>2</span>
        <el-radio-group v-model="tab" @change="toggleSideBar">
          <el-radio-button :label="false">收起</el-radio-button>
          <el-radio-button :label="true">展开</el-radio-button>
        </el-radio-group>
    </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  //
})
export default class Page2 extends Vue {
  tab = true;

  protected toggleSideBar() {
    this.$services.app.toggleSidebar();
  }
}
</script>

<style>

</style>
