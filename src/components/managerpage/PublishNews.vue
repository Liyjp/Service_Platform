<template>
  <el-form ref="form" :model="form" label-width="80px" style="width: 600px ; max-height: 800px">
    <el-form-item label="新闻标题">
      <el-input v-model="form.newsname"></el-input>
    </el-form-item>
    <el-form-item label="作者">
      <el-input v-model="form.author"></el-input>
    </el-form-item>

    <el-form-item label="新闻内容">
      <el-input type="textarea" v-model="form.content" :rows="15"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即发布</el-button>
      <el-button @click="clear">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "PublishNews",
    data() {
      return {
        form: {
          newsname:'',
          author:'',
          content:'',
          newsdate:''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        var date1 = new Date();
        this.form.newsdate = this.getDays(date1);
        //数据库操作
        var newsname = this.form.newsname;
        var author = this.form.author;
        var content = this.form.content;
        var newdate = this.form.newsdate;
        this.$http.post('/api/user/addNews', {
          newsname: newsname,
          newsdate: newdate,
          author: author,
          content: content,
        },{}).then((response) => {
          console.log(response);
        });
        this.$router.push({path: '/ShowNews'})
      },
      getDays(day){
        var years = day.getFullYear();
        var month = day.getMonth();
        var da = day.getDate();
        return years+"年"+month+"月"+da+"日";
      },
      clear(){
        this.form.newsname = '';
        this.form.author = '';
        this.form.content = '';
      }
    }
    }
</script>

<style scoped>

</style>
