<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>



<script>
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (val) => showToast(val);
    const onCancel = () => showToast('取消');
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};
</script>

<style>

</style>