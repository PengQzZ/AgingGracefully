<template>
    <van-cell title="展示弹出层" is-link @click="showPopup" />
<van-popup v-model:show="show" :style="{ padding: '64px' }">内容</van-popup>

</template>

<script>

import { ref } from 'vue';

export default {
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return {
      show,
      showPopup,
    };
  },
};


</script>

<style>

</style>