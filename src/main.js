import Vue from 'vue';
import '@/assets/scss/main.scss';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
