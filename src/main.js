import Vue from 'vue';
import { App } from './app';
import router from './router';
import store from './store';

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import lodash from 'lodash'
import VueLodash from 'vue-lodash'
Vue.use(VueLodash, lodash)

Vue.use(require('vue-chartist'))
Vue.use(require('vue-moment'));

// const router = new VueRouter({ mode: 'history', routes: routes });
// new Vue(Vue.util.extend({ router, store}, App)).$mount('#app');

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
