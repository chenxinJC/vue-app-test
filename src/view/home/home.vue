<template>
  <div class="home">
    <x-header class="header"
      title="首页"
      :style="backStyle"
      :left-options="{showBack: false}">
      <i class="fa fa-search"
        slot="right"></i>
    </x-header>

    <div class="loading"
      v-show="loading">
      <c-loading></c-loading>
    </div>

    <div v-show="!loading">
      <c-swiper class="banner"
        ref="banner"
        :options="bannerOption"
        :swiper-datas="banner"></c-swiper>

      <div class="quick-access">
        <quick-access ref="quickAccess"
          :datas="quickAccess">
        </quick-access>
      </div>

      <div class="hot-recommend recommend">
        <div class="top">
          <h3>热门推荐</h3>
          <p class="more">查看更多</p>
        </div>
        <c-list-one :list="hotRecommendList"></c-list-one>
      </div>

      <div class="latest-course recommend">
        <div class="top">
          <h3>最新课程</h3>
          <p class="more">查看更多</p>
        </div>
        <c-list-one :list="hotRecommendList"></c-list-one>
      </div>

      <div class="article-recommend recommend">
        <div class="top">
          <h3>推荐文章</h3>
          <p class="more">查看更多</p>
        </div>
        <c-list-two :list="articleRecommendList"></c-list-two>
      </div>

    </div>
    <!-- <grid></grid> -->
    <p @click="logout">登出</p>
    <p @click="goArticle">详情页</p>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import CSwiper from 'components/c-swiper'
import CLoading from 'components/c-loading'
import QuickAccess from './components/quickAccess'
import CListOne from 'components/c-list/c-list_1'
import CListTwo from 'components/c-list/c-list_2'
// import Grid from './components/grid.vue'
import { removeToken, removeUuid } from '@/utils/auto'
import { getBanner, getQuickAccess } from 'api/home'
import { getCourse } from 'api/course'
import { getArticle } from 'api/article'
import { fs } from 'utils/asd'
export default {
  name: 'home',
  components: {
    CLoading,
    XHeader,
    CSwiper,
    QuickAccess,
    CListOne,
    CListTwo
  },
  data () {
    return {
      loading: false,
      backStyle: {
        color: '#3a3a3a',
        background: 'transparent'
      },
      bannerOption: {
        direction: 'horizontal',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        coverflowEffect: {
          // rotate: 0,
          stretch: 0,
          depth: fs(200),
          modifier: 1,
          slideShadows: false
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 11111000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        on: {
          progress: function () {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides[i]
              let progress = slide.progress
              console.log(1111, this.realIndex)
              console.log(2222, slide.realIndex)
              let es = slide.style
              es.opacity = Math.round((1 - Math.min(Math.abs(progress / 2), 1)) * 10) / 10
              es.top = Math.round(progress) === 0 ? Math.round(progress) : fs(10) + 'px'
            }
          }
        },
        observer: true,
        observeParents: true
      },
      banner: [],
      quickAccess: [],
      hotRecommendList: [],
      articleRecommendList: []
    }
  },
  activated () {
    document.body.setAttribute('class', 'f6f6f6')
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    document.body.removeAttribute('class', 'f6f6f6')
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.getData()
    this.handleScroll()
  },
  methods: {
    getData () {
      this.loading = true
      Promise.all([getBanner(), getQuickAccess(), getCourse(), getArticle()]).then(res => {
        console.log(res)
        this.loading = false
        this.banner = res[0].data.list
        this.quickAccess = res[1].data.list
        this.hotRecommendList = res[2].data.list
        this.articleRecommendList = res[3].data.list
        this.$refs.banner.initSwiper()
        this.$refs.quickAccess.initSwiper()
      })
    },
    logout () {
      removeToken()
      removeUuid()
      this.$store.state.user.token = ''
      this.$store.state.user.uuid = ''
      this.$router.push({ path: '/login' })
    },
    goArticle () {
      this.$router.push({ path: '/article' })
    },
    handleScroll () {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.backStyle.color = top > 10 ? '#fff' : '#3a3a3a'
      this.backStyle.background = top > 10 ? '#41b883' : 'transparent'
      // let opacity = top / 10
      // opacity = opacity > 1 ? 1 : opacity
      // this.backStyle.background = `rgba(65, 184, 131, ${opacity})`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
/deep/ .vux-header {
  transition: all 0.3s;
  .vux-header-title,
  .vux-header-right {
    font-weight: 700;
    color: inherit;
  }
  .fa {
    font-size: px2rem(20);
  }
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include flex-center;
}
.banner {
  height: px2rem(150);
  padding-top: px2rem(44);
  padding-bottom: px2rem(10);
}
.recommend {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px2rem(10);
    h3 {
      font-size: px2rem(16);
      font-weight: 700;
    }
    .more {
      font-size: px2rem(12);
      color: #8a8a8a;
    }
  }
}
</style>
