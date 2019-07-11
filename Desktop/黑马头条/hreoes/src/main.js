import Vue from 'vue'
import App from './App.vue'

import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.use(elementui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
