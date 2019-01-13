<template>
  <div class="container">
    <div class="item"
      v-for="(item, index) in list"
      :key="index">
      <img class="item-img"
        :src="item.imgUrl"
        alt="">
      <h3 class="item-title">{{item.article_title}}</h3>
      <div class="info">
        <div class="user">
          <img :src="item.userImgUrl"
            alt="">
          <p>{{item.userName}}</p>
        </div>
        <div class="other">
          <div class="icon-wrapper">
            <span class="fa"
              :class="[item.agreeState ? 'fa-thumbs-up' : 'fa-thumbs-o-up']"></span>
            <span class="num">{{item.agreeNum}}</span>
          </div>
          <div class="icon-wrapper">
            <span class="fa"
              :class="[item.collectState ? 'fa-heart' : 'fa-heart-o']"></span>
            <span class="num">{{item.collectNum}}</span>
          </div>
          <div class="icon-wrapper">
            <span class="fa fa-commenting"></span>
            <span class="num">{{item.commentNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-list_2',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
.container {
  padding: 0 px2rem(15);
  .item {
    width: 100%;
    margin-bottom: px2rem(10);
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 px2rem(1) px2rem(4) rgba(0, 0, 0, 0.08);
    overflow: hidden;
    .item-img {
      width: 100%;
    }
    .item-title {
      font-size: px2rem(14);
      font-weight: 700;
      padding: px2rem(10) px2rem(6);
      @include ellipsis;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: px2rem(10);
      padding: 0 px2rem(10);
        color: #8a8a8a;
      .user {
        @include flex-center;
        font-size: px2rem(12);
        img {
          width: px2rem(20);
          height: px2rem(20);
          margin-right: px2rem(4);
          border-radius: 50%;
        }
      }
      .other {
        @include flex-center;
        .icon-wrapper {
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
      }
    }
  }
}
</style>
