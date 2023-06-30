import Vue from 'vue'
import App from './App.vue'
import LyUploaderVue from './package/index'
import router from '@/router'

Vue.use(LyUploaderVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
