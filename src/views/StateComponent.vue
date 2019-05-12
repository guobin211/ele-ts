<template>
  <layout>
    <template>
      <div class="full-page">
        <h1>three.js</h1>
        <div class="three-warp" ref="threeWarp">
          <three-line></three-line>
        </div>
      </div>
    </template>
  </layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';
  import ThreeLine from '@/components/ThreeLine.vue';

  @Component({
    components: {
      Layout,
      ThreeLine
    }
  })
  export default class Home extends Vue {
    created() {
    }

    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  .full-page{
    h1{
      font-size: 32px;
      line-height: 32px;
      height: 32px;
    }
    .three-warp{
      width: 100%;
      height: 60vh;
      border: 1px solid #219be9;
    }
  }
</style>
