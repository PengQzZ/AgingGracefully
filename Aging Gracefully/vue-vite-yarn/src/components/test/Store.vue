<template>
	<h1>{{name}}</h1>
	<van-button @click="changename">修改</van-button>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
    import { useTestStore } from "@/store/test";
    const store = useTestStore();
	const { name } = storeToRefs(store)
	console.log('sotre', store)
	console.log('sotre', store.name)
	console.log('sotre', store.age, store.getAge)
	console.log('sotre', store.age, store.getAge2)

	function changename() {
		// 两种修改方法
		// store.name = "DEF"
		store.saveName("DEF")
	}
</script>

<style>
</style>