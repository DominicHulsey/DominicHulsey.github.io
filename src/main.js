// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFullPage from 'vue-fullpage.js'
import Parallax from "vue-parallaxy";

// @ts-ignore
Vue.use(VueFullPage);

Vue.config.productionTip = false



// @ts-ignore
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
