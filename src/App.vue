<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class App extends Vue {
  }
</script>
<style lang="scss">
  @import "styles/reset.css";

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 12px;
    position: relative;
  }

  #app {
    width: 100%;
    height: 100%;
  }

</style>
