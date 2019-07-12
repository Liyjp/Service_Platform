<template>
    <div id="app1">
      <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="captain"
        label="主持人">
      </el-table-column>
      <el-table-column
        prop="money"
        label="批准经费（元）">
      </el-table-column>
      <el-table-column
        prop="time"
        label="立项时间">
      </el-table-column>
      <el-table-column
        prop="phase"
        label="项目阶段">
      </el-table-column>
      <el-table-column
        prop="state"
        label="项目状态">
      </el-table-column>
        <el-table-column
          prop="progress"
          label="当前进度">
        </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <router-link :to="{path:'/checkOption', query:{name:scope.row.name}}"><el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button></router-link>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  name: 'onProject',
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
      this.$http.post('/api/user/queryProjectOn', {captain: this.COMMON.username1}, {}).then((res) => {
        console.log(res)
        /* this.tableData = res.data */
        let list = []
        let resData = res.data
        resData.map((item, index) => {
          let obj = {}
          obj['name'] = item.name
          obj['captain'] = item.captain
          obj['money'] = item.money
          obj['time'] = item.time
          obj['phase'] = item.phase
          obj['state'] = item.state
          obj['progress'] = this.countper(item.state) + '\%'
          list.push(obj)
        })
        console.log(list)
        this.tableData = list
        console.log(this.tableData)
      })
    },
    countper(per){
      if(per=="项目初期"){
        return 30;
      }
      if(per=="项目中期"){
        return 50;
      }
      if(per=="项目结题"){
        return 100;
      } else {
        return 0;
      }
    }
  }
}
</script>

<style scoped>
/*div{
  background: chartreuse;
  width: 1234px;
  height: 573px;
}*/
#app1{
  width: 83%;
}
</style>
