<template>
  <div class="bottom border-top">
    <slot name="agree"></slot>
    <slot name="collect"></slot>
    <slot name="comment"></slot>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
@import "src/assets/styles/border.scss";
.bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: px2rem(56);
  background: #f6f6f6;
  @include flex-center;
}
</style>
