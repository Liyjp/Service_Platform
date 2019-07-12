// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import echarts from 'echarts'
import  'echarts/theme/macarons.js'
import SlideVerify from 'vue-monoplasty-slide-verify';
import '../theme/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import VueResource from 'vue-resource'

import global from '@/components/common'
Vue.prototype.COMMON = global;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(SlideVerify);
// Vue.use(VueResource);
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
