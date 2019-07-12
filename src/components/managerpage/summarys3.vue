<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 600px">
    <el-table-column
      prop="name"
      label="项目名称"
      width="350">
    </el-table-column>
    <el-table-column
      prop="year"
      label="年度"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="项目状态"
      width="120"
      style="text-align: center">
    </el-table-column>
    <el-table-column
      prop="statepro"
      label="项目状态"
      width="200">
<!--      进度条显示-->
      <template slot-scope="scope">
      <el-progress :percentage="countper(scope.row.state)"></el-progress>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "summarys3",
      data() {
        return {
          tableData: []
        }
      },
      mounted:function () {
        this.show();
      },
      methods: {
        show() {
          this.$http.post('/api/user/showProjects', {}, {}).then((res) => {
            // console.log(res);
            let list = [];
            let resData = res.data;
            resData.map((item, index) => {
              if(item.check1=='已通过'){
                let obj = {};
                obj["name"] = item.name;
                obj["year"] = item.year;
                obj["state"] = item.state;
                obj["check"] = item.check;
                list.push(obj);
              }
            });
            // console.log(list);
            this.tableData = list;
            // console.log(this.tableData);
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
          }
        }
      }
    }
</script>

<style scoped>

</style>
