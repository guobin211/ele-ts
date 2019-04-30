<template>
  <layout>
    <template>
      <div class="full-page">
        <el-row>
          <el-col :span="12">
            <h1>state 数据状态</h1>
          </el-col>
          <el-col :span="6">
            <h1>mutation 同步操作</h1>
          </el-col>
          <el-col :span="6">
            <h1>actions 异步操作</h1>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <table class="m-table">
              <thead>
              <tr>
                <th>字段</th>
                <th>当前值</th>
                <th>数据类型</th>
                <th>初始值</th>
                <th>依赖</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>author</td>
                <td>admin</td>
                <td>string</td>
                <td>''</td>
                <td>无</td>
              </tr>
              </tbody>
            </table>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small">同步设置</el-button>
            <el-button type="primary" size="small">同步重置</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small">异步设置</el-button>
            <el-button type="primary" size="small">异步重置</el-button>
          </el-col>
        </el-row>
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
  export default class VuexPage extends Vue {
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .full-page {
    display: flex;
    flex-direction: column;

    .el-row {
      width: 100%;
      margin: 10px 0;
    }

    h1 {
      font-size: 16px;
      font-weight: 600;
    }

    .m-table {
      border: 1px solid #ccc;
      text-align: center;

      thead {
        border-bottom: 1px solid #ccc;

        tr {
          th {
            font-size: 16px;
            line-height: 32px;
            min-width: 90px;
            border-right: 1px solid #ccc;
          }
        }
      }

      tbody {
        tr {
          td {
            font-size: 14px;
            line-height: 28px;
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
</style>
