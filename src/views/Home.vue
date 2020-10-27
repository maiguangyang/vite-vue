<template>
  <h1>This is the homepage</h1>
  <van-button type="primary">主要按钮</van-button>
</template>

<script>
  import 'vant/lib/button/index.css';
  import { Button } from 'vant';

  export default {
    name: 'Home',
    components: {
      [Button.name]: Button,
    },
  }
</script>
<style lang="scss" scoped>
  h1 {
    font-weight: normal;
    color: #f00;
  }
</style>