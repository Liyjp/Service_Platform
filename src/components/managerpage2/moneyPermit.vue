<template>
  <div>
    <div class="table">
      <el-table
        :data="tableDataEnd.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        max-height="500"
        border>
        <el-table-column
          label="申请时间"
          width="120"
          prop="usedate">
        </el-table-column>
        <el-table-column
          label="项目名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="使用原因"
          width="120"
          prop="reason">
        </el-table-column>
        <el-table-column
          label="使用总额"
          width="120"
          prop="usemoney">
        </el-table-column>
        <el-table-column
          label="审核状态"
          width="80"
          prop="check1">
        </el-table-column>
        <el-table-column
          align="center">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="adopt(scope.$index, scope.row)">通过</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="rejects(scope.$index, scope.row)">驳回</el-button>
          </template>
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
  name: 'moneyPermit',
  data () {
    return {
      search: '',
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
    this.$http.get('/api/money/moneylist/state',{})
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
    adopt (index, row) {
      row.check1 = '已批准';
      var check1 = row.check1;
      var name = row.name;
      this.$http.post('/api/money/moneylist/update', {
        check1: check1,
        name: name
      }, {}).then((response) => {
      })
    },
    rejects (index, row) {
      row.check1 = '不通过';
      var check1 = row.check1;
      var name = row.name;
      this.$http.post('/api/money/moneylist/update', {
        check1: check1,
        name: name
      }, {}).then((response) => {
      })
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
      } else {
        this.currentChangePage(this.filterTableDataEnd);
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

<style scoped>
  .tag{
    position: absolute;
    top: 0;
    left: 280px;
    font-size: 25px;
    height: 50px;
  }
  .table{
    margin-top: 40px;
  }
</style>
