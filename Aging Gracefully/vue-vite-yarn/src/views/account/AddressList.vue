<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @add="addAddress"
    @edit="editAddress"
  />


</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';

	// 获取标题
	import router from '@/router'
	const $emit = defineEmits(['change'])
	$emit("change", router.currentRoute.value.meta.title)

	// 从API获取所有的收获地址数据和默认地址的id
	    const chosenAddressId = ref('3');
	    const list = [
	      {
	        id: '3',
	        name: '张三',
	        tel: '13000000000',
	        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
	        isDefault: true,
	      },
	      {
	        id: '4',
	        name: '李四',
	        tel: '1310000000',
	        address: '浙江省杭州市拱墅区莫干山路 50 号',
	      },
	    ];
	

	const editAddress = (contact, index) => {
		console.log('编辑' + contact.id);
		router.push({
			name: "address_edit",
			params: {
				id: contact.id
			}
		})
	}
	// const delAddress = (event, contact) => {
	// 	console.log('Click To Delete:'+contact.id);
	// }

	const addAddress = () => {
		console.log('新增');
		router.push({
			name: "address_add"
		})
	}
	
</script>

<style>
</style>
