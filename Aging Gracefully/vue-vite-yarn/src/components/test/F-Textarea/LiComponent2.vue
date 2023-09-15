<template>
    <li class="infinite-list-item">

        <img class="overlay-image" :src="srcList[0]" />
    </li>

    
</template>




  <script setup>
  import { ref,onMounted } from 'vue'
  import { showSuccessToast } from 'vant';
  import { getLiComp2 } from  '@/api/image.js'
  const srcList = ref([
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
])

  const count = ref(0)
  onMounted(() => {
    getLiComp2()
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

/*布局*/
.container {
    display: flex;
  }
  
  .left-half, .right-half {
    flex: 1;
  }


/* 无限滚动*/
  .infinite-list {
    height: 90vh;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    
    background: var(--el-color-primary-light-9);
    margin: 3px;
    color: var(--el-color-primary);
  }

  .infinite-list .infinite-list-item + .list-item {
    margin-top: 10px;
  }
  .overlay-image {
   
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; /* 设置层级，确保图片位于列表项上方 */
  }
 
  
  
</style>