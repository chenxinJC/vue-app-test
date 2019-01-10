<template>
  <div>
    <tabbar>
      <tabbar-item>
        <i slot="icon"
          class="fa fa-home"> </i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item selected>
        <i slot="icon"
          class="fa fa-book"> </i>
        <span slot="label">课程</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon"
          class="fa fa-bookmark"> </i>
        <span slot="label">专栏</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon"
          class="fa fa-user"> </i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'c-tabbar',
  props: {
    list: Array
  },
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.weui-tabbar {
  position: fixed;
}
</style>
