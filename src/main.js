import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
	VueCompositionAPI,
  render: h => h(App)
}).$mount('#app')
