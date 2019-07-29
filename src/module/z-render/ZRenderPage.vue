<template>
  <div class="">
    ZRenderPage
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Emit, Watch } from 'vue-property-decorator';
    import { Mutation, State } from 'vuex-class';
    import { Render } from '@/module/z-render/Render';

    @Component({
        name: 'ZRenderPage'
    })
    export default class ZRenderPage extends Vue implements Render {

        render() {
        };

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
