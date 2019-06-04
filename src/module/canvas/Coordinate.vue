<template>
  <div class="">
    Coordinate
    <el-button type="primary">button</el-button>
  </div>
</template>

<script lang="ts">
  import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
  import { Mutation, State } from 'vuex-class';
  import { eventBus } from '@/utils/rxjs/event-bus';

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
      this.$message.info('message');
      eventBus.registerObserver('APP_EVENT', this);
    }

    notify(data: any) {
      console.log(data);
    }

    mounted() {

    }

  }
</script>

<style scoped>

</style>
