import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import axios from 'axios'
import 'lib-flexible/flexible'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// expro()

console.log('测试',process.env.VUE_APP_URL)

Vue.prototype.$api = process.env.VUE_APP_URL

// Vue.use(ElementUI)

// Vue.prototype.$test = 'https://dev.api.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
