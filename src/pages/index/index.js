import Vue from 'vue'
import index from './index.vue'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(index)
})
