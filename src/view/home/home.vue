<template>
  <div class="home">
    <x-header class="header"
      title="首页"
      :left-options="{showBack: false}"></x-header>
    <c-swiper :options="swiperOption"
      :swiper-datas="banner"></c-swiper>
    <grid></grid>
    <p @click="logout">登出</p>
    <p @click="goArticle">详情页</p>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import CSwiper from 'components/c-swiper'
import Grid from './components/grid.vue'
import { removeToken, removeUuid } from '@/utils/auto'
export default {
  name: 'home',
  components: {
    XHeader,
    CSwiper,
    Grid
  },
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        coverflowEffect: {
          //   rotate: 0,
          //   stretch: 0,
          depth: 200,
          //   modifier: 2,
          slideShadows: false
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 11111000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      banner: [
        {
          url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1118162.jpg'
        },
        {
          url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1117439.jpg'
        },
        {
          url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1119799.jpg'
        }
      ]
    }
  },
  methods: {
    logout () {
      removeToken()
      removeUuid()
      this.$store.state.user.token = ''
      this.$store.state.user.uuid = ''
      this.$router.push({ path: '/login' })
    },
    goArticle () {
      this.$router.push({ path: '/article' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
