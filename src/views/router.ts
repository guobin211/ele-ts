import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ './Register.vue'),
    },
  ],
});
