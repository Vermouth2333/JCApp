import Vue from 'vue'
import App from './App.vue'
import store from "store"
import router from "router"
import "common/components/index.js"
//vue 手指事件
import VueTouch from "vue-touch";
Vue.config.productionTip = false
//使用vue手指事件插件
Vue.use(VueTouch,{name:'v-touch'})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
