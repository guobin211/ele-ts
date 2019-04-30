import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '',
      redirect: 'state'
    },
    {
      path: '/state',
      name: 'state',
      component: () => import(/* webpackChunkName: "StateComponent" */ './StateComponent.vue')
    },
    {
      path: '/rxjs',
      name: 'rxjs',
      component: () => import(/* webpackChunkName: "rxjs" */ './RxjsPage.vue')
    },
    {
      path: '/class',
      name: 'class',
      component: () => import(/* webpackChunkName: "class" */ './ClassPage.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "VuexPage" */ './VuexPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './Login.vue')
    }
  ]
});
