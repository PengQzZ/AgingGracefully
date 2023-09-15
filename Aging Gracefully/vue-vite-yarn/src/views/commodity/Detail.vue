<template>
	<nut-video :source="source" :options="options" @play="play" @pause="pause" @playend="playend">
	</nut-video>
	<p>商品分类</p>
	<!-- <nut-cell :title="`基本用法`" desc="" @click="base = true"></nut-cell> -->
	<nut-sku v-model:visible="base" :sku="data.sku" :goods="data.goods" @selectSku="selectSku" @clickBtnOperate="clickBtnOperate">
		    <template #sku-operate>
		      <!-- <div class="sku-operate-box">
		        <nut-button class="sku-operate-box-dis" type="warning">查看相似商品</nut-button>
		        <nut-button class="sku-operate-box-dis" type="info">到货通知</nut-button>
		      </div> -->
		    </template>
		
	</nut-sku>
	<p>商品介绍</p>
	<van-action-bar>
		<van-action-bar-icon icon="cart-o" text="购物车" :to="{'name':'cart'}" />
		<van-action-bar-button type="danger" text="加入购物车" @click="onClickCart" />
		<van-action-bar-button type="danger" text="立即购买" :to="{'name':'order_submit'}" />
	</van-action-bar>

</template>

<script setup>
	import {
		ref,
		reactive,
		onMounted,
		toRefs
	} from 'vue';

	const source = reactive({
		src: "https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D",
		type: "video/mp4",
	})
	const options = reactive({
		controls: true,
	})

	const play = (elm) => console.log('play', elm);
	const pause = (elm) => console.log('pause', elm);
	const playend = (elm) => console.log('playend', elm);



	const base = ref(true);
	const data = reactive({
		sku: [],
		goods: {}
	});

	onMounted(() => {
		fetch('https://storage.360buyimg.com/nutui/3x/data.js')
			.then((response) => response.json())
			.then((res) => {
				console.log('res', res)
				const {
					Sku,
					Goods,
					imagePathMap
				} = res;
				data.sku = Sku;
				data.goods = Goods;
			}) //执行结果是 resolve就调用then方法
			.catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
	});




	// 切换规格类目
	const selectSku = (ss) => {
		const {
			sku,
			skuIndex,
			parentSku,
			parentIndex
		} = ss;
		if (sku.disable) return false;
		data.sku[parentIndex].list.forEach((s) => {
		 s.active = s.id == sku.id;
		});
		data.goods = {
			skuId: sku.id,
			price: '4599.00',
			imagePath: 'http://img14.360buyimg.com/n4/jfs/t1/215845/12/3788/221990/618a5c4dEc71cb4c7/7bd6eb8d17830991.jpg'
		};
	};
	// 底部操作按钮触发
	const clickBtnOperate = (op) => {
		console.log('点击了操作按钮', op)
	}
	// 关闭商品规格弹框
	const close = () => {}
	
	const onClickCart = ()=>{}

</script>

<style>

</style>
