<template>
  <layout>
    <template>
      <div class="full-page">
        state
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
  export default class Home extends Vue {
    created() {
    }
  }
</script>

<style lang="scss" scoped>

</style>
