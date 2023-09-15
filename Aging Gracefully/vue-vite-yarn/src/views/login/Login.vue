<template>

	<van-nav-bar
	title="老来俏登入"
	left-text="返回"
	left-arrow
	@click-left="onClickLeft"
  />
	<!--背景图片-->
	<div id="building" class=".aaa">
	</div>
	  
	
  
	  <div class="upLoad-btn">
  
	  <div class="center">
		<van-image
		round
		width="90px"
		height="90px"
		src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
   
	  </div>
	
	  <van-form @submit="onSubmit">
		  <van-cell-group inset>
			<van-field
			  v-model="username"
			  name="username"
			  label="用户名"
			  placeholder="用户名"
			  :rules="[
				  { required: true, message: '请填写用户名' },
				  //validator是<van-field>标签的:rules属性 ，他可以自定义规则，也就是函数
				 
				  ]"
			/>
			<!-- // { validator: checkLength, message: '用户名的长度应该在6-18之间' }, -->
			<van-field
			  v-model="password"
			  type="password"
			  name="password"
			  label="输入密码"
			  placeholder="密码"
			  :rules="[{ required: true, message: '请填写密码' }]"
			/>
			
		  </van-cell-group>
		  <div style="margin: 16px;">
			<van-button round block type="primary" native-type="submit">
			  登入
			</van-button>
			
		  	</div>
			  <div class="element">
				<p> 没有账号，去<router-link to="/regist">注册</router-link></p>
				</div>
		  
		 
		 
  
  
		</van-form>
	  
  
	  </div>
	  
	
   </template>
   <script setup>
  
  const onClickLeft = () => history.back();
  
   //如何导入本地图片require('./image.png')
  
	  import {ref} from 'vue'
	  var username = ref("")
	  var password = ref("")
  
	 // import {login} from '@/api/user.js'//接口
	  import router from '@/router' //路由
	  import { showFailToast,showSuccessToast } from 'vant'; //组件
	  import 'vant/es/toast/style' //样式
	  import {useUsersStore} from '@/store/user'
	  const userStore = useUsersStore();
	  
	  const onSubmit = (values) => {
		
		console.log("login 这是登入")
	  userStore.login(values)
	  .then(res=>{
		//提示
		if (res.code != 0) {
						showFailToast({
							message: res.message,
							position: 'top',
						});
						console.log(`用户登录失败`);
	
			} else {
						showSuccessToast({
							message: "用户登录成功",
							position: 'top',
						});
					  if(router.currentRoute.value.query.redirect){
						  console.log(router.currentRoute.value.query.redirect)
						  router.push(router.currentRoute.value.query.redirect)
					  }else{
						  router.push({
							  name: 'home',
							  query: {
								  date: new Date().getTime()
							  }
						  })
						  console.log("登录成功")
					  }
						
					}
	  })
  
	  .catch(err=>{
		showFailToast({
			  message:err,
			  position:"top"
			})
	  })
	  }
   </script>
   <style scoped>
   .element {
	position: relative;
	z-index: 9999;
	
	float: right;
	margin-right: 25px;
  }
  .aaa{
	position: relative;
	z-index: 99;
  }

   #building{
	background:url("public/HH.png");
	width:100%;			
	height:100%;		
	position:fixed;
	background-size:100% 100%;}
   .ig{
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: -1;
	}
	/*垂直居中*/
	
  
	
	  
	 
	  
	
   </style>