<template>
  <van-cell-group class="space">
	<van-field v-model="username" placeholder="用户名"  />
  </van-cell-group>
  <van-button type="danger" style="margin-top: 15px;" @click="save">保存</van-button>
</template>

<script setup>
	import {ref, onMounted} from 'vue';
	import router from '@/router'
	import {useUsersStore} from "@/store/user"
	
	const store = useUsersStore()
	const username = ref(store.name)
	function save(){
		console.log("save username")
	}
	
	const $emit = defineEmits(['change'])
	onMounted(()=>{
		console.log("执行", router.currentRoute.value);
		$emit("change", router.currentRoute.value.meta.title)
	}) 
</script>

<style>
</style>
