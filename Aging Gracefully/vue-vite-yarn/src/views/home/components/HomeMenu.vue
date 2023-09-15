<template>
	<van-grid :column-num="4">
		<van-grid-item v-for="item in menuData" :key="item" icon="photo-o" :text="item.title">
			<template #icon>
				<van-image :src="item.image" />
			</template>
		</van-grid-item>
	</van-grid>
</template>

<script setup>
	import {ref, onMounted} from 'vue'
	import {
		getHomeMenu,
	} from '@/api/common.js'
	
	var menuData = ref([])

	onMounted(() => {
		console.log("执行");
		getHomeMenu()
			.then(res => {
				console.log('getHomeMenu', res)
				if (res.code != 0) {
					console.log(`获取数据失败，` + res.message);
				} else {
					menuData.value = res.data
					console.log("获取数据成功")
				}
			})
			.catch(err => {
				console.log(err, `服务端错误！`)
			})
	})

</script>

<style>
</style>