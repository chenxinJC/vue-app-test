<template>
  <div class="home">
    首页
    <p @click="logout">登出</p>
    <p @click="goArticle">详情页</p>
  </div>
</template>

<script>
import { removeToken, removeUuid } from '@/utils/auto'
export default {
  name: 'home',
  data () {
    return {
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
