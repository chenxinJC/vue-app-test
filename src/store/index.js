import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
})

export default store
