<template>
  <router-link to="/search">
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </router-link>
</template>

<script setup>
	import { ref } from 'vue';
	const value = ref('');
</script>

<style>
</style>