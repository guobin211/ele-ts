<template>
  <div class="side-nav">
    <el-row>
      <el-col :span="24">
        <el-menu
            @close="handleClose"
            @open="handleOpen"
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff">
          <el-menu-item index="1" @click="navTo('/vuex')">
            <i class="el-icon-menu"></i>
            <span slot="title">状态管理</span>
          </el-menu-item>

          <el-menu-item index="2" @click="navTo('/state')">
            <i class="el-icon-setting"></i>
            <span slot="title">高阶组件</span>
          </el-menu-item>


          <el-menu-item index="3" @click="navTo('/class')">
            <i class="el-icon-setting"></i>
            <span slot="title">面向对象</span>
          </el-menu-item>

          <el-menu-item index="4" @click="navTo('/rxjs')">
            <i class="el-icon-setting"></i>
            <span slot="title">响应式编程</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class MSideNav extends Vue {

    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    navTo(p: string) {
      this.$router.push({
        path: p
      });
    }

  }
</script>

<style lang="scss" scoped>
  .side-nav {

  }
</style>
