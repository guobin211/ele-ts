<template>
  <div class="full-page">
    <el-container class="full-page">
      <el-aside class="aside" width="200px">
        <m-side-nav></m-side-nav>
      </el-aside>
      <el-container>
        <el-header style="background: #219be9; color: #fff">
          <m-header></m-header>
        </el-header>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MSideNav from '@/common/m-side-nav/MSideNav.vue';
  import MHeader from '@/common/m-header/MHeader.vue';

  @Component({
    name: 'MLayout',
    components: {
      MSideNav,
      MHeader
    }
  })
  export default class Layout extends Vue {

  }
</script>

<style scoped lang="scss">
  .full-page {
    .aside {
      background: rgb(84, 92, 100);
    }
  }
</style>
