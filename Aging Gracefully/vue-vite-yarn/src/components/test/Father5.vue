<template>
	<h1>Father:{{title}}</h1>
	<!-- 绑定change事件，当子组件的emit触发change时，会返回数据给onAction函数 -->
	<Child3 @change="getData"></Child3>
	
</template>

<script setup>
	import {ref} from 'vue'
    import Child3 from '_c/test/Child3.vue'
	
	var title = ref()
	const getData = function(data) {
	    title.value = data
	}
</script>