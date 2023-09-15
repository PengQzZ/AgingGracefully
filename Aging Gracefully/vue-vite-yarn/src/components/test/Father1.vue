<template>
	父向子传值
	<Child1 :title="title"></Child1>
</template>

<script setup>
	import {ref, onMounted} from "vue"
	import Child1 from "_c/Child1.vue"
	var title = ref("")

	setTimeout(()=>{
		title.value="hello world"
		console.log('title',title)
	}, 1000)
</script>

<style>
</style>