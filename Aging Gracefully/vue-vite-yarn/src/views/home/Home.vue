<template>
	<van-nav-bar
	  title="老来俏首页"
	  left-text="返回"
	  left-arrow
	  @click-left="onClickLeft"
	/>
	<Sp></Sp>
	<el-scrollbar >
		<div v-for="item in 1" :key="item" class="scrollbar-demo-item">
			<HomeSwiper></HomeSwiper>
			<Scrill></Scrill>
			 </div>
	</el-scrollbar>

</template>
<script setup>
const onClickLeft = () => history.back();
	//import HomeHeader from "./components/HomeHeader.vue";
	import HomeSwiper from "./components/HomeSwiper.vue";
	//import HomeMenu from "./components/HomeMenu.vue";
	//import HomeHotCommodities from "./components/HomeHotCommodities.vue";
	import Scrill from "./components/Scroll.vue"
	import Sp from "./components/Sp.vue"
	// import {BackTop} from '@nutui/nutui';
	// 声明emits
	const $emits = defineEmits(['change'])
	const changeGuidActive = () => {
		console.log("change", 0)
		$emits("change", 0)
	}
</script>
<style>
.scrollbar-demo-item{
	height: 100%;
}
</style>
