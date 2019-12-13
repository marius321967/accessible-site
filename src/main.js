import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWheelchair, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
import SpeakPlugin from './services/accessibility/SpeakPlugin'

library.add(faWheelchair)
library.add(faStar)
library.add(faStarEmpty)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(SpeakPlugin)

new Vue({
    router,
    store,
    render: function (h) { return h(App) }
}).$mount('#app')
