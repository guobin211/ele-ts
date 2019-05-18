<template>
  <div class="page-warp">
    ThreePage
    <three-line></three-line>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
  import { Mutation, State } from 'vuex-class';
  import ThreeLine from '@/components/ThreeLine.vue';

  @Component({
    name: 'ThreePage',
    components: {
      ThreeLine
    }
  })
  export default class ThreePage extends Vue {

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

<style scoped lang="scss">

</style>
