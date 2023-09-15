<template>
	<van-form @submit="onSubmit">
		<van-field v-model="username" name="username" label="用户名" placeholder="用户名"/>
		<van-button round block type="primary" native-type="submit">提交</van-button>
	</van-form>
	LocalStorage:{{usernameUpper}}
</template>

<script setup>
	import {ref} from 'vue';
	const username = ref("")
	const usernameUpper = localStorage.getItem('userName');
	function onSubmit(){
		localStorage.setItem('userName',username.value);
		console.log(localStorage.getItem('userName'))
	}

</script>