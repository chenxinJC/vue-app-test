<template>
  <div class="container">
    <div class="item"
      v-for="(item, index) in list"
      :key="index">
      <img class="item-img"
        :src="item.imgUrl">
      <div class="item-title">{{item.title}}</div>
      <div class="info">
        <div class="follow">
          <img class="follow-item"
            v-for="(fItem, index) in getMaxList(item.follow)"
            :key="index"
            :src="fItem.userImgUrl"
            :style="{left: index * 12 + 'px'}">
          <span class="more"
            v-if="item.follow.length > 3">{{item.follow.length}}+</span>
        </div>
        <div class="user">
          <img :src="item.userImgUrl"
            alt="">
          <p class="name">{{item.userName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-list',
  props: {
    list: Array
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log(66, this.list)
  },
  methods: {
    getMaxList (array) {
      return array.length > 3 ? array.slice(0, 3) : array
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
@import "src/assets/styles/color.scss";
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px;
  .item {
    flex: 0 0 calc(50% - 5px);
    width: calc(50% - 5px);
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    .item-img {
      width: 100%;
    }
    .item-title {
      font-size: 14px;
      padding: 10px;
      @include ellipsis;
    }
    .info {
      display: flex;
      justify-content: space-between;
      height: 24px;
      padding: 0 6px 10px;
      font-size: 12px;
      img {
        width: 24px;
        border-radius: 50%;
        border: 1px solid #fff;
      }
      .follow {
        position: relative;
        height: 100%;
        @include flex-center;
        img {
          position: absolute;
        }
        .more {
          min-width: 24px;
          height: 24px;
          padding: 0 4px;
          border-radius: 12px;
          border: 1px solid #fff;
          text-align: center;
          color: #fff;
          line-height: 24px;
          background: $default_color;
          position: absolute;
          left: 36px;
        }
      }
      .user {
        display: flex;
        @include flex-center;
        color: #acacac;
        img {
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
