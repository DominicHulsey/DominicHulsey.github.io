import Vue from 'vue'
import Vuex from 'vuex'
import { fileURLToPath } from 'url';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isActive: "Home",
    flip: false
  },
  mutations: {
    setActive1(state, data) {
      state.isActive = data;
    },
    flipped(state) {
      state.flip = !state.flip
    }
  },
  actions: {
    setActive({ commit, dispatch }, payload) {
      commit("setActive1", payload)
      commit("flipped")
    },
  }
})
