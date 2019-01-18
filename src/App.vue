<template>
  <div id="app">
    <transition :enter-active-class="enterAnimate"
      :leave-active-class="leaveAnimate">
      <navigation>
        <router-view class="animated" />
      </navigation>
    </transition>
    <transition enter-active-class="ainmated fadeIn"
      leave-active-class="ainmated fadeOut">
      <c-tab-bar v-if="$route.meta.cTabBar"></c-tab-bar>
    </transition>
  </div>
</template>

<script>
import CTabBar from 'components/c-tabBar'
const fadeIn = ['/login', '/home', '/course', '/column', '/my']
const fadeInUp = ['/register', '/forgetPassword']
export default {
  name: 'App',
  components: {
    CTabBar
  },
  data () {
    return {
      enterAnimate: '',
      leaveAnimate: ''
    }
  },
  created () {
    // bind event
    this.$navigation.on('forward', (to, from) => {
      this.leaveAnimate = 'fadeOut'
      if (fadeIn.indexOf(to.route.path) > -1) {
        this.enterAnimate = 'fadeIn'
      } else if (fadeInUp.indexOf(to.route.path) > -1) {
        this.enterAnimate = 'slideInUp'
      } else {
        this.enterAnimate = 'slideInRight'
      }
      // console.log('forward to', to.route, 'from ', from.route)
    })
    this.$navigation.on('back', (to, from) => {
      this.enterAnimate = 'fadeIn'
      if (fadeIn.indexOf(from.route.path) > -1) {
        this.leaveAnimate = 'fadeOut'
      } else if (fadeInUp.indexOf(from.route.path) > -1) {
        this.leaveAnimate = 'slideOutDown'
      } else {
        this.leaveAnimate = 'slideOutRight'
      }
      // console.log('back to', to.route, 'from ', from.route)
    })
  },
  methods: {
  }
}
document.addEventListener('DOMContentLoaded', () => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  let htmlDom = document.getElementsByTagName('html')[0]
  let fontSize = htmlWidth / 10
  fontSize = fontSize > 60 ? 60 : fontSize
  htmlDom.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
</style>
