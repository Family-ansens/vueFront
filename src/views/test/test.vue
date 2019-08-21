<template>
  <div>
    <footer-hot-sale></footer-hot-sale>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterHotSale from "@/layout/components/FooterHotSale/index.vue";
@Component({
  components: {
    FooterHotSale,
  }
})
export default class Test extends Vue {
  
}
</script>

<style lang="scss">
  
</style>