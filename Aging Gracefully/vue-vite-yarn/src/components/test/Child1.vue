<template>
	<div>
		Child 1 - 父向子传值-{{title}}
	</div>
</template>

<script setup>
	import {
		watch,
		toRefs
	} from "vue"
	// 声明props
	const props = defineProps({
		title: {
			type: String,
			default: ''
		}
	})
	var {title} = toRefs(props)
	
	// 用法：watch("数据名"，处理函数，配置对象（可省）)
	watch(title, (newvalue, oldvalue) => {
		console.log("a原本为" + oldvalue + ",被修改为" + newvalue);
	}, {
		immediate: true   //初始加载页面就运行一次
	}) 
</script>

<style>
</style>
