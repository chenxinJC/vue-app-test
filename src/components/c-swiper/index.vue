<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="(item, index) in swiperDatas"
        :key="index">
        <img :src="item.url"
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
    let mySwiper = new Swiper('.swiper-container', this.options)
    this.cSwiper = mySwiper
  },
  activated () {
    this._startSwiper()
  },
  deactivated () {
    this._stopSwiper()
  },
  methods: {
    _startSwiper () {
      // this.cSwiper.autoplay.start()
    },
    _stopSwiper () {
      this.cSwiper.autoplay.stop()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  perspective: 800px;
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 94%;
    transform-style: preserve-3d;
    opacity: 0.5;
    &.swiper-slide-active {
      opacity: 1;
      img {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.36);
      }
    }
    img {
      width: 92%;
      border-radius: 4px;
    }
  }
  .swiper-pagination {
    bottom: 2px;
  }
}
/deep/ .swiper-pagination-bullet {
  width: 4px;
  height: 4px;
}
</style>
