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
          <el-menu-item :index="index + ''" @click="navTo(item)" v-for="(item, index) in this.$props.navData" :key="index">
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

  @Component({
    name: 'MSideNav',
    props: {
      navData: {
        type: Array,
        defalt: []
      }
    }
  })
  export default class MSideNav extends Vue {

    currentIndex: string = '0';
  
    navTo(p: RouteData) {
      this.$router.push({
        path: p.path
      });
    }

    created() {
      this.currentIndex = this.getIndex();
    }

    private getIndex(): string {
      for (let i = 0; i <this.$props.navData.length ; i++) {
        if (this.$route.fullPath === this.$props.navData[i].path) {
          return i.toString();
        }
      }
      return '0'
    }
  }
</script>

<style lang="scss" scoped>
  .side-nav {
    width: 100%;
    height: 100%;
    .active{
      color: #ffd04b
    }
  }
</style>
