import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN_STATE] (state, falg) {
    state.loginState = false
  }
}

export default mutations
