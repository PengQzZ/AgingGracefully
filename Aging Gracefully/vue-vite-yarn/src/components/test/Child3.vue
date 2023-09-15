<template>
	<h2>我是Child3</h2>
	<input v-model="username"/>
	<button @click="onChange()">点击我</button>
</template>

<script setup>
	import {ref} from 'vue'
	var username = ref("")
	
	// 当点击按钮时，触发onChange函数，onChange函数触发父组件的change事件，并将数据传递过去
	// $emit(自定义事件名称，数据)
	const onChange = function() {
		$emit('change', username.value)
	}

	// 声明emits
	const $emit = defineEmits(['change'])
</script>