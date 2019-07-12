<template>
  <div>
    <div class="theTitle" style="margin-bottom: 20px"><span>添加自主项目信息</span></div>
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="170px" class="demo-ruleForm">
      <el-form-item label="项目名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!--    <el-col :span="11">-->
      <el-form-item label="项目类型：" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择项目类型" style="float: left">
          <el-option label="创新创业训练" value="创新创业训练"></el-option>
          <el-option label="创新开放实验" value="创新开放实验"></el-option>
          <el-option label="学科竞赛" value="学科竞赛"></el-option>
        </el-select>
      </el-form-item>
      <!--    </el-col>
          <el-col :span="11">-->
      <el-form-item label="项目等级：" prop="rank">
        <el-select v-model="ruleForm.rank" placeholder="请选择项目等级" style="float: left">
          <el-option label="校级" value="校级"></el-option>
          <el-option label="省级" value="省级"></el-option>
          <el-option label="国家级" value="国家级"></el-option>
        </el-select>
      </el-form-item>
      <!--    </el-col>
          <el-col :span="11">-->
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
      <el-form-item label="活动主办单位：" prop="unit">
        <el-input v-model="ruleForm.unit"></el-input>
      </el-form-item>
      <el-form-item label="完成时间：" prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"></el-date-picker>
      </el-form-item>
      <el-form-item label="授权/鉴定/发奖机构：" prop="institution">
        <el-input v-model="ruleForm.institution"></el-input>
      </el-form-item>
      <el-form-item label="获奖等级：" prop="class1">
        <el-input v-model="ruleForm.class1"></el-input>
      </el-form-item>
      <el-form-item label="成果描述：" prop="describe1"  style="display: block">
        <el-input type="textarea" v-model="ruleForm.describe1" style="width: 750px;"></el-input>
      </el-form-item>
      <el-form-item label="参与人：" prop="participant">
        <el-input v-model="ruleForm.participant"></el-input>
      </el-form-item>
      <el-form-item label="指导教师：" prop="teacher">
        <el-input v-model="ruleForm.teacher"></el-input>
      </el-form-item>
      <el-form-item style="display: block">
        <router-link to="/sDefault" style="text-decoration: none"><el-button type="primary" @click="submitForm('ruleForm')">添加</el-button></router-link>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'selfApply',
  data () {
    return {
      ruleForm: {
        name: '',
        type: '',
        rank: '',
        major: '',
        unit: '',
        date1: '',
        institution: '',
        class1: '',
        participant: '',
        teacher: '',
        describe1: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入项目名称', trigger: 'blur'},
          {min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur'}
        ],
        type: [
          {required: true, message: '请选择项目类型', trigger: 'change'}
        ],
        rank: [
          {required: true, message: '请选择项目等级', trigger: 'change'}
        ],
        major: [
          {required: true, message: '请选择所属学科', trigger: 'change'}
        ],
        unit: [
          {required: true, message: '请输入主办单位', trigger: 'blur'}
        ],
        date1: [
          {required: true, message: '请输入完成时间', trigger: 'blur'}
        ],
        institution: [
          {required: true, message: '请输入机构名', trigger: 'blur'}
        ],
        class1: [
          {required: true, message: '请输入获奖等级', trigger: 'blur'}
        ],
        teacher: [
          {required: true, message: '请输入指导老师', trigger: 'blur'}
        ],
        participant: [
          {required: true, message: '请填写参与人姓名', trigger: 'blur'}
        ],
        describe1: [
          {required: true, message: '请填写成果描述', trigger: 'blur'}
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
      var unit = this.ruleForm.unit
      var date1 = this.getDays(this.ruleForm.date1)
      var institution = this.ruleForm.institution
      var class1 = this.ruleForm.class1
      var describe1 = this.ruleForm.describe1
      var participant = this.ruleForm.participant
      var teacher = this.ruleForm.teacher
      this.$http.post('/api/user/addSelfProject', {
        name: name,
        type: type,
        rank: rank,
        major: major,
        unit: unit,
        date1: date1,
        institution: institution,
        class1: class1,
        describe1: describe1,
        participant: participant,
        teacher: teacher
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
.theTitle{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #ddd;
}
</style>
