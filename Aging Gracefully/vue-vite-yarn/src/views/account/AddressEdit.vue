<template>
	<van-address-edit
	  :area-list="areaList"
	  :address-info="AddressEditInfo"
	  show-delete
	  show-set-default
	  show-search-result
	  :search-result="searchResult"
	  :area-columns-placeholder="['请选择', '请选择', '请选择']"
	  @save="onSave"
	  @delete="onDelete"
	  @change-detail="onChangeDetail"
	/>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import { areaList } from '@vant/area-data';
	
	// 获取标题
	import router from '@/router'
	const $emit = defineEmits(['change'])
	$emit("change", router.currentRoute.value.meta.title)


	// 默认为添加新地址
	const AddressEditInfo = ref({});

	// 如果是有id，则表示修改，获取指定id地址的数据
	if (router.currentRoute.value.params.id) {
		AddressEditInfo.value = {
			id: router.currentRoute.value.params.id,
			tel: '张三',
			name: '张三',
		}
	}

	const searchResult = ref([]);

    const onSave = (contact) => {
		// 如果是新增地址，可以调用创建接口
		// 如果是修改地址，可以调用修改接口
		console.log("调用接口保存数据，并修改AddressEditInfo"+contact.id)
	}
	
    const onDelete = (contact) => {
		// 如果是新增地址，可以直接清空数据并返回
		// 如果是修改地址，可以调用接口删除并返回
		console.log("调用接口删除数据"+contact.id)
	}
	
	// 这里可以调用三方API接口实现搜索
    const onChangeDetail = (val) => {
      if (val) {
        searchResult.value = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        searchResult.value = [];
      }
    };
</script>

<style>
</style>
