<template>
	<div class="cardbody">
		<van-row >
			<template v-for="item,index in carts.data" :key="index">
				<van-col span="2">
					<van-checkbox v-model="cart.data[item.id].checked" class="center" @click="checkedItem"></van-checkbox>
				</van-col>
				<van-col span="22">
					<van-card :price="item.price" :title="item.title" :thumb="item.imgUrl">
						<template #desc>
							<span style="color: gray;">{{item.delivery}}</span><br />
							<span style="color: gray;">其他信息</span><br />
						</template>
						<template #num>
							<van-stepper v-model="cart.data[item.id].num" theme="round" button-size="22" min=1
								disable-input @change="onChange" />
						</template>
					</van-card>
				</van-col>
			</template>
		</van-row>

		<van-submit-bar :price="cart.sumPrice" button-text="去支付" @submit="onSubmit" >
		  <van-checkbox v-model="checkedAll" @click="chooseAll">全选</van-checkbox>
		  <template #tip>
		    提醒信息
		  </template>
		</van-submit-bar>
	</div>
</template>

<script setup>
	import {
		onMounted,
		reactive,
		ref
	} from "vue";
	import {
		storeToRefs
	} from 'pinia';
	import {
		useAppStore
	} from '@/store/app'
	import router from '@/router'
	const appStore = useAppStore();
	const {
		cart
	} = storeToRefs(appStore)
	const carts = reactive({
		data: {}
	})
	
	var checkedAll = ref(false)

const $emit = defineEmits(['change'])
	onMounted(() => {
		getCartData()
		checkedItem()
		$emit("change", router.currentRoute.value.meta.title)
	})

	
	function onSubmit(){
		console.log("跳转到确认订单页面")
		router.push(
			{'name':'order_submit'}
		)
	}

	function getCartData() {
		// 根据购物车记录的id获取商品信息
		// 这里是搜索结果
		const obj = [{
			id: 1,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: '388',
			vipPrice: '378',
			shopDesc: '自营',
			delivery: '厂商配送',
		}, {
			id: 2,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: '388',
			vipPrice: '378',
			shopDesc: '自营',
			delivery: '厂商配送',
		}, {
			id: 3,
			imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
			title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
			price: '388',
			vipPrice: '378',
			shopDesc: '自营',
			delivery: '厂商配送',
			shopName: '阳澄湖大闸蟹自营店>'
		}]
		carts.data = obj
	}

	// 更新购物车
	function onChange() {
		console.log(cart.value)
		// 商品总数
		cart.value.total = 0
		// 商品总价
		cart.value.sumPrice = 0
		for (var key in cart.value.data) {
			console.log(key)
			if (cart.value.data[key].checked == true) {
				cart.value.total = Number(cart.value.total) + Number(cart.value.data[key].num)
				cart.value.sumPrice = Number(cart.value.sumPrice) + Number(cart.value.data[key].price) * Number(cart.value
					.data[key].num)
			}
		}
		console.log(cart.value.total, cart.value.sumPrice)
	}
	
	function chooseAll(){
		console.log("选择/取消所有商品")
		for (var key in cart.value.data) {
			cart.value.data[key].checked = checkedAll.value
		}
		onChange()
	}
	
	function checkedItem(){
		console.log("选择/取消指定商品")
		// check_true的数据与总数一样多，则设置为全选，否则设置为非全选
		let result = Object.keys(cart.value.data).filter((id)=>{
			return cart.value.data[id].checked
		})
		console.log(result, cart.value.data)
		if(result.length ==  Object.keys(cart.value.data).length){
			checkedAll.value = true
		}else{
			checkedAll.value = false
		}
		onChange()
	}
</script>

<style scoped>
	.center {
		position: relative;
		top: 50%;
	}

	.cardbody {
		padding: 0px 15px;
		margin-bottom: 50px;
	}

	.fix-bottom {
		width: 100%;
		position: fixed;
		bottom: 0px;
	}

	.fix-bottom .right {
		float: right;
	}
</style>
