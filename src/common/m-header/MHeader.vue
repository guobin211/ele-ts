<template>
  <div class="m-header">
    <h1>Vue Typescript</h1>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: 'MHeader'
  })
  export default class MHeader extends Vue {

  }
</script>

<style scoped lang="scss">
  .m-header {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    vertical-align: center;

    h1 {
      font-weight: 700;
      font-size: 16px;
    }
  }
</style>
