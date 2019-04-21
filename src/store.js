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
      console.log(payload)
      switch (payload.anchor) {
        case 'page1': commit('setActive1', 'Home'); break;
        case 'page2': commit('setActive1', 'Portfolio'); break;
        case 'page3': commit('setActive1', 'Skills'); break;
        case 'page4': commit('setActive1', 'Contact'); break;
      }
    }
  }
})
