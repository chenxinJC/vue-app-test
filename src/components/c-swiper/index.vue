<template>
  <div class="swiper-container c-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="(item, index) in swiperDatas"
        :key="index">
        <img :src="item.imgUrl"
          alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'c-swiper',
  components: {
    Swiper
  },
  props: {
    options: Object,
    swiperDatas: Array
  },
  data () {
    return {
      cSwiper: null
    }
  },
  mounted () {
    this.initSwiper()
  },
  activated () {
    if (this.swiperDatas.length > 0) {
      this.startSwiper()
    }
  },
  deactivated () {
    if (this.swiperDatas.length > 0) {
      this.stopSwiper()
    }
  },
  methods: {
    initSwiper () {
      this.$nextTick(() => {
        if (this.swiperDatas.length > 0) {
          let mySwiper = new Swiper('.c-swiper', this.options)
          this.cSwiper = mySwiper
        }
      })
    },
    startSwiper () {
      this.cSwiper.autoplay.start()
    },
    stopSwiper () {
      this.cSwiper.autoplay.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/styles/mixins.scss";
.swiper-container {
  @include flex-center;
  width: 100%;
  perspective: px2rem(800);
  .swiper-slide {
    @include flex-center;
    opacity: 0.5;
    width: 94%;
    transform-style: preserve-3d;
    // top: px2rem(12);
    transition: all 3s;
    &.swiper-slide-active {
      opacity: 1;
      // top: 0;
      img {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.36);
      }
    }
    img {
      width: 92%;
      border-radius: 4px;
      transition: all 0.8s;
    }
  }
  .swiper-pagination {
    bottom: px2rem(2);
  }
}
/deep/ .swiper-pagination-bullet {
  width: px2rem(4);
  height: px2rem(4);
}
</style>
