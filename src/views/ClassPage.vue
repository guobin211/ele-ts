<template>
  <layout>
    <template>
      <div class="full-page">
        class page
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
  export default class OopPage extends Vue {

  }
</script>

<style scoped>

</style>
