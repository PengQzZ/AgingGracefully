<template>

<!--可放大图片-->
<div class="demo-image__preview">
    <el-image
      style="width: 100%; height: 100%"
      :src="srcList[1]"
      :zoom-rate="1.2"
      :preview-src-list="srcList"
      :initial-index="4"
      fit="cover"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from 'vue'


const srcList = ref([
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
])

import { Hom4 } from  '@/api/image.js'

const requestData = {
  	"id":102
    
  	
	};
  import { showSuccessToast } from 'vant'; //组件
	 

onMounted(() => {

      Hom4()
        .then(res =>{
          if (res.code != 0 && res.code != 500) {
            showSuccessToast({
							message: res.message,
							position: 'top',
						})
					console.log(`获取数据失败，` + res.message);
				} else {
          srcList.value.push( res.data)
          console.log('这里是image', res.data)
        }
        })
        .catch(err => {
				console.log(err, `服务端错误！`)
			})


})





</script>

<style>

/*图片放大*/
.demo-image__error .image-slot {
    font-size: 30px;
  }
  .demo-image__error .image-slot .el-icon {
    font-size: 30px;
  }
  .demo-image__error .el-image {
    width: 100%;
    height: 200px;
  }
</style>