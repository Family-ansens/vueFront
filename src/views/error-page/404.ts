import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        //
    }
})

export default class Page404 extends Vue {
    protected async created() {
        // 
    }

    protected activated() {
        //
    }

    protected mounted() {
        //
    }

    protected back() {
        this.$router.go(-1);
    }
}