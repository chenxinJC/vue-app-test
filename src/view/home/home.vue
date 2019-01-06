<template>
  <div class="home">
    <x-header class="header"
      title="首页"
      :left-options="{showBack: false}"></x-header>
    <c-swiper class="banner"
      :options="bannerOption"
      :swiper-datas="banner"></c-swiper>
    <div class="quick-access">
      <quick-access :datas="quickAccess">
      </quick-access>
    </div>
    <!-- <grid></grid> -->
    <p @click="logout">登出</p>
    <p @click="goArticle">详情页</p>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import CSwiper from 'components/c-swiper'
import QuickAccess from './components/quickAccess'
// import Grid from './components/grid.vue'
import { removeToken, removeUuid } from '@/utils/auto'
export default {
  name: 'home',
  components: {
    XHeader,
    CSwiper,
    QuickAccess
  },
  data () {
    return {
      bannerOption: {
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
          delay: 3000
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
      ],
      quickAccess: [
        {
          title: '推荐大佬',
          url: 'http://a1.jikexueyuan.com/home/201707/04/0579/595b88771f5b2.png'
        },
        {
          title: '推荐课程',
          url: 'http://a1.jikexueyuan.com/home/201707/04/0dfc/595b87e3c9351.png'
        },
        {
          title: '我的订阅',
          url: 'http://a1.jikexueyuan.com/home/201707/04/b9a5/595b88929e943.png'
        },
        {
          title: '我的下载',
          url: 'http://a1.jikexueyuan.com/home/201707/04/cdc0/595b88843e58d.png'
        },
        {
          title: '我的收藏',
          url: 'http://a1.jikexueyuan.com/home/201707/04/43a9/595b895a7f00a.png'
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
body {
  background: #f6f6f6;
}
.header {
  background: transparent !important;
  /deep/ .vux-header-title {
    color: #3a3a3a;
  }
}
.banner {
  height: 150px;
}
</style>
