<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="usedate"
      label="使用时间"
      width="250">
    </el-table-column>
    <el-table-column
      prop="reason"
      label="使用原因">
    </el-table-column>
    <el-table-column
      prop="usemoney"
      label="使用金额"
      width="250">
    </el-table-column>

  </el-table>
</template>

<script>

export default {

  mounted: function() {
    this.name = this.$route.query.name;
    this.$http.post('/api/funding/listXq',{
        name: this.name
      },{})
      .then( (response)=>{
          this.tableData = response.data;
        }
      )
  },
  data () {
    return {
      tableData: [],
      name: ''
    }
  }
}
</script>

<style scoped>

</style>
