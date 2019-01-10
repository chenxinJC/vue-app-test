<template>
  <div class="login">
    <div class="logo">
      <img src="../../assets/logo.png"
        alt="">
    </div>
    <div class="form">
      <group class="group">
        <x-input class="input"
          ref="username"
          title=""
          required
          :max=20
          @on-change="keyDown"
          placeholder="请输入用户名..."
          v-model="userInfo.username">
          <span class="icon"
            slot="label">
            <i class="iconfont icon-user"></i>
          </span>
        </x-input>
        <x-input class="input"
          ref="password"
          title=""
          required
          :min=6
          :max=16
          @on-change="keyDown"
          :type="pwdType"
          placeholder="请输入密码..."
          v-model="userInfo.password">
          <span class="icon"
            slot="label">
            <i class="iconfont icon-password"></i>
          </span>
          <span class="showpw"
            slot="right"
            @click="changeType">
            <i class="iconfont icon-eye"
              :style="{ color: pwdColor }"></i>
          </span>
        </x-input>
        <x-button class="sign-in"
          :disabled="disabled"
          type="primary"
          @click.native="signIn()">
          <span class="btn-loading"
            v-if="loading">
            <img src="../../assets/tail-spin.svg">加载中
          </span>
          <span v-else>登录</span>
        </x-button>
        <router-link to="/forgetPassword">忘记密码</router-link>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton, InlineLoading } from 'vux'
export default {
  name: 'login',
  components: {
    Group,
    XInput,
    XButton,
    InlineLoading
  },
  data () {
    return {
      userInfo: {
        username: 'admin',
        password: '123456'
      },
      disabled: true,
      pwdType: 'password',
      pwdColor: '#B2B2B2',
      loading: false
    }
  },
  methods: {
    signIn () {
      if (this.userInfo.namename !== '' && this.userInfo.password !== '') {
        this.loading = true
        this.$store.dispatch('Login', this.userInfo).then(() => {
          this.$router.push({ path: '/' })
          this.loading = false
        })
      }
    },
    keyDown () {
      if (this.$refs.username.valid === true && this.username !== '' && this.$refs.password.valid === true && this.password !== '') {
        this.disabled = false
      } else {
        this.disabled = true
      }
    },
    changeType () {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
        this.pwdColor = '#41b883'
      } else {
        this.pwdType = 'password'
        this.pwdColor = '#B2B2B2'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/styles/color.scss";
@import "src/assets/styles/mixins.scss";
body,
/deep/ html {
  background: #fff !important;
}
.form /deep/ {
  .weui-cells:before,
  .weui-cells:after,
  .weui-cell:before {
    border-width: 0;
  }
  .weui-cell {
    background: #f2f2f2;
  }
  .weui-btn:after {
    border-width: 0;
  }
  .weui-btn_primary {
    background: $default_color;
  }
  .weui-btn_disabled.weui-btn_primary {
    background: $default_light_color;
  }
  .weui-btn_primary:not(.weui-btn_disabled):active {
    background: $default_dark_color;
  }
}
.logo {
  padding-top: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: px2rem(100);
    height: px2rem(100);
  }
}
.form {
  margin: px2rem(64) auto 0;
  width: 80%;
  .input {
    margin-top: px2rem(20);
  }
  .sign-in {
    margin-top: px2rem(20);
  }
}
.showpw {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: px2rem(24);
  height: px2rem(24);
  i {
    display: block;
    font-size: px2rem(22);
  }
}
.icon {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: px2rem(24);
  height: px2rem(24);
  margin-right: px2rem(15);
  i {
    display: block;
    font-size: px2rem(24);
  }
}
.btn-loading {
  height: px2rem(16);
  line-height: px2rem(16);
  font-size: px2rem(14);
  img {
    height: px2rem(16);
    margin-right: px2rem(8);
    vertical-align: middle;
  }
}
</style>
