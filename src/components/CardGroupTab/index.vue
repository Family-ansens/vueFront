<template>
  <div>
    <el-row>
      <el-col>
        <el-scrollbar>
        <card-group-tab-item
          class="card-group-tab-item-wrapper"
          :title="item.title"
          :index="index"
          v-for="(item, index) in dataList"
          :key="index"
          :onClickEven="itemOnClickEven"
          :isActive="index === cashActiveIndex"
        />
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CardGroupTabItem from "@/components/CardGroupTab/item.vue";
@Component({
  name: "CardGroupTab",
  components: {
    CardGroupTabItem
  }
})
export default class CardGroupTab extends Vue {
  @Prop({ required: true }) private dataList!: any[];
  @Prop({ default: 0 }) private activeIndex!: number;
  @Prop({}) private itemOnChangeEven!: (index: number) => void;
  
  private cashActiveIndex: number = this.activeIndex;

  private itemOnClickEven(index: number) {
    this.cashActiveIndex = index;
    this.itemOnChangeEven(index);
  }
}
</script>

<style lang="scss" scoped>
.card-group-tab-item-wrapper {
  display: inline;
}
</style>