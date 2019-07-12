<template>
  <div>
    <div class="table" >
      <el-table
        :data="tableDataEnd.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        border>
        <el-table-column
          label="项目编号"
          prop="id"
          width="100">
        </el-table-column>
        <el-table-column
          label="项目名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="使用金额"
          prop="usedmoney"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="method"
          label="操作"
          width="200">
          <template slot-scope="scope">
          <router-link :to="{path:'/xq', query:{name:scope.row.name}}" style="text-decoration: none">
            <el-button
              size="mini"
              @click="getList(scope.$index, scope.row)">详情</el-button>
<!--          <a href="" @onclick="getList(scope.$index, scope.row)">详情</a>-->
          </router-link>
          </template>
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
             />
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[8, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems">
      </el-pagination>
    </div>
  </div>

</template>

<script>
export default {
  name: 'moneyList',
  data () {
    return {
      tableData: [],
      search: '',
      tableDataName: "",
      tableDataEnd: [],
      currentPage: 1,
      pageSize: 8,
      totalItems: 0,
      filterTableDataEnd:[],
      flag:false

    }
  },
  created () {
    this.$http.get('/api/project/projectList',{})
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
    getList(index,row) {
      bus.$emit('val' ,row.name)
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
  .op{
    position: absolute;
    top: 0;
    right: 0;
  }
</style>
