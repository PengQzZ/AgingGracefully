<template>

	<van-nav-bar
	title="账号管理"
	left-text="返回"
	left-arrow
	@click-left="onClickLeft"
  />
	<div class="content">
		<van-row>
			<van-col span="8">
				<van-image round width="4rem" height="4rem" :src="userStore.avator" />
			</van-col>
			<van-col span="16">
				<div class="member-detail">
					<p class="nickname">{{userStore.username}}</p>
					<p class="info">{{userStore.intro}}</p>
				</div>
			</van-col>
		</van-row>
		


		<van-cell-group title="基本资料">
			<van-cell title="个人资料" is-link to="/uc/profile"></van-cell>
			<van-cell title="站点手册" is-link to="/uc/address"></van-cell>
			<van-cell title="关于" is-link to="/demo"></van-cell>
		</van-cell-group>

		
		<div class="center">
			<van-button icon="plus" type="primary" loading-size="300px" to="/login" >登入</van-button>
			</div>
			 
	</div>


</template>


<script setup>
	import {
		reactive,
		onMounted
	} from 'vue';
	import {
		getUserInfo
	} from '@/api/user.js'
	import {
		useUsersStore
	} from '@/store/user'
	const userStore = useUsersStore();
	const onClickLeft = () => history.back();
	const badge_numbers = reactive({
		"wait_pay": 0,
		"wait_send": 4,
		"wait_receive": 5
	})

	// 声明emits
	const $emit = defineEmits(['change'])
	const changeGuidActive = () => {
		console.log("change", 3)
		$emit("change", 3)
	}


	onMounted(() => {
		console.log("执行");
		getData()
		changeGuidActive()
	})

	const getData = () => {
		// 获取用户id或用户名
		const username = userStore.getName
		if (username && userStore.token) {
			getUserInfo(username)
				.then(res => {
					console.log('getUserInfo', res)
					if (res.code != 0) {
						console.log(`获取数据失败，` + res.message);
					} else {
						userStore.username = res.data.username
			 		userStore.intro = res.data.intro
						userStore.avator = res.data.avator
						console.log("获取数据成功")
					}
				})
				.catch(err => {
					console.log(err, `服务端错误！`)
				})
		}else{
			console.log("user is not login")
		}
	};
</script>

<style>
	.content {
		background-color: #f7f8fa;
		height: 500px;
		padding: 15px 10px;
	}

	.member-detail {
		font-size: 14px;
	}
</style>
