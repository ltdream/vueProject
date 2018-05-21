<template>
  <div class="hello">
		<div class="msg">{{msg}}</div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  },
  methods: {
    
  }
}
</script>
<style lang="scss">
  .hello{
    .msg{
      color:#ff0;
    }
  }
</style>
