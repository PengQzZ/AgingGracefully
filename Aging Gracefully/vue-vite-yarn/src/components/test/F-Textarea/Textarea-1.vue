<template>
    <van-nav-bar
	title="诈骗资讯"
	left-text="返回"
	left-arrow
	@click-left="onClickLeft"
  />
  

  <div class="video-container">
    
        <video ref="videoPlayer"  src="https://fd.aigei.com/src/vdo/mp4/71/716a043e55c541649ab961779c62a109.mp4?e=1693900080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:oXqXS7vYiNI6Nfsuv_Ca27HYPOE=" controls></video>
    
  </div>

 


	<router-view @change="changeActive"></router-view>
	<van-tabbar v-model="active">
	  <van-tabbar-item icon="home-o" :to="{'name':'home'}">首页</van-tabbar-item>
	  <van-tabbar-item icon="search" :to="{'name':'about'}">资讯</van-tabbar-item>
	  <van-tabbar-item icon="friends-o" to="/P">热门活动</van-tabbar-item>
	  <van-tabbar-item icon="setting-o" to="/UserCenter">我的</van-tabbar-item>
	</van-tabbar>
</template>
<script setup>

import {ref,onMounted} from 'vue'
import { Hom4 } from  '@/api/image.js'

let myArray = ["https://fd.aigei.com/src/vdo/mp4/71/716a043e55c541649ab961779c62a109.mp4?e=1693900080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:oXqXS7vYiNI6Nfsuv_Ca27HYPOE=",
"https://fd.aigei.com/src/vdo/mp4/66/6691b3814e5248e2be8ba7cd0bb35247.mp4?e=1693900080&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:JgjWJU5SHxFyyhNbm89bOaw1t9I=",
"https://fd.aigei.com/pvvdo_fast/vdo/mp4/d1/d1711a0808c144a5a292dd76ebadaddf.mp4?e=1693900440&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:qqYtFBY5OxbP_3o9Wfw-Pn7LE1w=",
"https://fd.aigei.com/pvvdo_fast/vdo/mp4/c6/c64a1eaf832e420c810a3d0ef2469efe.mp4?e=1693900440&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:Q2ZxdZxH5X23mdaKCZCU9vg9gU8=",
"https://fd.aigei.com/src/vdo/mp4/91/91b02679b79a4410b9a5793c237954e5.mp4?e=1693900500&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:g6aj3mRD0Q7-f_qifCplXiRdYgw="

]

 const onClickLeft = () => history.back();

	var active = ref(0)
	function changeActive(data){
		active.value=data
		console.log(active.value)
	}



const videoPlayer = ref(null)

onMounted(() => {
  // 检测是否在移动设备上，并且支持全屏功能
  if (/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent) && 'requestFullscreen' in videoPlayer.value) {
    videoPlayer.value.addEventListener('loadedmetadata', () => {
      videoPlayer.value.play() // 自动播放视频
    })
  }
  Hom4()
    .then(res =>{

    console.log(res.data,"++这里是Tex1.vue 视频")
    })
    .catch(err => {
				console.log(err, `服务端错误！`)
			})



})

const toggleFullscreen = () => {
  // 在移动设备上使用特定的全屏API
  if (/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent) && 'requestFullscreen' in videoPlayer.value) {
    videoPlayer.value.requestFullscreen()
  }
}


</script>
<style >
.video-container {
    width: 100%;
    height: calc(100vh - 40px); /* 设置视频容器的高度为视口高度减去上下两个20px的边距 */
    padding: 40px 0; /* 设置上下边距为20px，左右边距为0 */
    box-sizing: border-box; /* 确保边距不会增加视频容器的实际尺寸 */
  }
  
  .video-container video {
    width: 100%;
    height: 100%; /* 设置视频标签的宽度和高度为100%，以填充整个视频容器 */
  }
  </style>
 
  
  