<template>
<div style="text-align: center;">
  <div>
    <router-link to="/PublishNews"> <el-link icon="el-icon-edit" style="float: right">添加</el-link></router-link>
  </div>
  <el-table
    :data="tableData"
    style="width: 80% ;
    max-height: 800px;
    margin:0 auto"
  >
    <el-table-column
      prop="newsdate"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="newsname"
      label="新闻标题"
      width="300">
    </el-table-column>
    <el-table-column
      prop="author"
      label="作者"
      width="80">
    </el-table-column>
    <el-table-column
      prop="dels"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.row.newsname)"></el-button>
<!--        <el-button @click="show"> haha </el-button>-->
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
    export default {
        name: "ShowNews",
      data() {
        return {
          tableData: []
        }
      },
      mounted:function () {
        this.show();
      },
      methods:{
          del(date){
            console.log(date);
            //数据库操作
            this.$http.post('/api/user/delNews', {
              newsname:date
            },{}).then((res) => {
              console.log(res);
            });

            let NewPage = '_empty' + '?time=' + new Date().getTime()/500;
            this.$router.push(NewPage);
            this.$router.go(-1);
          },
        show(){
          this.$http.post('/api/user/showNews', {
          },{}).then((res) => {
            console.log(res);
            let list = [];
            let resData = res.data;
            resData.map((item,index)=>{
              let obj = {};
              obj["newsname"] = item.newsname;
              obj["newsdate"] = item.newsdate;
              obj["author"] = item.author;
              list.push(obj);
            });
            console.log(list);
            this.tableData = list;
            console.log(this.tableData);
          })
        }
      }
    }
</script>

<style scoped>

</style>
