<template>
  <div class="like"
    @click.stop="like">
    <div v-if="type === 'comment'">
      <span class="fa fa-commenting"
        :style="{fontSize: this.iconSize + 'px'}"></span>
      <span class="num"
        :style="{fontSize: this.textSize + 'px'}">{{num}}</span>
    </div>
    <div v-else>
      <span class="fa"
        :class="[Number(state) ? iconDefault : iconSelect]"
        :style="{color: Number(state) ? color : '', fontSize: this.iconSize + 'px'}"></span>
      <span class="num"
        :style="{fontSize: this.textSize + 'px'}">{{num}}</span>
    </div>
  </div>
</template>

<script>
import { fs } from 'utils/auto'
export default {
  name: 'agree',
  props: {
    type: {
      type: String,
      default: 'agree'
    },
    iconDefault: {
      type: String,
      default: 'fa-thumbs-up'
    },
    iconSelect: {
      type: String,
      default: 'fa-thumbs-o-up'
    },
    pid: String,
    id: String,
    state: {
      type: String,
      default: '0'
    },
    num: {
      type: String,
      default: '0'
    },
    color: {
      type: String,
      default: '#2196f3'
    },
    iconSize: {
      type: Number,
      default: fs(14)
    },
    textSize: {
      type: Number,
      default: fs(12)
    }
  },
  methods: {
    like () {
      if (this.type === 'comment') {
        // this.$router.push({ path: '/comment/' + this.type })
      } else {
        let state = Number(this.state) ? '0' : '1'
        let num = Number(this.state) ? String(Number(this.num) - 1) : String(Number(this.num) + 1)
        console.log(`type:${this.type}   state:${state}   num:${num}   pid:${this.pid}   id:${this.id}`)
        this.$emit('like', this.type, state, num, this.pid, this.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/mixins.scss";
.like {
  height: 100%;
  margin-left: px2rem(12);
  @include flex-center;
  .fa {
    margin-right: px2rem(2);
  }
}
</style>
