import {
	defineStore
} from 'pinia'


// 第一个参数是应用程序中 store 的唯一 id
export const useAppStore = defineStore('app', {
	// 其它配置项
	state: () => {
		return {
			recentSearch: ['a', 'b'],
			cart: {
				data: {2:{"num":0,"price":0}},
				total: 0,
				sumPrice: 0
			},
			searchValue:"aaa"
		};
	},
	getters: {
		getRecentSearch: function() {
			var newArr = [...this.recentSearch].reverse()
			console.log('newarr',newArr)
			newArr = newArr.filter((item,index)=>{
			     return newArr.indexOf(item) === index;  
				 // 因为indexOf 只能查找到第一个  
			});
			// console.log(newArr) 
			return newArr.slice(0,10)
		}
	},
	actions: {
		saveRecentSearch: function(name) {
			if(this.recentSearch[this.recentSearch.length-1] != name){
				this.recentSearch.push(name)
			}
		}
	},
	// 使用该插件，开启数据缓存
	persist: {
		//这里存储默认使用的是session
		enabled: true,
		strategies: [{
			//key的名称
			key: 'app',
			//更改默认存储，我更改为localStorage
			storage: localStorage,
			// 可以选择哪些进入local存储，这样就不用全部都进去存储了
			// 默认是全部进去存储
			// paths: ['list']
		}]
	}
})
