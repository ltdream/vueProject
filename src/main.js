// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import router from './router'
import Mock from 'mockjs'
import 'mint-ui/lib/style.min.css'
Vue.config.productionTip = false

Vue.use(Mint, Mock, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
