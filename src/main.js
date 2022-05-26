import Vue from 'vue'
import App from './App.vue'
/* 注册全局三级联动 */
import typeNav from '@/components/typeNav'
import router from '@/router'
/* 注册全局轮播 */
import Carousel from '@/components/carousel'
/* 仓库 */
import store from './store'
import pagination from '@/components/pagination'
/* 引入mock模拟数据 */
import '@/mock/mockServe'
import 'swiper/css/swiper.css'


Vue.config.productionTip = false



Vue.component(typeNav.name,typeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(pagination.name,pagination)
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
      Vue.prototype.$bus = this;
  },
}).$mount('#app')
