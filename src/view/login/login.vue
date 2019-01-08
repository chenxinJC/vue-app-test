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
    width: 100px;
    height: 100px;
  }
}
.form {
  margin: 64px auto 0;
  width: 80%;
  .input {
    margin-top: 20px;
  }
  .sign-in {
    margin-top: 20px;
  }
}
.showpw {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  i {
    display: block;
    font-size: 22px;
  }
}
.icon {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 15px;
  i {
    display: block;
    font-size: 24px;
  }
}
.btn-loading {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  img {
    height: 20px;
    margin-right: 8px;
    vertical-align: middle;
  }
}
</style>
