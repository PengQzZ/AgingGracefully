import {
	defineStore
} from 'pinia'
import {login,logout} from '@/api/user.js'


// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
	// 其它配置项
	// state => 要存储的数据
	state: () => {
		return {
			name: "",
			age: 0,
			avator: "",
			token: "token"
		}
	},
	// getters => 获取复杂的数据时, 定义了一些函数
	getters: {
		// number => 函数返回值(必加) , this表示的当前的存储
		// 给函数加参数时，stat会传递进去
		getAge: function() {
			return this.age + 100
		},
		getAge2: (state) => {
			return state.age + 100
		},
		getName: function() {
			return this.name
		}
	},
	// actions => 复杂的写数据操作
	actions: {
		saveName(name) {
			this.name = name
		},
		saveToken(token) {
			this.token = token
		},
		clearUserData(){
			this.name = ""
			this.token = ""
			this.avator = ""
		},
		login(values) {
			// 请求接口
			return new Promise((resolve) => {
			login(values)
				.then(res => {
					this.saveName(res.data.username);
					this.saveToken(res.data.token);
					resolve(res);
				})
			});
		},
		logout() {
			// 请求接口
			return new Promise((resolve) => {
			logout({"token":this.token})
				.then(res => {
					this.clearUserData();
					resolve(res);
				})
			});
		},
	},
	// 使用该插件，开启数据缓存
	persist: {
		//这里存储默认使用的是session
		enabled: true,
		strategies: [{
			//key：数据存储在浏览器中的key
			key: 'my_user',
			//更改默认存储，我更改为localStorage
			storage: localStorage,
		}]
	}
})
