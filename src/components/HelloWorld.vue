<template>
  <div class="hello">
		<div class="msg">{{msg}}</div>
    <mt-checklist title="checkbox-list" v-model="value" :options="options"></mt-checklist>
  </div>
</template>

<script>
import Swiper from 'swiper';
import {Checklist} from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:'',
      options:[{
        label: 'disabled option',
        value: 'valueF',
        disabled: true
      },
      {
        label: 'checked disabled',
        value: 'valueE',
        disabled: true
      },
      {
        label: 'optionA',
        value: 'valueA'
      },
      {
        label: 'optionB',
        value: 'valueB'
      }]
    }
  },
  components: {
    Checklist
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
