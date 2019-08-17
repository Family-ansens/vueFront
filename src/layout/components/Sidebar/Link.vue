
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
  //
})
export default class Link extends Vue {
  @Prop({ required: true }) private to!: string;
      
    protected linkProps(url) {
      // 验证url 若url为外连接,该元素直接为a,若是路由连接,该元素为router-link
      if (this.$utils.validate.isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        };
      }
      return {
        is: 'router-link',
        to: url
      };
    }
}
</script>
