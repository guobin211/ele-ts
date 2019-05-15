<template>
  <div class="side-nav">
    <el-row>
      <el-col :span="24">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="currentIndex"
            text-color="#fff">
          <el-menu-item :index="index + 1" @click="navTo(item)" v-for="(item, index) in routeData"
                        :key="index">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>

        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  export interface RouteData {
    name: string,
    path: string
  }

  @Component
  export default class MSideNav extends Vue {

    currentIndex = 1;

    routeData: RouteData[] = [
      {
        name: '状态管理', path: '/vuex'
      },
      {
        name: '高阶组件', path: '/state'
      },
      {
        name: '面向对象', path: '/class'
      },
      {
        name: 'Canvas', path: '/canvas'
      },
      {
        name: 'ZRender', path: '/render'
      },
      {
        name: 'Three.js', path: '/three'
      }
    ];

    navTo(p: RouteData) {
      this.$router.push({
        path: p.path
      });
    }

    created() {
      this.checkCurrentIndex();
    }

    private checkCurrentIndex() {
      for (let i = 0; i < this.routeData.length; i++) {
        if (this.routeData[i].path === this.$route.fullPath) {
          this.currentIndex = i + 1;
          break;
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  .side-nav {

  }
</style>
