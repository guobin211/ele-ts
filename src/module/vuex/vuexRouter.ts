import { RouteConfig } from 'vue-router';

/**
 * vuexRouter
 * @author guobin201314@gmail.com on 2019-05-16
 */

export const vuexRouter: RouteConfig = {
  path: '/index/vuex',
  component: () => import(/* webpackChunkName: "StateComponent" */ './VuexPage.vue')
};
