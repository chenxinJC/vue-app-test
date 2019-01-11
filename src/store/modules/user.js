import md5 from 'js-md5'
import {ERR_OK} from 'api/config'
import {
  login,
  getUserInfo,
  getUserStatus
} from 'api/login'
import {
  getToken,
  setToken,
  getUuid,
  setUuid
} from 'utils/auto'

const user = {
  state: {
    ext_info: {},
    register_ip: '',
    register_time: '',
    role: '',
    rolename: '',
    username: '',
    uuid: getUuid(),
    token: getToken()
  },

  mutations: {
    SET_EXT_INFO: (state, extInfo) => {
      state.ext_info = extInfo
    },
    SET_REGISTER_IP: (state, registerIp) => {
      state.register_ip = registerIp
    },
    SET_REGISTER_TIME: (state, registerTime) => {
      state.register_time = registerTime
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_ROLENAME: (state, rolename) => {
      state.rolename = rolename
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_UUID: (state, uuid) => {
      state.uuid = uuid
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 用户名登录
    Login ({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = md5(userInfo.password)
      return new Promise((resolve, reject) => {
        login(username, password).then((res) => {
          let token = res.data.data.token
          let uuid = res.data.data.uuid
          commit('SET_TOKEN', token)
          setToken(token)
          setUuid(uuid)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 用户登录状态
    GetUserStatus ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserStatus(state.uuid, state.token).then(res => {
          if (res.data.err_code === ERR_OK) {
            return false
          }
          const data = res.data.info
          // if (data.role && data.role.length > 0) {
          // }
          commit('SET_ROLE', data.role)
          commit('SET_TOKEN', '')
          console.log(state.role)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.uuid, state.token).then(res => {
          if (res.data.err_code === ERR_OK) {
            return false
          }
          const data = res.data.data.info
          commit('SET_ROLE', data.role)
          commit('SET_EXT_INFO', data.exe_info)
          commit('SET_REGISTER_TIME', data.register_time)
          commit('SET_ROLENAME', data.rolename)
          commit('SET_USERNAME', data.username)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user
