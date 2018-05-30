// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './common/js/store'

import ydui from 'vue-ydui'
import './common/js/model'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'
import './common/css/font_face.css'
import './common/css/train.css'

import 'vue-ydui/dist/ydui.flexible.js'
import qs from "qs"

import axios from 'axios'

Vue.prototype.$axios= axios;

Vue.prototype.HOST = "/api"


Vue.config.productionTip = false

Vue.prototype.isRegsiterState=0


axios.interceptors.request.use(function(config){
	if(config.method==="post"){
		config.params=qs.stringify(config.params);
	}

		return config;
});
// Vue.use(VueResource);

/* eslint-disable no-new */

Vue.use(ydui)

/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})



// router.push('/Tabbar')

// if(this.isRegsiterState==0){
// 	console.log("111111111");
// 	router.push('/regsiter');
// 	this.isRegsiterState=1;
// }else if(this.isRegsiterState==1){
// 	router.push('/login');
// 	this.isRegsiterState=2;
// }else if(this.isRegsiterState==2){
// 	router.push('/mine');
// }

router.beforeEach((to,from,next)=>{
	// window.localStorage.setItem('token','122123333');
	let token = window.localStorage.getItem('token')
	if(to.matched.some(record=>record.meta.requiresAuth)){
	// console.log(token);
		if(!token||token===""){
			next({
			path:'/regsiter',
			query:{redirect:to.fullpath}
			});
		}else{
			next();
		}

	}else{
		 window.localStorage.removeItem('token')
		next();
	}
})
