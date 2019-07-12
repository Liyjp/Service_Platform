<template>
  <div>
    <el-button @click="clearFilter" class="clear">清除所有过滤器</el-button>
    <div class="table">
      <el-table
        ref="filterTable"
        :data="tableDataEnd"
        height="500"
        style="width: 100%"
        border>
        <el-table-column
          highlight-current-row
          prop="id"
          label="项目编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          :filters="[{text:'创新训练项目',value:'创新训练项目'},{text:'创业实践项目',value:'创业实践项目'},{text:'创业训练项目',value:'创业训练项目'}]"
          :filter-method="filterType">
        </el-table-column>
        <el-table-column
          prop="rank"
          label="等级"
          width="70"
          :filters="[{text:'国家级',value:'国家级'},{text:'省级',value:'省级'},{text:'校级',value:'校级'},{text:'院级',value:'院级'}]"
          :filter-method="filterRank">
        </el-table-column>
        <el-table-column
          prop="money"
          width="80"
          label="申请经费">
        </el-table-column>
        <el-table-column
          prop="captain"
          width="80"
          label="申请人">
        </el-table-column>
        <el-table-column
          prop="teacher"
          width="80"
          label="指导老师">
        </el-table-column>
        <el-table-column
          prop="time"
          label="申请日期">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'money',
  data () {
    return {
      tableData: [],
      tableDataName: "",
      tableDataEnd: [],
      currentPage: 1,
      pageSize: 5,
      totalItems: 0,
      filterTableDataEnd:[],
      flag:false
    }
  },
  created () {
    this.$http.get('/api/money/moneylist',{})
      .then( (response)=>{
          this.tableData = response.data;

          this.totalItems = this.tableData.length;
          if (this.totalItems > this.pageSize) {
            for (let index = 0; index < this.pageSize; index++) {
              this.tableDataEnd.push(this.tableData[index]);
            }
          } else {
            this.tableDataEnd = this.tableData;
          }
        }
      )
  },
  methods: {
    filterType (value, row) {
      return row.type === value
    },
    filterRank (value, row) {
      return row.rank === value
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    doFilter() {
      if (this.tableDataName === "") {
        this.$message.warning("查询条件不能为空！");
        return;
      }
      this.tableDataEnd = []
      //每次手动将数据置空,因为会出现多次点击搜索情况
      this.filterTableDataEnd=[]
      this.tableDataBegin.forEach((value, index) => {
        if(value.name){
          if(value.name.indexOf(this.tableDataName)>=0){
            this.filterTableDataEnd.push(value)
          }
        }
      });

      //页面数据改变重新统计数据数量和当前页
      this.currentPage=1
      this.totalItems=this.filterTableDataEnd.length
      //渲染表格,根据值
      this.currentChangePage(this.filterTableDataEnd)
      //页面初始化数据需要判断是否检索过
      this.flag=true
    },
    handleSizeChange(val) {

      this.pageSize = val;
      this.handleCurrentChange(1);
    },
    handleCurrentChange(val) {

      this.currentPage = val;
      //需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableData);
        console.log(this.tableDataEnd);
      } else {
        this.currentChangePage(this.filterTableDataEnd);
        console.log(this.tableDataEnd);
      }
    },
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    }
  }
}

</script>

<style>
.tag{
  position: absolute;
  top: 0;
  left: 280px;
  font-size: 25px;
  height: 50px;
}
.clear{
  position: absolute;
  top: 120px;
  right: 200px;
}
.table{
  margin-top: 40px;
  width: 100%;
}
.el-table__header-wrapper .el-table__header .has-gutter th{
  height: 48px;
}
.el-table__header-wrapper .el-table__header tr, .el-table__header-wrapper .el-table__header th{
  padding: 0;
  height: 48px;
}

</style>
