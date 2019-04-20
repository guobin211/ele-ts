import Vue from 'vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import App from './App.vue';
// element 组件
import { Button, Message, Select } from 'element-ui';

Vue.config.productionTip = false;

Vue.prototype.$message = Message;
Vue.component('el-button', Button);
Vue.component('el-select', Select);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
