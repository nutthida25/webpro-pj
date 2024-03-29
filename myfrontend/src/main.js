import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,  // add router here
  render: h => h(App),
}).$mount('#app')

