<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
document.addEventListener('DOMContentLoaded', () => {
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
  let htmlDom = document.getElementsByTagName('html')[0]
  let fontSize = htmlWidth / 10
  fontSize = fontSize > 60 ? 60 : fontSize
  htmlDom.style.fontSize = fontSize + 'px'
})
</script>

<style>
</style>
