import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFormulate from '@braid/vue-formulate'

Vue.use(Vuelidate)
Vue.use(VueFormulate)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
