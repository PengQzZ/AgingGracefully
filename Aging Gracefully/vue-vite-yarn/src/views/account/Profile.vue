<template>
	<div class="body">
		<van-cell-group class="space">
			<van-cell is-link title="我的头像">
				<template #value>
					<van-uploader :after-read="afterRead" :max-size="500 * 1024" @oversize="onOversize">
						<van-image round width="35" height="35" :src="userStore.avator" />
					</van-uploader>
				</template>
			</van-cell>
			<van-cell title="真实姓名" :value="userStore.getName" :to="{'name':'changename'}" />
			<van-cell title="身份证号" value="4308***********" label="" />
			<van-cell title="推荐人" value="彭清" />
		</van-cell-group>

		<van-cell-group class="space">
			<van-cell title="账号安全" is-link />
			<van-cell title="隐私" is-link />
			<van-cell title="个人信息收集清单" is-link />
			<van-cell title="地址管理" is-link />
				</van-cell-group>

		<van-cell-group class="space">
			<van-cell title="注销" is-link />
			<van-cell title="版本更新" value="1.0.0.1" />
		</van-cell-group>
		<van-button class="bottom-button" @click="onLogout">安全退出</van-button>
	</div>
</template>

<script setup>
	import {
		useUsersStore
	} from '@/store/user'
	import router from '@/router'
	import {
		onMounted
	} from 'vue';
	import {
		showToast,showFailToast ,showSuccessToast 
	} from 'vant';
	import {
		uploadAvator
	} from '@/api/user.js'
	const userStore = useUsersStore();

	const onOversize = (file) => {
		console.log(file);
		showToast('文件大小不能超过 500kb');
	};

	const $emit = defineEmits(['change'])
	onMounted(() => {
		$emit("change", router.currentRoute.value.meta.title)
	})

	const afterRead = (file) => {
		// 此时可以自行将文件上传至服务器
		console.log(file, file.content);
		console.log(userStore.getName);
		uploadAvator(userStore.getName, {
				"data": file.content
			})
			.then(res => {
				console.log('uploadAvator', res)
				console.log("上传到服务器后，返回头像地址并修改userStore.avator")
				if (res.code != 0) {
					console.log(`获取数据失败，` + res.message);
				} else {
					userStore.avator = res.data.avator
					console.log("获取数据成功", userStore.avator)
				}
			})
			.catch(err => {
				console.log(err, `服务端错误！`)
			})
	};

	function onLogout() {
		userStore.logout()
		.then(res => {
			console.log("退出结果", res)
			if (res.code != 0) {
				showFailToast({
					message: res.message,
					position: 'top',
				});
				console.log(`用户退出失败`);

			} else {
				showSuccessToast({
					message: "用户退出成功",
					position: 'top',
				});
				router.push({
					name: 'home',
				})
			}
		})
		.catch(err => {
			showFailToast({
				message: "服务端错误！",
				position: 'top',
			});
			console.log(err, `服务端错误！`)
		})
	}
</script>

<style>
	.bottom-button {
		color: darkorange;
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}

	.body {
		background-color: whitesmoke;
		height: 650px;
	}

	.space {
		margin-bottom: 5px;
	}
</style>
