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
        prop="name"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="money"
        label="批准经费（元）"
        width="80">
      </el-table-column>
      <el-table-column
        prop="time"
        label="立项时间"
        width="100">
      </el-table-column>
      <el-table-column
        prop="state"
        label="项目状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="progress"
        label="当前进度"
        width="80">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <router-link :to="{path:'/checkOption', query:{name:scope.row.name}}"><el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button></router-link>
          <el-button @click="progressMsg(scope.row.name)" type="text" size="small">进度管理</el-button>
          <router-link :to="{path:'/moneyManage', query:{name:scope.row.name}}"><el-button type="text" size="small">经费使用管理</el-button></router-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="block" ref="progress">
      <el-slider
        v-model="value"
        show-input>
      </el-slider>
      <el-button type="success" @click="progressManage" size="small">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index2',
  data () {
    return {
      tableData: [],
      value: 0
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
    progressMsg (name1) {
      this.$refs.progress.style.display = 'block'
      this.name = name1
    },
    progressManage () {
      console.log(this.value)
      this.$http.post('/api/user/updateProject1', {progress: this.value + '%', name: this.name}, {}).then((res) => {
        /* console.log(res) */
        /* console.log(value) */
      })
      let NewPage = '_empty' + '?time' + new Date().getTime() / 500
      this.$router.push(NewPage)
      this.$router.go(-1)
    },
    show () {
      this.$http.post('/api/user/queryProject2', {captain: this.COMMON.username1}, {}).then((res) => {
        /*   console.log(res) */
        // this.tableData = res.data
        let list = []
        let resData = res.data
        resData.map((item, index) => {
          let obj = {}
          obj['name'] = item.name
          obj['money'] = item.money
          obj['time'] = item.time
          obj['state'] = item.state
          obj['progress'] = this.countper(item.state) + '\%'
          list.push(obj)
        })
        /* console.log(list) */
        this.tableData = list
        /* console.log(this.tableData) */
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
  #app1{
    width: 82%;
  }
  .block{
    display: none;
  }
</style>
