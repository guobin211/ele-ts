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
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item disabled index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
  import { Mutation, State } from 'vuex-class';

  @Component
  export default class MSideNav extends Vue {

    sideNavData = [
      {title: '导航一', path: '/', icon: 'el-icon-menu'}
    ];

    handleOpen(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

    handleClose(key: any, keyPath: any) {
      console.log(key, keyPath);
    }

  }
</script>

<style lang="scss" scoped>
  .side-nav {

  }
</style>
