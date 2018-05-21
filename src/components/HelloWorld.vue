<template>
  <div class="hello">
    <div class="swiper-container" id="swipers">
			<div class="swiper-wrapper">
				<div v-for="(item,index) in swiperList" :key="index" class="swiper-slide">
					<div class="swiper-img" :style="{backgroundImage:'url('+item.img+')'}"></div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swiperList:{
				0:{
					'img': 'http://dummyimage.com/125x125/ffcc33'
				},
				1:{
					'img': 'http://dummyimage.com/125x125/fff003'
				}
			},
    }
  },
  components: {
  },
  methods: {
    swiperinit () {
      var swipers = document.getElementById("swipers");
			var mySwiper1 = new Swiper(swipers, {
				loop: true,
				autoplay: 3000
			})
		}
  }
}
</script>
<style style="scss">
@import "../../node_modules/swiper/src/swiper.less"

.swiper-container{
	width:300px;height:125px;overflow: hidden;
}
.swiper-wrapper,.swiper-slide,.swiper-img{
	height:125px;
}
</style>
