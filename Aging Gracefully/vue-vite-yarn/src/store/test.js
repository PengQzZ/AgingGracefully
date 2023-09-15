import { defineStore } from 'pinia'


// 第一个参数是应用程序中 store 的唯一 id
export const useTestStore = defineStore('tests', {
  // 其它配置项
  // state => 要存储的数据
  	state:() => {
  		return {
  			name: "",
  			age: 0
  		}
  	},
  	// getters => 获取复杂的数据时, 定义了一些函数
  	getters: {
  		// this：在普通函数中表示的当前的存储
  		getAge: function(){
  			return this.age+100
  		},
  		// state：pinia会将stat自动传递进去（箭头函数中利用state获取当前存储数据）
  		getAge2: (state) => {
  		      return state.age + 100
  		}
  	},
  	// actions => 复杂的写数据操作
  	actions: {
  		saveName(name){
  			this.name = name
  		}
  	},
	// 使用该插件，开启数据缓存
	persist: {
	//这里存储默认使用的是session
	  enabled: true,
	  strategies: [
	    {
	      //key：数据存储在浏览器中的key
	      key: 'my_test',
	      //更改默认存储，我更改为localStorage
	      storage: localStorage,
	    }
	  ]
	}
})