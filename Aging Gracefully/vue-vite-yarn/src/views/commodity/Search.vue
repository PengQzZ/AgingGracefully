<template>
	<nut-searchbar v-model="appStore.searchValue" @change="onlyToSuggest">
		<template v-slot:rightout>
			<nut-button type="primary" size="small" @click="switchChild">搜 索</nut-button>
		</template>
	</nut-searchbar>
	<keep-alive>
		<component :is="currentComponent" :data="data.data" @gotoSugResult="gotoSugResult"></component>
	</keep-alive>
</template>

<script setup>
	import {
		ref,
		onMounted,
		markRaw
	} from "vue";
	import router from '@/router'
	import searchSuggest from '_c/search/searchSuggest.vue'
	import searchResult from '_c/search/searchResult.vue'
	// const searchValue = ref(router.currentRoute.value.query.searchkey)

	import {
		useAppStore
	} from '@/store/app'
	const appStore = useAppStore();

	// 切换搜索建议/搜索结果 
	const lookup = {
		searchResult,
		searchSuggest
	}
	const currentComponent = ref(null)

	onMounted(() => {
		switchChild(appStore.searchValue)
	})

	function switchChild(searchkey) {
		console.log("save", appStore.searchValue)
		// 根据是否有关键字决定展示不同内容
		if (!searchkey) {
			changeToSuggest()
		} else {
			// 保存最近搜索关键字
			appStore.saveRecentSearch(appStore.searchValue)
			changeToResult()
		}
	}

	function changeToSuggest() {
		console.log("sugg")
		currentComponent.value = markRaw(lookup['searchSuggest'])
	}


	// 搜索结果
	import {
		reactive
	} from "vue";
	import {
		getCommodities
	} from "@/api/commodity.js";
	const data = reactive({
		"data": []
	})

	function changeToResult() {
		console.log("result", appStore.searchValue)
		// 从api获取数据进行搜索 => 把结果传递给子组件searchResult
		getCommodities({"searchkey":appStore.searchValue})
			.then(res => {
				console.log("res", res)
				if (res.code == 0) {
					data.data = res.data
				}
			})
			.catch(err => {
				console.log(err)
			})
		currentComponent.value = markRaw(lookup["searchResult"])
	}

	// 当searchValue为空的，触发切换到搜索建议
	function onlyToSuggest() {
		if (!appStore.searchValue) {
			changeToSuggest()
		}
	}



	// 子组件触发切换组件，用于跳转到指定的搜索结果页
	function gotoSugResult(data){
		console.log("切换组件")
		appStore.searchValue = data
		switchChild(data)
	}

</script>
