<template>
	<van-nav-bar :title="title" left-arrow @click-left="router.go(-1)" fixed/>
	<div class="top-frame bottom-frame">
		<router-view @change="changeTitle"></router-view>
		<!-- <div class="bottom">已经到结尾了...</div> -->
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	import router from '@/router'
	const title = ref("")
	
	function changeTitle(data){
		title.value=data
		console.log(title.value)
	}
</script>

<style>
</style>