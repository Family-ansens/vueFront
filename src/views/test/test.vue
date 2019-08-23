<template>
  <div>
    <footer-contact></footer-contact>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FooterHotSale from "@/layout/components/FooterHotSale/index.vue";
import FooterContact from "@/layout/components/FooterContact/index.vue";
@Component({
  components: {
    FooterHotSale,
    FooterContact,
  }
})
export default class Test extends Vue {
  
}
</script>

<style lang="scss">
  
</style>