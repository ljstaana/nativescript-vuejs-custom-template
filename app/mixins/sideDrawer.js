export default {
    computed: {
        $drawer () {
            return this.$root.$refs.$drawer
        }
    }, 
    methods: {
        openDrawer() {
            this.$drawer.nativeView.showDrawer()
        },
        closeDrawer() {
            this.$drawer.nativeView.closeDrawer()
        }
    }
}