<template>
  <div class="full-page">
    <el-container class="full-page">
      <el-aside class="aside" width="200px">
        <m-side-nav></m-side-nav>
      </el-aside>
      <el-container>
        <el-header>
          <m-header></m-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MSideNav from '@/common/m-side-nav/MSideNav.vue';
  import MHeader from '@/common/m-header/MHeader.vue';

  @Component({
    components: {
      MSideNav,
      MHeader
    },
  })
  export default class Home extends Vue {
  }
</script>

<style lang="scss" scoped>
  .full-page {
    .aside {
      background: bisque;
    }
  }
</style>
