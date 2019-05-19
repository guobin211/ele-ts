<template>
  <div class="main-page">
    <div class="left">
      <m-side-nav :nav-data="navData"></m-side-nav>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MSideNav from '@/common/m-side-nav/MSideNav.vue';

  @Component({
    name: 'PageIndex',
    components: {
      MSideNav
    }
  })
  export default class PageIndex extends Vue {
    navData = [
      {path: '/index/canvas', name: 'canvas模块'},
      {path: '/index/three', name: 'three.js模块'},
      {path: '/index/zrender', name: 'zrender模块'},
      {path: '/index/vuex', name: 'vuex模块'}
    ];
  }
</script>

<style scoped lang="scss">
  .main-page {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;

    .left {
      width: 200px;
      height: 100%;
      background: rgb(84, 92, 100);
    }

    .right {
      flex: 1;
    }
  }
</style>
