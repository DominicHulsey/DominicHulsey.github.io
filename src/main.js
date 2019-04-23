// @ts-ignore
import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFullPage from 'vue-fullpage.js'
import VueResizeText from 'vue-resize-text';

// @ts-ignore
Vue.use(VueResizeText)

// @ts-ignore
Vue.use(VueFullPage);
Vue.config.productionTip = false



// @ts-ignore
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
