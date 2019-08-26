<template>
  <div class="button">
    <router-link :to="url">
      <span>{{ $t('components.moreButton') }}></span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "MoreButton"
})
export default class MoreButton extends Vue {
  @Prop({ required: true }) private url!: string;
}
</script>

<style lang="scss" scoped>
.button {
  background-color: #0f3348;
  border-radius: 12px;
  width: 65px;
  text-align: center;
  line-height: 25px;
  span {
    color: #cdd0d3;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
  }
}
</style>