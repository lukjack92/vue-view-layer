import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

// Set auth header
Axios.defaults.headers.common['Authorization'] = `${store.state.token}`;
Axios.defaults.headers.common['Content-Type'] = 'application/json';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
