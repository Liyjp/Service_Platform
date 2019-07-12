<template>
    <div id="app1">
      <el-row>
<!--        <el-button type="success">提交审核</el-button>-->
        <router-link id="rl1" to="/sDefault/selfApply"><el-button type="primary">申报</el-button></router-link>
<!--        <el-button type="warning">修改</el-button>
        <el-button type="danger">删除</el-button>-->
        <el-button type="info" @click="show">刷新</el-button>
      </el-row>
      <el-table
      :data="tableData"
      border
      style="width: 100%">
      <!--  <el-table-column
          type="selection"
          width="35">
        </el-table-column>-->
      <el-table-column
        fixed
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="项目类别">
      </el-table-column>
      <el-table-column
        prop="date1"
        label="完成时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="活动主办单位">
      </el-table-column>
      <el-table-column
        prop="describe1"
        label="项目简介">
      </el-table-column>
      <el-table-column
        prop="state"
        label="审核状态"
        width="90">
      </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
<!--            <el-button type="text" size="small">提交审核</el-button>-->
            <!--<el-button type="text" size="small">修改</el-button>-->
            <el-button @click="del(scope.row.name)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: 'sDefault',
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
    del (name1) {
      console.log(name1)
      this.$http.post('/api/user/delSelfProject', {name: name1}, {}).then((res) => {
        /* console.log(res) */
      })
      let NewPage = '_empty' + '?time' + new Date().getTime() / 500
      this.$router.push(NewPage)
      this.$router.go(-1)
    },
    show () {
      this.$http.post('/api/user/querySelfProject9', {}, {}).then((res) => {
        /* console.log(res) */
        this.tableData = res.data
        /* let list = []
        let resData = res.data
        resData.map((item, index) => {
          let obj = {}
          obj['name'] = item.name
          obj['type'] = item.type
          obj['date1'] = item.date1
          obj['unit'] = item.unit
          obj['describe1'] = item.describe1
          obj['state'] = item.state
          list.push(obj)
        })
        /!* console.log(list) *!/
        this.tableData = list
        /!* console.log(this.tableData) *!/ */
      })
    }
  }
}
</script>

<style scoped>
/*div{
  background: gold;
  width: 86%;
  height: 573px;
}*/
  #app1{
    width: 82%;
  }
</style>
