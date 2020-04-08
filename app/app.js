import Vue from "nativescript-vue"

import store from './store'
import pages from './manifest/pages'

import pluginsRegistry from './registry/plugins'
import layoutsRegistry from './registry/layouts' 
import componentsRegistry from './registry/components'
import helpersRegistry from './registry/helpers'

helpersRegistry.init(Vue)
pluginsRegistry.init(Vue)
layoutsRegistry.init(Vue)
componentsRegistry.init(Vue)

Vue.prototype.$store = store
Vue.prototype.$pages = pages 

import SideDrawer from '@/components/sections/SideDrawer'
import helpers from "./registry/helpers"

new Vue({
    computed: {
        appSettings () {
            return this.$store.state.appSettings
        },
        drawerSettings() {
            return this.$store.state.sideDrawer
        }
    },  
    template: `
        <RadSideDrawer 
            ref="$drawer" 
            :drawerLocation="drawerSettings.drawerLocation" 
            :gesturesEnabled="drawerSettings.gesturesEnabled"> 
            
            <StackLayout ~drawerContent>
                <SideDrawer ref="drawerContent" />
            </StackLayout>

            <Frame ~mainContent 
                ref="mainContent" 
                width="100%">
                <StartPage v-if="!appSettings.devMode" />
                <DevPage v-else="appSettings.devMode" />
            </Frame>
            
        </RadSideDrawer>
      
    `,

    components: {
        StartPage: pages[store.state.appSettings.startPage],
        DevPage:  pages[store.state.appSettings.devPage],
        SideDrawer,
    }
}).$start()
