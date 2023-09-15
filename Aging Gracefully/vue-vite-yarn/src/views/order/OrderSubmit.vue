<template>
	<van-contact-card type="add" @click="addressList" />
	<van-card v-for="item,index in carts.data" :key="index" :price="item.price" :title="item.title"
		:thumb="item.imgUrl">
		<template #desc>
			<span style="color: gray;">{{item.delivery}}</span><br />
			<span style="color: gray;">其他信息</span><br />
		</template>
		<template #num>
			<span>x{{cart.data[item.id].num}}</span>
		</template>
	</van-card>
	<van-submit-bar :price="sumPrice*100" button-text="去支付" @submit="onSubmit" />
</template>

<script setup>
	import {onMounted,reactive, computed} from "vue";
	import {storeToRefs} from 'pinia';
	import {useAppStore} from '@/store/app'
	const appStore = useAppStore();
	const {cart} = storeToRefs(appStore)
	const carts = reactive({
		data: {}
	})

	// 获取标题
	import router from '@/router'
	const $emit = defineEmits(['change'])
	$emit("change", router.currentRoute.value.meta.title)

	onMounted(() => {
		getCartData()
	})

	// 计算总价
	var sumPrice = computed(()=>{
		let sum = 0
		console.log(carts.data)
		for(let index in carts.data){
			let id = carts.data[index].id
			sum += cart.value.data[id].num*cart.value.data[id].price
		}
		return sum
	})
	
	
	function onSubmit(){
		console.log("调用支付宝/淘宝支付")
	}
	
	// 从接口获取商品详细信息并更新到pinia（略）
	function getCartData() {
		// 根据购物车记录的id获取商品信息
		// 这里是搜索结果
		const obj = [{
			id: 3,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: 388,
			vipPrice: 378,
			shopDesc: '自营',
			delivery: '厂商配送',
		}, {
			id: 2,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: 388,
			vipPrice: 378,
			shopDesc: '自营',
			delivery: '厂商配送',
		}, {
			id: 1,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: 388,
			vipPrice: 378,
			shopDesc: '自营',
			delivery: '厂商配送',
			shopName: '阳澄湖大闸蟹自营店>'
		}]
		carts.data = obj
	}

	// 跳转到添加地址页面
	function addressList(){
		console.log("添加新地址")
		router.push({
			name: "address_list"
		})
	}
</script>

<style>
</style>
