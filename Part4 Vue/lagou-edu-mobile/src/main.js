import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入lib-flexible
import 'amfe-flexible'

// 方式三. 导入所有组件:引入Vant
import Vant from 'vant'
// vant全局样式
import 'vant/lib/index.css'
// 将Vant注册为Vue插件:Vue的一个实例
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
