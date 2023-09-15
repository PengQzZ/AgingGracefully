<template>

	<van-nav-bar
	title="老来俏注册"
	left-text="返回"
	left-arrow
	@click-left="onClickLeft"
  />
  <section>
  <div class="form-box">
  
	  <van-form @submit="onSubmit" >
		
		
		  <van-cell-group inset>
			
			
			<van-field
			
			  v-model="username"
			  name="username"
			  label="用户名"
			  placeholder="用户名"
			  :rules="[
				  { required: true, message: '请填写用户名' },
				  //validator是<van-field>标签的:rules属性 ，他可以自定义规则，也就是函数
				  //{ validator: checkUserRepete, message: '用户名已经存在' },
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
			<van-field
			  v-model="repassword"
			  type="password"
			  name="re_password"
			  label="再次输入"
			  placeholder="密码"
			  
			  :rules="[
				  { required: true, message: '请填写密码' },
				  //validator自定义验证器  checkRePassword是自己写的函数
				  {validator : checkRePassword,message:'两次密码输入不一致'}
			  ]"
			/>
		  </van-cell-group>
		  <div style="margin: 16px;" >
			<van-button round block type="primary" native-type="submit">
			  提交
			</van-button>
		  </div>
  
		  <div class="right side-margin">
			<p> 已有账号，去<router-link to="/login">登入</router-link></p>
		  </div>
		</van-form>
	
  </div>
	</section>
  </template>
  
  <script setup>
	  const onClickLeft = () => history.back();
  
	  import {ref} from 'vue'
	  const username = ref('');
	  const password = ref('');
	  const repassword = ref('');
	  import {createUser} from '@/api/user.js'
  
	  import {showFailToast,showSuccessToast} from 'vant'
		import 'vant/es/toast/style';
		import router from '@/router'
	  
	  const checkRePassword = (val) =>{
		  console.log(password)
		  if(password.value == repassword.value){
			  return true
		  }else{
			 //return false
			 return '两次密码不一致'
		  }
	  };
	  const onSubmit = (values) => {
		//调用注册函数 1.编写调用后端接口的函数  api/user.js
		//2.调用上面写好的函数
  
		console.log('submit', values);
		createUser(values)
		.then(res => {
			console.log(res.code)

		  //res 就是erviceAxios.data的数据
  
		  if(res.code == 0){
			console.log("成功跳转到xxx页面")
			showSuccessToast({
				"message":"zhu注册成功"
			  
			})
			//如果接口返回的code是0就跳转页面到login
			router.push({
			  name:'login'
			})
		  }else{
			console.log("失败 ",res.message)
			showFailToast(
			  "注册失败"
			)
		  }
		})
		.catch(err=>{
			console.log(res.code)
		  //err 就是erviceAxios.reject.message 的数据
		  console.log("出错了0001",err)
		  showFailToast({
			"message":err,
			"position":top
		  })
		})
	  };
	  
	  import {checkUsername} from '@/api/user.js'
	  const checkUserRepete = (val) =>{
		  console.log("检查用户名是否已经存在")
		var result = checkUsername(val)
		.then(res => {
			console.log("调用成功")
		   // return res.message
			if(res.code != 0){
				return true
			}else{
			  return res.message
			}
		})
		.catch(err =>{
			 console.log("调用失败")
			 return err
		})
		  //检查用户名是否 已经存在
		  //return `${val}已存在，请重新输入`
		return result
	  }
	 
  </script>
  
  <style>
	.side-margin{
	  margin:0px 15px;
  
	}
	.right{
	  text-align: right;
	}
  
  
	
	section {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  width: 100%;
	  height: 100%;
	  background: url('public/HH.png');
	  background-position: center;
	  position:fixed;
	  background-size:100% 100%;
	}
	
	/*毛玻璃css样式*/
	.form-box{
	  position: relative;
	  width: 100%;
	  height: 100%;
	  background-color: transparent;
	  border: 2px solid rgba(255, 255, 255,0.5);
	  backdrop-filter: blur(8px);
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
  
  </style>
  