<template>
  <div id="app1">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#C0C4CC"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link id="index1" to="/hasApplied/index1" tag="el-menu-item" index="1"><i class="el-icon-s-claim"></i>我申请的项目</router-link>
      <router-link id="index2" to="/hasApplied/index2" tag="el-menu-item" index="2"><i class="el-icon-document"></i>立项项目管理</router-link>
      <router-link id="index3" to="/hasApplied/index3" tag="el-menu-item" index="3"><i class="el-icon-s-help"></i>中期检查申请</router-link>
      <router-link id="index4" to="/hasApplied/index4" tag="el-menu-item" index="4"><i class="el-icon-help"></i>项目变更申请</router-link>
      <!--
          <router-link id="index5" to="/hasApplied/index5" tag="el-menu-item" index="5"><i class="el-icon-s-order"></i>项目变更指导教师申请</router-link>
      -->
      <router-link id="index6" to="/hasApplied/index6" tag="el-menu-item" index="6"><i class="el-icon-s-order"></i>项目变更记录</router-link>
      <router-link id="index7" to="/hasApplied/index7" tag="el-menu-item" index="7"><i class="el-icon-thumb"></i>项目结题申请</router-link>
      <router-link id="index8" to="/hasApplied/index8" tag="el-menu-item" index="8"><i class="el-icon-set-up"></i>结题项目管理</router-link>
    </el-menu>
    <!--<div class="test">项目变更记录</div>-->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="项目名称"
        width="240">
      </el-table-column>
      <el-table-column
        prop="type"
        label="变更类型"
        width="240">
      </el-table-column>
      <el-table-column
        prop="time"
        label="申请日期"
        width="240">
      </el-table-column>
      <el-table-column
        prop="state"
        label="审核状态"
        width="240">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">删除记录</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'index6',
  data () {
    return {
      tableData: [{
        name: '我变更的项目1',
        type: '成员变更',
        time: '2017-09-09',
        state: '已通过'
      }, {
        name: '我变更的项目2',
        type: '内容变更',
        time: '2018-03-09',
        state: '驳回'
      }, {
        name: '我变更的项目3',
        type: '成员变更',
        time: '2018-09-09',
        state: '已通过'
      }, {
        name: '我变更的项目4',
        type: '内容变更',
        time: '2019-04-09',
        state: '审核中'
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>
/*  .test{
    height: 200px;
    width: 200px;
    background: aqua;
  }*/
  #app1{
    width: 1224px;
  }
</style>
