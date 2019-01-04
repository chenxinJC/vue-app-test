<template>
  <div class="article">
    <x-header class="header" title="文章详情"></x-header>
    <h3 class="art-title">{{title}}</h3>
    <div class="art-content"
      v-html="content"></div>
  </div>
</template>

<script>
import { getArticle } from 'api/article'
import { XHeader } from 'vux'
export default {
  name: 'echarts',
  components: {
    XHeader
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
      getArticle().then((res) => {
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
.art-content {
  /deep/ p {
    margin-bottom: 10px !important;
    font-size: 0.3rem;
    line-height: 1.48em !important;
  }
  /deep/ img {
    display: block;
    width: 100%;
    height: auto;
  }
}
.art-title {
  padding: 10px;
  line-height: 1.4em;
  font-size: 20px;
}
.art-content {
  padding: 10px;
}
</style>
