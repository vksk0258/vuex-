import Vue from 'vue'
import App from './App.vue'
import store from './store' //인덱스면 생략가능

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
