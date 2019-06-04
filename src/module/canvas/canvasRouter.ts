/**
 * canvasRouter
 * @author guobin201314@gmail.com on 2019-05-16
 */
import { RouteConfig } from 'vue-router';

export const canvasRouter: RouteConfig = {
  path: '/index/canvas',
  component: () => import(/* webpackChunkName: "StateComponent" */ './Coordinate.vue')
};
