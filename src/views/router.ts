import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

Vue.use(Router);

const canvas: RouteConfig = {
  path: '/state',
  component: () => import(/* webpackChunkName: "StateComponent" */ './StateComponent.vue')
};

export default new Router({

  routes: [
    {
      path: '',
      redirect: '/vuex'
    },
    {
      path: '/state',
      component: () => import(/* webpackChunkName: "StateComponent" */ './StateComponent.vue')
    },
    {
      path: '/class',
      component: () => import(/* webpackChunkName: "class" */ './ClassPage.vue')
    },
    {
      path: '/vuex',
      component: () => import(/* webpackChunkName: "VuexPage" */ './VuexPage.vue')
    },
    {
      path: '**',
      redirect: '/vuex'
    }
  ]
});
