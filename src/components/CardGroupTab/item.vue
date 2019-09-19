<template>
  <div class="card-group-tab-item-wrapper" :class="active" @click="onClickEven(index)">
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "CardGroupTabItem"
})
export default class CardGroupTabItem extends Vue {
  @Prop({ required: true, default: false }) private isActive!: boolean;
  @Prop({ required: true }) private title!: string;
  @Prop({ required: true, default: 0 }) private index!: number;
  @Prop({ required: true }) private onClickEven!: (index: number) => void;

  get active() {
    return {
      active: this.isActive
    };
  }
}
</script>

<style lang="scss" scoped>
.card-group-tab-item-wrapper {
  font-size: 30px;
  color: #adadad;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  span {
    white-space:nowrap;
    margin: 5px 20px 5px 20px;
  }
}
.active {
  background-color: #006699;
  color: #ffffff;
}
</style>