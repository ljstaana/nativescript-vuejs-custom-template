import BlankLayout from '@/components/layouts/BlankLayout'
import TopbarLayout from '@/components/layouts/TopbarLayout'

export default {
    init (Vue) {
        Vue.component("BlankLayout", BlankLayout)
        Vue.component("TopbarLayout", TopbarLayout)
    }
}