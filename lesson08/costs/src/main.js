import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ModalWin from './plugins/ModalWindow'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ModalWin)

new Vue({
    template: '<App/>',

    components: {
        App,
    },

    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
