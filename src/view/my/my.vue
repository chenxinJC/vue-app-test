<template>
  <div>
    <x-header class="header"
      title="个人中心"
      :style="backStyle"
      :left-options="{showBack: false}">
      <i class="fa fa-search"
        slot="right"></i>
    </x-header>
    <div class="user-box">
      <div class="user-info">
        <img src="../../assets/logo.png"
          alt="">
        <h3 class="user-name">任务二玩儿</h3>
        <p class="user-msg">玩儿玩儿特台湾</p>
      </div>
    </div>
    <c-tab-bar></c-tab-bar>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import CTabBar from 'components/c-tabBar'
export default {
  name: 'my',
  components: {
    XHeader,
    CTabBar
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$store.dispatch('GetUserInfo').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
@import "src/assets/styles/color.scss";
.user-box {
  @include flex-center;
  position: fixed;
  top: px2rem(46);
  width: 100%;
  height: px2rem(130);
  padding-bottom: px2rem(10);
  background: $default_color;
  .user-info {
    @include flex-center;
    flex-direction: column;
    color: #fff;
  }
  img {
    width: px2rem(64);
    height: px2rem(64);
    border-radius: 50%;
    background: #f3f3f3;
  }
  .user-name {
    margin: 10px auto 8px;
    font-size: px2rem(16);
    font-weight: 700;
    text-align: center;
  }
  .user-msg {
    font-size: px2rem(12);
    text-align: center;
    opacity: 0.64;
  }
}
</style>
