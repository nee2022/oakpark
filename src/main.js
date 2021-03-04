import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import axios from 'axios'
import  'lib-flexible';

Vue.use(Vant);
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

axios.defaults.baseURL = 'http://www.api.sqjtjt.com'
// router.beforeEach((to, from, next) => {
// 	// console.log(to);
// 	const token = localStorage.getItem('token')
// 	if (token) {
// 		next()
// 	} else {
// 		if (to.path === '/') {
// 			next()
// 		} else {
// 			next('/')
// 		}
// 	}
// })