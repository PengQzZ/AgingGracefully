<template>
	<van-card num="2" price="2.00" desc="描述信息" title="商品标题"
		thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" v-for="n in hotCommodities">
		<template #tags>
			<van-tag plain type="danger">标签</van-tag>
			<van-tag plain type="danger">标签</van-tag>
		</template>
		<template #footer>
			<van-button size="mini">按钮</van-button>
			<van-button size="mini">按钮</van-button>
		</template>
	</van-card>
</template>

<script setup>
	import {ref, onMounted} from 'vue'
	import {
		getHotCommodities,
	} from '@/api/common.js'
	
	var hotCommodities = ref([])

	onMounted(() => {
		console.log("执行");
		getHotCommodities()
			.then(res => {
				console.log('hotCommodities', res)
				if (res.code != 0) {
					console.log(`获取数据失败，` + res.message);
				} else {
					hotCommodities.value = res.data
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