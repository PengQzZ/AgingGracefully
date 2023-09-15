

import { ref, watchEffect  } from 'vue'

const count = ref(0)
export default {
    load2(load) {
       count.value =  load
       console.log("这里是load函数123331111：：：：",count.value)
      
       
    
       
  
    },

  };