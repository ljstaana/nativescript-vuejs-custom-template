import Vue from 'nativescript-vue'
import Vuex from 'vuex' 
import localStorage from 'nativescript-localstorage'

const NSVuexPersistent = store => {
    // Init hook.
    let storageStr = localStorage.getItem('ns-vuex-persistent');
    if (storageStr) {
        store.replaceState(JSON.parse(storageStr))
    }
    store.subscribe((mutation, state) => {
        // Suscribe hook.
        localStorage.setItem('ns-vuex-persistent', JSON.stringify(state));
    })
};

Vue.use(Vuex) 

import modules from './modules_list'

let store = new Vuex.Store({
    modules,
    plugins: [NSVuexPersistent]
})

export default store;