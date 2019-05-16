<template>
  <div class="">
    Coordinate
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
  import { Mutation, State } from 'vuex-class';

  @Component({
    name: 'Coordinate'
  })
  export default class Coordinate extends Vue {

    @State('author') stateAuthor: string;

    @Mutation('SET_AUTHOR') mutationAuthor: any;

    @Watch('data')
    onDataChanged(val: string, oldVal: string) {
    }

    @Emit('reset')
    onReset(n: number) {
    }

    created() {

    }

    mounted() {

    }

  }
</script>

<style scoped>

</style>
