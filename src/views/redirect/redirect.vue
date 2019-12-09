<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Redirect"
})
export default class extends Vue {
  created() {
    const { params, query } = this.$route;
    const { path } = params;

    if (typeof params.path === "undefined") {
      this.$router.replace({ path: "/", query });
    } else {
      this.$router.replace({ path: "/" + path, query });
    }
  }

  render() {
    // Avoid warning for missing template
  }
}
</script>
