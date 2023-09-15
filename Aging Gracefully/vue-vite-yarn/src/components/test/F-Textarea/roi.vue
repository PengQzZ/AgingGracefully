<template>
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <div>
             
            <div class="container">
                <div class="left-half" > 
                  <router-link to="/Textarea-1"> 
                    <LiComponent v-for="i in count" :key="i" :count="i" />
                  </router-link> 
                </div>

                
              
                <div class="right-half" > 
                  <router-link to="/Textarea-1"> 
                   <LiComponent v-for="i in count2" :key="i" :count="i" /><img>
                  </router-link> 
                </div>
             
            </div>
                   
            
            
        </div>
    </ul>
  </template>
  
  <script lang="ts" setup>
import { poshRoi } from '@/api/image.js'
import { poshRoi2 } from '@/api/image.js'
import  LiComponent  from "_c/test/F-Textarea/LiComponent.vue"
import  LiComponent2  from "_c/test/F-Textarea/LiComponent2.vue"
  import { ref ,watchEffect} from 'vue'
  const count = ref(1)
  const count2 = ref(1)
  const load = () => {
    
    if (count.value >= 8){
      
      count.value = 1
      count2.value = 1
    }else{
      count.value += 1
      count2.value += 1
    }
    
}

watchEffect(() => {
  const requestData = {
  	"id":count.value,
   
};
const requestData2 = {
  	
    "id2":count2.value
};
 
 poshRoi(requestData)
 poshRoi2(requestData2)
  // console.log("这里是Sllld的value",requestData)
});






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
  </style>
  