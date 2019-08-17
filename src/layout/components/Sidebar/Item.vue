<script lang='tsx'>
/**
 * to fix: 因为需要使用functional关键字,导致无法使用 class ClassName extends vue,可以说是不知道怎么改
 */
import { Vue, Component } from 'vue-property-decorator';
export default Vue.extend({
  name: 'Item',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = Array<any>();

    if (icon) {
      vnodes.push(<svg-icon name={icon}/>);
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span> );
    }
    return vnodes;
  }
});
</script>
