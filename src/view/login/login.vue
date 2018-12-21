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
          v-model="userInfo.username"></x-input>
        <x-input class="input"
          ref="password"
          title=""
          required
          :min=6
          :max=16
          @on-change="keyDown"
          type="password"
          placeholder="请输入密码..."
          v-model="userInfo.password"></x-input>
        <x-button class="sign-in"
          :disabled="disabled"
          type="primary"
          @click.native="signIn()">登录</x-button>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
export default {
  name: 'login',
  components: {
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      userInfo: {
        username: 'admin',
        password: '123456'
      },
      disabled: true
    }
  },
  methods: {
    signIn () {
      if (this.userInfo.namename !== '' && this.userInfo.password !== '') {
        this.$store.dispatch('Login', this.userInfo).then(() => {
          this.$router.push({ path: '/' })
        })
        // let data = {
        //   username: this.username,
        //   password: md5(this.password)
        // }
        // getLogin(data).then((res) => {
        //   res = res.data.data
        //   if (res.err_code === ERR_OK) {
        //     this.$router.push('./article')
        //   }
        // })
      }
    },
    keyDown () {
      if (this.$refs.username.valid === true && this.username !== '' && this.$refs.password.valid === true && this.password !== '') {
        this.disabled = false
      } else {
        this.disabled = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background: #41b883;
  }
  .weui-btn_disabled.weui-btn_primary {
    background: #80d2ae;
  }
}
.logo {
  margin-top: 20%;
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
</style>
