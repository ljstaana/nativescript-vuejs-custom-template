import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import RadListView from 'nativescript-ui-listview/vue'

export default {
    init (Vue) {
        Vue.use(RadSideDrawer)
        Vue.use(RadListView)
    }
}