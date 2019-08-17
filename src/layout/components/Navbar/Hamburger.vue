<template>
  <div @click="toggleClick">
    <svg-icon v-if="isActive" name="sidebar-close"/>
    <svg-icon v-else name="sidebar-open"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
@Component({
  name: "Hamburger"
})
export default class Hamburger extends Vue {
  @Prop({ default: false }) isActive!: boolean;

  @Emit('toggleClick')
  toggleClick() {
    //
  }
}
</script>


<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>