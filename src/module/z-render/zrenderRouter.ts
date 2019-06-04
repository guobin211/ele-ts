import { RouteConfig } from 'vue-router';

/**
 * zrenderRouter
 * @author guobin201314@gmail.com on 2019-05-16
 */

export const zrenderRouter: RouteConfig = {
  path: '/index/zrender',
  component: () => import(/* webpackChunkName: "StateComponent" */ './ZRenderPage.vue')
};
