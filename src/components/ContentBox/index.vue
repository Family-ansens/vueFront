<template>
  <div class="content-wrapper" v-html="content">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "ContentBox",
  components: {
  }
})
export default class ContentBox extends Vue {
  @Prop({ default: "", required: true }) content!: string;
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  color: #ffffff;
}
</style>