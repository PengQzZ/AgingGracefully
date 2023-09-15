<template>

	<van-nav-bar
	title="诈骗资讯"
	left-text="返回"
	left-arrow
	@click-left="onClickLeft"
  />
  
  
	

	
	<div class="qwe">
			<roi></roi>
 	</div>
</template>

<script setup>

import roi  from "_c/test/F-Textarea/roi.vue";
  import texta  from "_c/test/F-Textarea/Textarea-1.vue";

  
	import {onMounted} from 'vue'
	// 声明emits

	const onClickLeft = () => history.back();
	const $emit = defineEmits(['change'])
	const changeGuidActive = () => {
		console.log("change", 1)
		$emit("change", 1)
	}
	
	
	onMounted(()=>{
		console.log("执行");
		changeGuidActive()
	}) 
</script>

<style>

.qwe{
	width: 55vh;
	height: 100vh;
  }
  
</style>