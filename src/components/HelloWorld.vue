<template>
  <div class="components">
    HelloWorld
    
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'HelloWorld'
  })
  export default class HelloWorld extends Vue {
  }
</script>

<style scoped lang="scss">
  .components {
  }
</style>
