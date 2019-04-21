import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: "Home"
  },
  mutations: {
    setActive1(state, data) {
      state.isActive = data;
    }
  },
  actions: {
    setActive({ commit, dispatch }, payload) {
      commit("setActive1", payload)
    }
  }
})
