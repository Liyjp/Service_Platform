<template>
  <div>
    <el-dialog title="项目申请管理" :visible.sync="dialogFormVisible" width="30%">
      <table id="td"  cellspacing="0" cellpadding="0">
        <tr>
          <td class="tdname" style="border-top: 1px gray solid;">项目编号：</td>
          <td class="tinfo" style="border-top: 1px gray solid;">{{tid}}</td>
        </tr>
        <tr>
          <td class="tdname">项目名称：</td>
          <td class="tinfo">{{tname}}</td>
        </tr>
        <tr>
          <td class="tdname">项目类型：</td>
          <td class="tinfo">{{ttype}}</td>
        </tr>
        <tr>
          <td class="tdname">项目等级：</td>
          <td class="tinfo">{{trank}}</td>
        </tr>
        <tr>
          <td class="tdname">所属学院：</td>
          <td class="tinfo">{{tcollege}}</td>
        </tr>
        <tr>
          <td class="tdname">所属学科：</td>
          <td class="tinfo">{{tmajor}}</td>
        </tr>
        <tr>
          <td class="tdname">项目来源：</td>
          <td class="tinfo">{{tsource}}</td>
        </tr>
        <tr>
          <td class="tdname">申请经费：</td>
          <td class="tinfo">{{tmoney}}</td>
        </tr>
        <tr>
          <td class="tdname">项目周期：</td>
          <td class="tinfo">{{tperiod}}</td>
        </tr>
        <tr>
          <td class="tdname">指导老师：</td>
          <td class="tinfo">{{tteacher}}</td>
        </tr>
        <tr>
          <td class="tdname">申请人：</td>
          <td class="tinfo">{{tcaptain}}</td>
        </tr>
        <tr>
          <td class="tdname">申请人联系方式：</td>
          <td class="tinfo">{{tphonenum}}</td>
        </tr>
        <tr>
          <td class="tdname">申请人邮箱：</td>
          <td class="tinfo">{{temailnum}}</td>
        </tr>
        <tr>
          <td class="tdname">项目简介：</td>
          <td class="tinfo">{{tdescrible}}</td>
        </tr>
        <tr>
          <td class="tdname">成果形式：</td>
          <td class="tinfo">{{tresult}}</td>
        </tr>
        <tr>
          <td class="tdname">立项时间：</td>
          <td class="tinfo">{{ttime}}</td>
        </tr>
        <tr>
          <td class="tdname">项目审核：</td>
          <td class="tinfo">{{tcheck}}</td>
        </tr>
      </table>
      <el-form :model="from">
        <el-form-item  label="中期检查">
          <el-radio-group v-model="from.middlecheck">
            <el-radio label="已提交"></el-radio>
            <el-radio label="未提交"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-form-item>
            <el-button type="primary" @click="middle">确认</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>

    </el-dialog>
    <div style="float: right">
      <el-input v-model="tableDataName" placeholder="请输入项目名称" style="width:240px"></el-input>
      <el-button type="primary" @click="doFilter" >搜索</el-button>
    </div>

    <el-table
      :data="tableDataEnd"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="立项时间"
        width="140">
      </el-table-column>
      <el-table-column
        prop="id"
        label="项目编号"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称" min-width="250px">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="项目等级"
        width="90">
      </el-table-column>
      <el-table-column
        prop="statu"
        label="项目状态"
        width="90">
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope" >
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">管理</el-button>
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
</template>
<style>
  .tdname{
    width: 160px;
    text-align: center;

  }
  .tinfo{
    border-right: 1px gray solid;
  }
  #td td{
    background: honeydew;
    border-left: 1px gray solid;
    border-bottom: 1px gray solid;
    font-size: 18px;
    margin-left: 20px;

  }
</style>
<script>
  export default {
    data() {
      return {
        rowid:'',
        dialogFormVisible:false,
        from:{
          middlecheck:'',
        },
        tableDataBegin: [],
        project:{
          date: '',
          id:'',
          name: '',
          tag: '',
          statu:'',
        },
        gridData:[],
        tid:'',
        tname:'',
        ttype:'',
        trank:'',
        tmajor:'',
        tcollege:'',
        tsource:'',
        tmoney:'',
        tperiod:'',
        tteacher:'',
        tcaptain:'',
        tphonenum:'',
        temailnum:'',
        tdescrible:'',
        tresult:'',
        tresult1:'',
        tresult2:'',
        tresult3:'',
        tresult4:'',
        tresult5:'',
        ttime:'',
        tcheck:'',
        tableDataName: "",
        tableDataEnd: [],
        currentPage: 1,
        pageSize: 5,
        totalItems: 0,
        filterTableDataEnd:[],
        flag:false
      };
    },
    created() {
      this.getInfo();
    },
    methods: {
      middle:function(){
        var state = '';
        var middlecheck = this.from.middlecheck;
        if(middlecheck == '已提交'){
          state = '项目中期';
        }else if(middlecheck == '未提交'){
          state = '项目初期';
        }else {
          alert('参数错误');
        }
        this.$http
          .patch("api/user/checkUpdate1", {
            //传递的参数
            middlecheck:this.from.middlecheck,
            state:state,
            id: this.rowid
          }).then(response => {
          console.log(response);
          alert("中期检查提交成功");
        })
          .catch(function (error) {
            console.log(error);
            alert("中期检查失败");
          });
        this.dialogFormVisible=false;
      },
      getInfo:function () {
        this.$http.get('/api/user/stateNoUser1',{},{}).then((response)=>{
          for(let i = 0; i<response.data.length;i++){
            this.project = {
              name : response.data[i].name,
              date : response.data[i].time,
              id   :response.data[i].id,
              tag : response.data[i].rank,
              statu: response.data[i].state,
              verif : response.data[i].assess,
            };
            this.tableDataBegin.push(this.project);
            this.totalItems = this.tableDataBegin.length
          }
          if (this.totalItems > this.pageSize) {
            for (let index = 0; index < this.pageSize; index++) {
              this.tableDataEnd.push(this.tableDataBegin[index]);
            }
          } else {
            this.tableDataEnd = this.tableDataBegin;
          }
        });

      },

      handleEdit(row){
        this.gridData = [];
        this.rowid = row.id;
        var queryParam = row.id;
        this.$http
          .get("api/user/queryUser", {
            params: {
              queryParam: queryParam
            }
          })
          .then(response => {
            this.gridData = [];
            this.gridData = response.data;
            this.tid = this.gridData[0].id;
            this.tname = this.gridData[0].name;
            this.ttype = this.gridData[0].type;
            this.trank = this.gridData[0].rank;
            this.tmajor = this.gridData[0].major;
            this.tcollege = this.gridData[0].college;
            this.tsource = this.gridData[0].source;
            this.tmoney =this.gridData[0].money;
            this.tperiod = this.gridData[0].period;
            this.tteacher = this.gridData[0].teacher;
            this.tcaptain =this.gridData[0].captain;
            this.tphonenum = this.gridData[0].phonenum;
            this.temailnum = this.gridData[0].emailnum;
            this.tdescrible = this.gridData[0].describle1;
            this.tresult1 =  this.gridData[0].result1;
            this.tresult2 =  this.gridData[0].result2;
            this.tresult3 =  this.gridData[0].result3;
            this.tresult4 =  this.gridData[0].result4;
            this.tresult5 =  this.gridData[0].result5;
            this.ttime = this.gridData[0].time;
            this.tcheck = this.gridData[0].check1;
            this.tstate = this.gridData[0].state;
            this.tresult = '';
            if(this.tresult1 == '1'){
              this.tresult += '实物、'
            }
            if(this.tresult2 == '1'){
              this.tresult +='软件、'
            }
            if(this.tresult3 == '1'){
              this.tresult +='研究报告、'
            }
            if(this.tresult4 == '1'){
              this.tresult += '高水平论文、'
            }
            if(this.tresult5 == '1'){
              this.tresult += '经济效益'
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        this.dialogFormVisible = true;
      },
      //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
      //用两个变量接收currentChangePage函数的参数
      doFilter() {
        if (this.tableDataName == "") {
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
          this.currentChangePage(this.tableDataBegin);
          console.log(this.tableDataEnd);
        } else {
          this.currentChangePage(this.filterTableDataEnd);
          console.log(this.tableDataEnd);
        }
      },//组件自带监控当前页码

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
  };
</script>
