<template>
  <div id="app1">
    <div id="app3"><span>结题申请提交</span></div>
    <el-upload
      class="upload-demo"
      drag
      :before-remove="beforeRemove"
      :file-list="fileList"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传pdf/doc/docx文件</div>
    </el-upload>
    <div id="app2">
      <router-link to="/hasApplied/index7"><el-button @click="ensureSub" type="primary" round>确认提交</el-button></router-link>
      <router-link to="/hasApplied/index7"><el-button type="info" round>返回</el-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submitLast',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    beforeRemove (file) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    ensureSub () {
      let name1 = this.$route.query.name
      this.$http.post('/api/user/updateProject3', {name: name1}, {}).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  #app1{
    width: 82%;
  }
  #app2{
    margin: 60px;
  }
  #app3{
    background: snow;
    height: 40px;
    line-height: 40px;
    margin: 20px;
  }
</style>
