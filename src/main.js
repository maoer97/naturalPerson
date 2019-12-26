// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'jquery'
import echarts from 'echarts'
import './assets/css/base.less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible'
import initEcharts from './util/initEcharts'

Vue.prototype.$initEcharts = initEcharts
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
Vue.use(ElementUI);
Vue.prototype.$axios=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

