import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import authDb from "./firebase";
Vue.config.productionTip = false
let app = ''
authDb.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            vuetify,
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})