<template>
	<p>动态组件2：父向子向值 </p>
	<p>
	<component :is="currentComp" :title="title"></component>
	</p>
	<van-button @click="changeComponet('Child1')">Child1</van-button>
	<van-button @click="changeComponet('Child2')">Child2</van-button>

</template>

<script setup>
	import {
		ref,markRaw
	} from "vue";
	import Child1 from "./Child1.vue";
	import Child2 from "./Child2.vue";
	const currentComp = ref(null);
	var title = ref("")

	const lookup = {
		Child1,
		Child2
	}
	function changeComponet(compname){
		currentComp.value = markRaw(lookup[compname])
	}
	setTimeout(() => {
		title.value = "hello world"
		console.log('title', title)
	}, 1000)
</script>

<style>
</style>
