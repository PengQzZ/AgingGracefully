<template>
	<div>
		<div class="cardbody">
			<van-card v-for="item,index in data" :key="index" :price="item.price" :title="item.title"
				:thumb="item.imgUrl" @click="goTo(item.id)">
				<template #desc>
					<span style="color: gray;">{{item.delivery}}</span><br />
					<span style="color: gray;">其他信息</span><br />
				</template>

				<template #num>
					<div @click.stop>
						<template v-if="cart.data[item.id] && cart.data[item.id].num">
							<van-stepper v-model="cart.data[item.id].num" theme="round" button-size="22" min=0 disable-input
								@change="onChange" default-value=0 />
						</template>
						<template v-else>
							<van-button round size="mini" type="primary" @click="addToCart(item.id,item.price)">加入购物车</van-button>
						</template>
					</div>
				</template>
			</van-card>
		</div>
		<van-action-bar>
			<van-action-bar-icon icon="shop-o" text="首页" :to="{'name':'home'}" />
			<van-action-bar-icon icon="cart-o" text="购物车" :to="{'name':'cart'}" :badge="cart.total" />
			<!-- <van-action-bar-button type="danger" text="立即下单" :to="{'name':'order_submit'}" /> -->
			<van-action-bar-button type="danger" :to="{'name':'order_submit'}">
				<template #default>
					<span>{{cart.sumPrice}} 去支付</span>
				</template>
			</van-action-bar-button>
		</van-action-bar>
	</div>
</template>

<script setup>
	import {toRefs,ref, onActivated} from 'vue';
	import router from '@/router'

	const props = defineProps({
		//子组件接收父组件传递过来的值
		data: Array,
	})

	// 解构数据
	var {data} = toRefs(props)

	// 将购物车保存到pinia, 根据商品Id保存购物信息
	// 从购物车中取出数据=> 商品信息、商品数量、总价
	import {storeToRefs} from 'pinia';
	import {useAppStore} from '@/store/app'
	const appStore = useAppStore();
	const {cart} = storeToRefs(appStore)

	onActivated(()=>{
		console.log("计算一次")
		onChange()
	})
	// 更新购物车
	function onChange() {
		console.log(cart.value)
		// 商品总数
		cart.value.total = 0
		// 商品总价
		cart.value.sumPrice = 0
		for (var key in cart.value.data) {
			cart.value.total = Number(cart.value.total) + Number(cart.value.data[key].num)
			cart.value.sumPrice = Number(cart.value.sumPrice) + Number(cart.value.data[key].price)*Number(cart.value.data[key].num)
		}
		console.log(cart.value.total, cart.value.sumPrice)
	}

	function addToCart(id, price){
		cart.value.data[id]={"num":1,"price":price}
		onChange()
	}
	
	// import router from '@/router'
	function goTo(id) {
		router.push({
			name: "commodity_detail",
			params: {
				"id": id,
			}
		})
	}
</script>

<style escoped>
  .cardbody{
    padding:0px 15px;
	margin-bottom: 50px;
  }
</style>