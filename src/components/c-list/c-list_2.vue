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
  padding: 0 10px;
  .item {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    .item-img {
      width: 100%;
    }
    .item-title {
      font-size: 14px;
      font-weight: 700;
      padding: 10px 6px;
      @include ellipsis;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 10px;
        color: #8a8a8a;
      .user {
        @include flex-center;
        font-size: 12px;
        img {
          width: 20px;
          height: 20px;
          margin-right: 4px;
          border-radius: 50%;
        }
      }
      .other {
        @include flex-center;
        .icon-wrapper {
          margin-left: 12px;
          @include flex-center;
          .fa {
            margin-right: 2px;
          }
          .num {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
