import Vue from './el-ui';
import router from './views/router';
import store from './store/index';
import './registerServiceWorker';
import App from './App.vue';

import './styles/common.scss';
// element 组件
import { Loading, Message, MessageBox, Notification } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;

Vue.config.productionTip = false;
router.beforeEach((to: any, from: any, next: () => void) => {
  console.log(to);
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
