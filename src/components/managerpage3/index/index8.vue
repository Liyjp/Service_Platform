<template>
  <div id="app1">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#C0C4CC"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link style="width: 132px" id="index1" to="/hasApplied/index1" tag="el-menu-item" index="1">我申请的项目</router-link>
      <router-link style="width: 132px" id="index2" to="/hasApplied/index2" tag="el-menu-item" index="2">立项项目管理</router-link>
      <router-link style="width: 132px" id="index3" to="/hasApplied/index3" tag="el-menu-item" index="3">中期检查申请</router-link>
      <router-link style="width: 132px" id="index4" to="/hasApplied/index4" tag="el-menu-item" index="4">项目变更申请</router-link>
      <!--
          <router-link id="index5" to="/hasApplied/index5" tag="el-menu-item" index="5"><i class="el-icon-s-order"></i>项目变更指导教师申请</router-link>
      -->
      <!--    <router-link id="index6" to="/hasApplied/index6" tag="el-menu-item" index="6"><i class="el-icon-s-order"></i>项目变更记录</router-link>-->
      <router-link style="width: 132px" id="index7" to="/hasApplied/index7" tag="el-menu-item" index="7">项目结题申请</router-link>
      <router-link style="width: 132px" id="index8" to="/hasApplied/index8" tag="el-menu-item" index="8">结题项目一览</router-link>
    </el-menu>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="college"
        label="所属学院">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="money"
        label="批准经费"
        width="100">
      </el-table-column>
      <el-table-column
        prop="starttime"
        label="立项时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="endtime"
        label="结题时间"
        width="120">
      </el-table-column>
      <!--<el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          &lt;!&ndash;<el-button type="text" size="small">结题查看</el-button>&ndash;&gt;
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'index8',
  data () {
    return {
      tableData: []
    }
  },
  mounted: function () {
    this.show()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (row) {
      console.log(row)
    },
    show () {
      this.$http.post('/api/user/queryProject8', {captain: this.COMMON.username1}, {}).then((res) => {
        console.log(res)
        this.tableData = res.data
        /* let list = []
        let resData = res.data
        resData.map((item, index) => {
          let obj = {}
          obj['college'] = item.college
          obj['name'] = item.name
          obj['money'] = item.money
          obj['starttime'] = item.starttime
          obj['endtime'] = item.endtime
          list.push(obj)
        })
        console.log(list)
        this.tableData = list
        console.log(this.tableData) */
      })
    }
  }
}
</script>

<style scoped>
  #app1{
    width: 82%;
  }
</style>
