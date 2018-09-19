import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from'./router'
import {Button} from'element-ui'
import ElementUi from'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(Button)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
