import { RouteConfig } from 'vue-router';

/**
 * threeRouter
 * @author guobin201314@gmail.com on 2019-05-16
 */
export const threeRouter: RouteConfig = {
  path: '/index/three',
  component: () => import(/* webpackChunkName: "StateComponent" */ './ThreePage.vue')
};
