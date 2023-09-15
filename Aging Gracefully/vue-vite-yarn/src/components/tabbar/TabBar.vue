<template>
	<router-view @change="changeActive"></router-view>
	<van-tabbar v-model="active">
	  <van-tabbar-item icon="home-o" :to="{'name':'home'}">首页</van-tabbar-item>
	  <van-tabbar-item icon="search" :to="{'name':'about'}" >资讯</van-tabbar-item>
	  <van-tabbar-item icon="friends-o" to="/P">热门活动</van-tabbar-item>
	  <van-tabbar-item icon="setting-o" to="/UserCenter">我的</van-tabbar-item>
	</van-tabbar>
</template>
<script setup>
	import {ref} from 'vue'
	var active = ref(0)
	function changeActive(data){
		active.value=data
		console.log(active.value)
	}
	


		
</script>