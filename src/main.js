import Vue from 'vue'
import App from './App.vue'
/* 注册全局三级联动 */
import typeNav from '@/components/typeNav'
import router from '@/router'
/* 仓库 */
import store from './store'

Vue.config.productionTip = false


Vue.component(typeNav.name,typeNav);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
