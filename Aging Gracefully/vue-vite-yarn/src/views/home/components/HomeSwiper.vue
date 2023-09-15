<template>
	<nut-swiper :init-page="page" :pagination-visible="false" pagination-color="#426543" auto-play="30006" >
		<nut-swiper-item v-for="item in swiperData" :key="item">
			<img :src="item" alt="" />
		</nut-swiper-item>
	</nut-swiper>
	
	
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue'
	import {
		getHomeSwiper,
	} from '@/api/common.js'

	var swiperData = ref([
		'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
		'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
		'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
		'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
	])
	const requestData = {
  	"id":1
  	
	};


	onMounted(() => {
		//console.log("执行");
		getHomeSwiper(requestData)
			.then(res => {
				//console.log('getHomeSwiper', res)
				if (res.code != 0) {
					console.log(`获取数据失败，` + res.message);
				} else {
					swiperData.value = res.data;
					//console.log("获取数据成功",swiperData.value)
					//console.log("获取数据成功",swiperData.value)
				}
			})
			.catch(err => {
				console.log(err, `服务端错误！`)
			})
	})
</script>

<style>

	.nut-swiper-item img {
		width: 100vmax;
		height: 190px;
		
	}
</style>
