import Vue from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
