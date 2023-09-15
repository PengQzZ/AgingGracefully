<template>

  <ul v-infinite-scroll="load" class="infinite-list" :infinite-scroll-disabled="disabled" >
   
      <el-skeleton  v-for="i in count" :key="i" style="width: 100%" >
          <template #template>
           <!--可放大图片-->
            <image_1></image_1>
            <!--伸缩栏-->
            <demo></demo>
          </template>
        </el-skeleton>
  </ul>
 
 


</template>

<script lang="ts" setup>
import demo from "_c/test/userC/demo.vue"
import image_1 from "_c/test/userC/image.vue"

import load_r from "_v/home/components/load.js"
import { getHomeSwiper2 } from '@/api/image.js'
import { ref, watchEffect,computed  } from 'vue'

const count = ref(0)
// const load = (ref) => {
//   count.value += 1
//   //console.log(count.value)
// }

let myArray = []

const loading = ref(false)
const noMore = computed(() => count.value >= 7)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 1
    myArray[0] = count.value;
    const requestData = {
    
  	"id":myArray
   
};
console.log("zhes scll [] d1",requestData)
  getHomeSwiper2(requestData)

    loading.value = false
  }, 20)
}












</script>

<style>
.ad{
width: 100%;
height: 30%;

}

.infinite-list {
  height: 500px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}


</style>