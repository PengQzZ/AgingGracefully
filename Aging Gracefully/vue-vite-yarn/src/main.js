import {
	createApp
} from 'vue'
import '@/style.css'
import App from '@/App.vue'
import {
	nutUiComponents
} from '@/plugins/nutUI';

import ElementuiComponents from './plugins/ElementUI'


import {
	showToast
} from 'vant';
import 'vant/es/toast/style';
import router from '@/router'
import store from '@/store'





const app = createApp(App)

// nutUi按需加载
nutUiComponents.forEach((item) => {
	app.use(item);
});
app.use(router)
// 使用该插件
app.use(store)
app.mount('#app')

ElementuiComponents.forEach((itemo)=>{
    app.use(itemo)
})
// 配置路由守卫(Store这里暂时不可用)
import config from './config'
router.beforeEach((to, from, next) => {
	// 检查待跳转的路由的meta中的loginReqired属性值 => true => 需要检查权限
	// 如果携带了token认为已经登录（）2
	var needLogin = false
	// console.log('token:',localStorage.getItem("my_user"))
	// console.log('token:',JSON.parse(localStorage.getItem("my_user")).token)
	if(!localStorage.hasOwnProperty("my_user") || !JSON.parse(localStorage.getItem("my_user")).token){
		needLogin = true
	}
	if (to.matched.some(record => record.meta.loginRequired) && needLogin) {
		console.log("需要登录")
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		next({
			// path: '/login/',
			name: config.loginName,
			query: {
				redirect: to.fullPath
			}
		})
	} else {
		console.log("已经登录或不需要登录")
		// 已经登录跳转到redirect页面
		if(to.path == "/login" && localStorage.hasOwnProperty("my_user") && JSON.parse(localStorage.getItem("my_user")).token){
			// console.log("跳转到",to.fullPath.query.redirect)
			console.log("跳转到",to.query.redirect)
			next(to.query.redirect)
		}else{
			// 确保一定要调用 next()
			next()
		}
		
	}
})
