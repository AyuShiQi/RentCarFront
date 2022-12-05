import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: '',
    permission: '用户',
    isAdmin: false 
  },
  getters: {
  },
  mutations: {
    updateLogin(state,login) {
      state.isLogin = login;
    },
    updateUserName(state,username) {
      state.userName = username;
    },
    updatePermission(state,permission) {
      state.permission = permission;
      if(permission==='管理员') {
        state.isAdmin = true;
      }
      else state.isAdmin = false;
    }
  },
  actions: {
  },
  modules: {
  }
});
