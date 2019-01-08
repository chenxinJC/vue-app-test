<template>
  <div class="swiper-container sqa">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
        v-for="(item, index) in datas"
        :key="index">
        <img :src="item.imgUrl"
          alt="">
        <p class="title">{{item.title}}</p>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'quick-access',
  components: {
    Swiper
  },
  props: {
    datas: Array
  },
  data () {
    return {
      quickAccess: null,
      options: {
        slidesPerView: 4,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 10,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  methods: {
    initSwiper () {
      this.$nextTick(() => {
        if (this.datas.length > 0) {
          let mySwiper = new Swiper('.sqa', this.options)
          this.quickAccess = mySwiper
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  .swiper-slide {
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    img {
      width: 36px;
    }
    p {
      font-size: 14px;
    }
  }
}
</style>
