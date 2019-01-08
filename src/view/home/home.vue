<template>
  <div class="home">
    <x-header class="header"
      title="首页"
      :left-options="{showBack: false}"></x-header>
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
    <!-- <grid></grid> -->
    <p @click="logout">登出</p>
    <p @click="goArticle">详情页</p>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import CSwiper from 'components/c-swiper'
import QuickAccess from './components/quickAccess'
import CListOne from 'components/c-list/c-list_1'
import CListTwo from 'components/c-list/c-list_2'
// import Grid from './components/grid.vue'
import { removeToken, removeUuid } from '@/utils/auto'
import { getBanner, getQuickAccess } from 'api/home'
import { getCourse } from 'api/course'
export default {
  name: 'home',
  components: {
    XHeader,
    CSwiper,
    QuickAccess,
    CListOne,
    CListTwo
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
          delay: 1000
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        observeParents: true
      },
      banner: [],
      quickAccess: [],
      hotRecommendList: [],
      articleRecommendList: [
        {
          imgUrl: '//bpic.588ku.com/back_pic/05/77/43/695bf273dad8864.jpg!/fh/300/quality/90/unsharp/true/compress/true',
          title: '新年就发了我感觉',
          userImg: 'https://assets.jikexueyuan.com/user/avatar/57/30/3291752.jpeg',
          userName: '方格',
          agreeState: false,
          agreeNum: 34,
          collectState: false,
          collectNum: 99,
          comment: 53
        },
        {
          imgUrl: '//bpic.588ku.com/back_pic/05/77/43/695bf273dad8864.jpg!/fh/300/quality/90/unsharp/true/compress/true',
          title: '新年就发了我感觉',
          userImg: 'https://assets.jikexueyuan.com/user/avatar/57/30/3291752.jpeg',
          userName: '方格',
          agreeState: false,
          agreeNum: 34,
          collectState: false,
          collectNum: 99,
          comment: 53
        }
      ]
    }
  },
  activated () {
    document.body.setAttribute('class', 'f6f6f6')
  },
  deactivated () {
    document.body.removeAttribute('class', 'f6f6f6')
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      Promise.all([getBanner(), getQuickAccess()]).then(res => {
        console.log(res)
        this.banner = res[0].data.list
        this.quickAccess = res[1].data.list
        this.$refs.banner.initSwiper()
        this.$refs.quickAccess.initSwiper()
      })
      getCourse()
    },
    _getCourse () {
      // getCourse().then(res => {
      //   let list = res.data.list
      //   this.gc = list
      //   let aryID = []
      //   let newAry = []
      //   list.forEach(val => {
      //     aryID.push(val.id)
      //   })
      //   aryID.forEach(val => {
      //     newAry.push(['course_key', '=', val])
      //   })
      //   return getCourseBuyUser(newAry)
      // }).then(res => {
      //   let data = this.gc
      //   for (let i = 0; i < data.length; i++) {
      //     data[i]['follow'] = []
      //     for (let j = 0; j < res.data.list.length; j++) {
      //       data[i].follow.push(res.data.list[j])
      //     }
      //   }
      //   this.hotRecommendList = data
      // })
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
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #f6f6f6 !important;
  /deep/ .vux-header-title {
    color: #3a3a3a;
  }
}
.banner {
  height: 150px;
  padding-top: 54px;
}
.recommend {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    .more {
      font-size: 12px;
      color: #8a8a8a;
    }
  }
}
</style>
