import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import SvgIcon from 'vue-svgicon'
import '@/icons/components'

import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.use(VueI18n)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
