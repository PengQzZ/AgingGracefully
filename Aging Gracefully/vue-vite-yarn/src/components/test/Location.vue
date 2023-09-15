<template>
	<h1>定位服务</h1>
	
</template>

<script setup>
	//import {Mounted} from "vue"
	// import axios from "axios"
	import md5 from 'js-md5'
	
	
	// https://apis.map.qq.com/ws/location/v1/ip?ip=111.206.145.41&key=KK4BZ-S3W3Q-AEF5X-4TCW3-E76XF-2GFLL&sig=8509e6f5ce33959c12365dbe5dc03553
	var url = "https://apis.map.qq.com/ws/location/v1/ip"
	var ip = "111.206.145.41"
	var key = "KK4BZ-S3W3Q-AEF5X-4TCW3-E76XF-2GFLL"
	var sk = "BFtgASddvisOqDYAtI84leSclOTJVQUl"
	var hashStr = `{url}?ip={ip}&key={key}`
	var fullUrl = `{hashStr}&sig=`+md5(hashStr)
	
	console.log(fullUrl)
	
	
	Mounted(()=>{
		// 调用接口获取数据
		// axios.get()
	})
</script>

<style>
</style>