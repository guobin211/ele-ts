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
      component: () => import(/* webpackChunkName: "StateComponent" */ './StateComponent.vue')
    },
    {
      path: '/rxjs',
      component: () => import(/* webpackChunkName: "rxjs" */ './RxjsPage.vue')
    },
    {
      path: '/class',
      component: () => import(/* webpackChunkName: "class" */ './ClassPage.vue')
    },
    {
      path: '/vuex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "VuexPage" */ './VuexPage.vue')
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ './Login.vue')
    }
  ]
});
