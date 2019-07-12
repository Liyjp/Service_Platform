<template>
  <div id="app1">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#C0C4CC"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link id="index1" to="/hasApplied/index1" tag="el-menu-item" index="1">我申请的项目</router-link>
      <router-link id="index2" to="/hasApplied/index2" tag="el-menu-item" index="2">立项项目管理</router-link>
      <router-link id="index3" to="/hasApplied/index3" tag="el-menu-item" index="3">中期检查申请</router-link>
      <router-link id="index4" to="/hasApplied/index4" tag="el-menu-item" index="4">项目变更申请</router-link>
      <router-link id="index5" to="/hasApplied/index5" tag="el-menu-item" index="5">项目变更指导教师申请</router-link>
      <router-link id="index6" to="/hasApplied/index6" tag="el-menu-item" index="6">项目变更记录</router-link>
      <router-link id="index7" to="/hasApplied/index7" tag="el-menu-item" index="7">项目结题申请</router-link>
      <router-link id="index8" to="/hasApplied/index8" tag="el-menu-item" index="8">结题项目管理</router-link>
    </el-menu>
    <!--<div class="test">项目变更指导教师申请</div>-->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">指导老师变更</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'index5',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
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
