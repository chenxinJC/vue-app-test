<template>
  <transition enter-active-class="fadeIn"
    leave-active-class="fadeOut">
    <div class="animated">
      <div class="loading"
        v-show="loading">
        <c-loading></c-loading>
      </div>
      <x-header class="header"
        title="首页"
        :style="backStyle"
        :left-options="{showBack: false}">
        <i class="fa fa-search"
          slot="right"></i>
      </x-header>
      <scroll class=""
        :probeType="3"
        @scroll="scroll">
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
            <c-list-two :list="articleRecommendList"
              @toLink="goToArticle"></c-list-two>
          </div>
        </div>
      </scroll>
    </div>
  </transition>
</template>

<script>
import Scroll from 'components/scroll'
import { XHeader } from 'vux'
import CSwiper from 'components/c-swiper'
import CLoading from 'components/c-loading'
import QuickAccess from './components/quickAccess'
import CListOne from 'components/c-list/c-list_1'
import CListTwo from 'components/c-list/c-list_2'
import CTabBar from 'components/c-tabBar'
// import Grid from './components/grid.vue'
import { getBanner, getQuickAccess } from 'api/home'
import { getCourse } from 'api/course'
import { getArticle } from 'api/article'
import { bannerSwiperOptions } from './config'
export default {
  name: 'home',
  components: {
    Scroll,
    CLoading,
    XHeader,
    CSwiper,
    QuickAccess,
    CListOne,
    CListTwo,
    CTabBar
  },
  data () {
    return {
      loading: false,
      backStyle: {
        color: '#3a3a3a',
        background: 'transparent'
      },
      bannerOption: bannerSwiperOptions,
      banner: [],
      quickAccess: [],
      hotRecommendList: [],
      articleRecommendList: []
    }
  },
  activated () {
    // document.body.setAttribute('class', 'f6f6f6')
    // window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    // document.body.removeAttribute('class', 'f6f6f6')
    // window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.getData()
    // this.handleScroll()
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
    goToArticle (id) {
      console.log(1, id)
      this.$router.push({ path: '/article/' + id })
    },
    scroll (pos) {
      let y = pos.y
      if (y >= -10 && y <= 0) {
        this.backStyle = {
          color: '#333',
          background: 'transparent'
        }
      } else {
        this.backStyle = {
          color: '#fff',
          background: '#41b883'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
.animated {
  background: #f6f6f6;
}
/deep/ div.wrapper {
  height: auto;
  position: absolute;
  top: px2rem(46);
  bottom: px2rem(56);
}
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
  padding-bottom: px2rem(10);
}
.recommend {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px2rem(10) px2rem(15);
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
