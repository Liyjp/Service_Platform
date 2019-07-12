<template>
  <div id="app1">
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" style="margin-top: 20px">
      <el-form-item label="项目名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="使用原因：" prop="reason">
        <el-input v-model="ruleForm.reason"></el-input>
      </el-form-item>
      <el-form-item label="使用日期：" prop="usedate">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.usedate"></el-date-picker>
      </el-form-item>
      <el-form-item label="使用金额(元)：" prop="usemoney">
        <el-input v-model="ruleForm.usemoney"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
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
        prop="reason"
        label="使用原因">
      </el-table-column>
      <el-table-column
        prop="usedate"
        label="使用日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="usemoney"
        label="使用金额(元)"
        width="110">
      </el-table-column>
      <el-table-column
        prop="check1"
        label="审核状态"
        width="80">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'moneyManage',
  data () {
    return {
      tableData: [],
      name: '',
      ruleForm: {
        name: '',
        reason: '',
        usedate: '',
        usemoney: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入项目名称', trigger: 'blur'},
          {min: 5, max: 30, message: '请输入正确的项目名称', trigger: 'blur'}
        ],
        reason: [
          {required: true, message: '请填写经费使用原因', trigger: 'blur'}
        ],
        usedate: [
          {required: true, message: '请输入使用日期', trigger: 'blur'}
        ],
        usemoney: [
          {required: true, message: '请输入使用金额', trigger: 'blur'}
        ]
      }
    }
  },
  mounted: function () {
    this.name = this.$route.query.name
    console.log(this.name)
    this.show(this.name)
  },
  methods: {
    submitForm (formName) {
      var name = this.ruleForm.name
      var reason = this.ruleForm.reason
      var usedate = this.getDays(this.ruleForm.usedate)
      var usemoney = this.ruleForm.usemoney
      this.$http.post('/api/user/addFunding', {
        name: name,
        reason: reason,
        usedate: usedate,
        usemoney: usemoney
      }, {}).then((response) => {
        console.log(response)
      })
      /// ///////////////////////////////////////////////////
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit success!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getDays (day) {
      var years = day.getFullYear()
      var month = (day.getMonth() + 1)
      var da = day.getDate()
      return years + '年' + month + '月' + da + '日'
    },
    show (name1) {
      this.$http.post('/api/user/queryFunding', {name: name1}, {}).then((res) => {
        console.log(res)
        this.tableData = res.data
        /* let list = []
        let resData = res.data
        resData.map((item, index) => {
          let obj = {}
          obj['name'] = item.name
          obj['reason'] = item.reason
          obj['usedate'] = item.usedate
          obj['usemoney'] = item.usemoney
          obj['check1'] = item.check1
          list.push(obj)
        })
        this.tableData = list */
        /* console.log(list) */
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
#app1{
  width: 82%;
}
</style>
