export default {
    init(Vue) {
        /** Helper function for redirecting between pages */
        Vue.prototype.$goto = (page) => {
            let $pages = this.pages; 
            this.$navigateTo($pages[page]);
        }
    }
}