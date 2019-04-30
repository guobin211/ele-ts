<template>
  <layout>
    <template>
      <div class="full-page">
        rxjs
      </div>
    </template>
  </layout>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Layout from '@/components/Layout.vue';

  @Component({
    components: {
      Layout
    }
  })
  export default class RxjsPage extends Vue {
    created() {
    }
  }
</script>

<style lang="scss" scoped>

</style>
