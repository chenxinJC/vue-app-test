<template>
  <div class="comment" @click.stop="comment">
    <span class="fa fa-commenting"></span>
    <span class="num">{{num}}</span>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    num: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    comment () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
.comment {
  margin-left: px2rem(12);
  @include flex-center;
  .fa {
    margin-right: px2rem(2);
    font-size: px2rem(14);
  }
  .num {
    font-size: px2rem(12);
  }
}
.box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background: #fff;
}
</style>
