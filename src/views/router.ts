import Vue from 'vue';
import Router from 'vue-router';
import { canvasRouter } from '@/module/canvas/canvasRouter';
import { vuexRouter } from '@/module/vuex/vuexRouter';
import { threeRouter } from '@/module/three/threeRouter';
import { zrenderRouter } from '@/module/z-render/zrenderRouter';

Vue.use(Router);


export default new Router({

  routes: [
    {
      path: '',
      redirect: '/index/canvas/'
    },
    {
      path: '/index',
      component: () => import(/* webpackChunkName: "PageIndex" */ './PageIndex.vue'),
      children: [
        zrenderRouter,
        threeRouter,
        vuexRouter,
        canvasRouter
      ]
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "PageHome" */ './PageHome.vue'),
    },
    {
      path: '**',
      redirect: '/index/canvas/'
    }
  ]
});
