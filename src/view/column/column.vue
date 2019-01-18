<template>
  <transition enter-active-class="fadeIn"
    leave-active-class="fadeOut">
    <div class="animated">
      bbbbbbbbbbbbbbbbbbbbbbbbb
    </div>
  </transition>
</template>

<script>
import CTabBar from 'components/c-tabBar'
export default {
  name: 'column',
  components: {
    CTabBar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  width: 100%;
  position: absolute;
  top: 46px;
  bottom: 55px;
}
</style>
