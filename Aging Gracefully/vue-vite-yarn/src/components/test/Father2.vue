<template>
	<h2>动态组件：父向子向值 </h2>
	<p>
		<component :is="currentComp" :title="title"></component>
	</p>
	<van-button @click="currentComp=Child1">Child1</van-button>
	<van-button @click="currentComp=Child2">Child2</van-button>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import Child1 from "./Child1.vue";
	import Child2 from "./Child2.vue";
	const currentComp = ref(null);
	var title = ref("")

	setTimeout(() => {
		title.value = "hello world"
		console.log('title', title)
	}, 1000)
</script>

<style>
</style>
