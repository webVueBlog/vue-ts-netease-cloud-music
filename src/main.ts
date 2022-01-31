import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import SvgIcon from 'vue-svgicon'
import '@/assets/components'
import '@/utils/rem'
import VueMeta from 'vue-meta'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss'
import VueLazyload from 'vue-lazyload'
import { EMPTY_IMG } from './utils/dom'

Vue.use(VueMeta)

Vue.use(ElementUI)

Vue.use(VueLazyload, {
  loading: EMPTY_IMG,
  error: EMPTY_IMG,
})

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
