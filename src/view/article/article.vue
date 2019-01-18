<template>
  <!-- <transition enter-active-class="slideInRight" -->
    <!-- leave-active-class="slideOutRight"> -->
    <div>
      <x-header class="header"
        title="文章详情"></x-header>
      <scroll class="scroll">
        <div>
          <div>
            <h3 class="art-title">{{title}}</h3>
            <div class="art-content"
              v-html="content"></div>
          </div>
        </div>
      </scroll>
    </div>
  <!-- </transition> -->
</template>

<script>
import { getArticleDetails } from 'api/article'
import { XHeader } from 'vux'
import Scroll from 'components/scroll'
export default {
  name: 'echarts',
  components: {
    XHeader,
    Scroll
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      getArticleDetails(this.$route.params.id).then(res => {
        console.log(res)
        let data = res.data.data
        this.title = data.article_title
        this.content = data.article_content
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
.animated{
  z-index: 2;
}
div.scroll {
  height: auto;
  position: absolute;
  top: px2rem(46);
  bottom: 0;
  background: #fff;
}
.art-content {
  /deep/ p {
    margin-bottom: px2rem(10) !important;
    font-size: px2rem(16);
    line-height: 1.48em !important;
  }
  /deep/ img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.art-title {
  padding: px2rem(15);
  line-height: 1.4em;
  font-size: px2rem(20);
}
.art-content {
  padding: px2rem(10);
}
</style>
