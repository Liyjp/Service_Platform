<template>
  <div id="app1">
  <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm">
    <el-form-item label="项目名称：" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="项目类型：" prop="type">
      <el-select v-model="ruleForm.type" placeholder="请选择项目类型" style="float: left">
        <el-option label="创新创业训练" value="创新创业训练"></el-option>
        <el-option label="创新开放实验" value="创新开放实验"></el-option>
        <el-option label="学科竞赛" value="学科竞赛"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目等级：" prop="rank">
      <el-select v-model="ruleForm.rank" placeholder="请选择项目等级" style="float: left">
        <el-option label="校级" value="校级"></el-option>
        <el-option label="省级" value="省级"></el-option>
        <el-option label="国家级" value="国家级"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属学科：" prop="major">
      <el-select v-model="ruleForm.major" placeholder="请选择所属学科" style="float: left">
        <el-option label="艺术学" value="艺术学"></el-option>
        <el-option label="经济学" value="经济学"></el-option>
        <el-option label="文学" value="文学"></el-option>
        <el-option label="理学" value="理学"></el-option>
        <el-option label="工学" value="工学"></el-option>
        <el-option label="管理学" value="管理学"></el-option>
        <el-option label="法学" value="法学"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属学院：" prop="college">
      <el-select v-model="ruleForm.college" placeholder="请选择所属学院" style="float: left">
        <el-option label="信息工程学院" value="信息工程学院"></el-option>
        <el-option label="理学院" value="理学院"></el-option>
        <el-option label="农学院" value="农学院"></el-option>
        <el-option label="林学院" value="林学院"></el-option>
        <el-option label="植物保护学院" value="植物保护学院"></el-option>
        <el-option label="动物科技学院" value="动物科技学院"></el-option>
        <el-option label="水利与建筑工程学院" value="水利与建筑工程学院"></el-option>
        <el-option label="机械与电子工程学院" value="机械与电子工程学院"></el-option>
        <el-option label="食品科学与工程学院" value="食品科学与工程学院"></el-option>
        <el-option label="生命科学学院" value="生命科学学院"></el-option>
        <el-option label="葡萄酒学院" value="葡萄酒学院"></el-option>
        <el-option label="经济管理学院" value="经济管理学院"></el-option>
        <el-option label="创新实验学院" value="创新实验学院"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目来源：" prop="source">
      <el-select v-model="ruleForm.source" placeholder="请选择项目来源" style="float: left">
        <el-option label="学生自选项目" value="学生自选项目"></el-option>
        <el-option label="教师科研项目" value="教师科研项目"></el-option>
        <el-option label="社会企业委托项目" value="社会企业委托项目"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="项目周期：" prop="period">
      <el-select v-model="ruleForm.period" placeholder="请选择项目周期" style="float: left">
        <el-option label="一年期" value="一年期"></el-option>
        <el-option label="两年期" value="两年期"></el-option>
        <el-option label="三年期" value="三年期"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="申请经费(元)：" prop="money">
      <el-input v-model="ruleForm.money"></el-input>
    </el-form-item>
    <el-form-item label="指导老师(审核老师)：" prop="teacher">
      <el-input v-model="ruleForm.teacher"></el-input>
    </el-form-item>
    <el-form-item label="申请人：" prop="captain">
      <el-input v-model="ruleForm.captain"></el-input>
    </el-form-item>
    <el-form-item label="申请人联系方式：" prop="phonenum">
      <el-input v-model="ruleForm.phonenum"></el-input>
    </el-form-item>
    <el-form-item label="申请人邮箱：" prop="emailnum">
      <el-input v-model="ruleForm.emailnum"></el-input>
    </el-form-item>
    <el-form-item label="成果形式：" prop="result" style="display: block">
      <el-checkbox-group v-model="ruleForm.result" style="float: left">
        <el-checkbox label="实物" name="result"></el-checkbox>
        <el-checkbox label="软件" name="result"></el-checkbox>
        <el-checkbox label="研究报告" name="result"></el-checkbox>
        <el-checkbox label="高水平论文" name="result"></el-checkbox>
        <el-checkbox label="经济效益" name="result"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="项目简介：" prop="describe1"  style="display: block">
      <el-input type="textarea" v-model="ruleForm.describe1" style="width: 600px;"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  name: 'sApply',
  data () {
    return {
      ruleForm: {
        name: '',
        type: '',
        rank: '',
        major: '',
        college: '',
        source: '',
        period: '',
        money: '',
        teacher: '',
        captain: '',
        phonenum: '',
        emailnum: '',
        result: [],
        describe1: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
          { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择项目类型', trigger: 'change' }
        ],
        rank: [
          { required: true, message: '请选择项目等级', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请选择所属学科', trigger: 'change' }
        ],
        college: [
          { required: true, message: '请选择所属学院', trigger: 'change' }
        ],
        source: [
          { required: true, message: '请选择项目来源', trigger: 'change' }
        ],
        period: [
          { required: true, message: '请选择项目周期', trigger: 'change' }
        ],
        money: [
          { required: true, message: '请输入申请经费', trigger: 'blur' },
          { min: 3, max: 5, message: '经费范围应为100-99999元', trigger: 'blur' }
        ],
        teacher: [
          { required: true, message: '请输入指导老师', trigger: 'blur' }
        ],
        captain: [
          { required: true, message: '请填写申请人姓名', trigger: 'blur' }
        ],
        phonenum: [
          { required: true, message: '请填写申请人联系方式', trigger: 'blur' }
        ],
        emailnum: [
          { required: true, message: '请填写申请人邮箱', trigger: 'blur' }
        ],
        result: [
          { type: 'array', required: true, message: '请至少选择一个成果形式', trigger: 'change' }
        ],
        describe1: [
          { required: true, message: '请填写项目简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      var name = this.ruleForm.name
      var type = this.ruleForm.type
      var rank = this.ruleForm.rank
      var major = this.ruleForm.major
      var college = this.ruleForm.college
      var source = this.ruleForm.source
      var money = this.ruleForm.money
      var period = this.ruleForm.period
      var teacher = this.ruleForm.teacher
      var captain = this.ruleForm.captain
      var phonenum = this.ruleForm.phonenum
      var emailnum = this.ruleForm.emailnum
      var describe1 = this.ruleForm.describe1
      var result1
      var result2
      var result3
      var result4
      var result5
      result1 = this.ruleForm.result.indexOf('实物') > -1
      result2 = this.ruleForm.result.indexOf('软件') > -1
      result3 = this.ruleForm.result.indexOf('研究报告') > -1
      result4 = this.ruleForm.result.indexOf('高水平论文') > -1
      result5 = this.ruleForm.result.indexOf('经济效益') > -1
      var t = new Date()

      var time = t.getFullYear() + '年' + (t.getMonth() + 1) + '月' + t.getDate() + '日'

      this.$http.post('/api/user/addProject', {
        name: name,
        type: type,
        rank: rank,
        major: major,
        college: college,
        source: source,
        money: money,
        period: period,
        teacher: teacher,
        captain: captain,
        phonenum: phonenum,
        emailnum: emailnum,
        describe1: describe1,
        result1: result1,
        result2: result2,
        result3: result3,
        result4: result4,
        result5: result5,
        time: time
      }, {}).then((response) => {
        console.log(response)
      })
      /// //////////////////////////////////////////////////////////////////////////////////
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit success!')
          /*          console.log(this.ruleForm.result) */
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
/*  div{
    background: aqua;
    width: 1234px;
    height: 573px;
  }*/
el-form{
  width: 100%;
}
</style>
