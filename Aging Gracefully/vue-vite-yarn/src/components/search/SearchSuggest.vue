<template>
	<div class="searchbody">
		<p>最近搜索</p>
		<!-- <nut-button type="default" size="small" v-for="item,index in appStore.getRecentSearch" :to="{name:'search', query:{'searchkey':item}}">{{item}}</nut-button> -->
		<!-- <van-button type="default" size="small" v-for="item,index in appStore.getRecentSearch" :to="{name:'search', query:{'searchkey':item}}">{{item}}</van-button> -->
		<van-button type="default" size="small" v-for="item,index in appStore.getRecentSearch" @click="goTo(item)">
			{{item}}</van-button>
		<br />
		<br />

		<p>热门搜索</p>
		<nut-button type="default" size="small">默认按钮</nut-button>
		<nut-button type="default" size="small">默认按钮</nut-button>
		<nut-button type="default" size="small">默认按钮</nut-button>
		<nut-button type="default" size="small">默认按钮</nut-button>
		<nut-button type="default" size="small">默认按钮</nut-button>
		<nut-button type="default" size="small">默认按钮</nut-button>
	</div>
</template>

<script setup>
	import {onActivated} from 'vue'
	import {useAppStore} from '@/store/app'
	const appStore = useAppStore();

	function getHotSearch() {
		console.log("从接口获取数据，自主完成！！")
	}

	// 每次激活都执行
	onActivated(() => {
		console.log('我是 keep-alive 存在的search suggest')
		getHotSearch()
	})

	// 声明emits
	const $emits = defineEmits(['gotoSugResult'])
	import router from '@/router'

	function goTo(searchkey) {
		$emits('gotoSugResult', searchkey)
	}
</script>

<style>
	.searchbody {
		padding: 0px 25px;
	}

	p {
		font-size: 30px;
	}
</style>
