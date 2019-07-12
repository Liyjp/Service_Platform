<template>
  <div>
    <el-dialog title="编辑项目" :visible.sync="dialogFormVisible" width="50%">
    <table id="td"   cellspacing="0" cellpadding="0">
      <tr style="height: 50px">
        <td class="tdname" style="border-top: 1px gray solid;">项目编号：</td>
        <td class="tinfo" style="border-top: 1px gray solid;">{{tid}}</td>
      </tr>
      <tr>
        <td class="tdname">项目名称：</td>
        <td class="tinfo"><el-input v-model="tname"></el-input></td>
      </tr>
      <tr>
        <td class="tdname">所属年度：</td>
        <td class="tinfo"><el-input v-model="tyear"></el-input></td>
      </tr>
      <tr>
        <td class="tdname">项目等级：</td>
        <td class="tinfo">
          <el-select v-model="trank" placeholder="请选择项目等级">
            <el-option label="校级" value="校级"></el-option>
            <el-option label="省级" value="省级"></el-option>
            <el-option label="国家级" value="国家级"></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="tdname">学生类型：</td>
        <td class="tinfo">
          <el-select v-model="tstudenttype" placeholder="请选择学生类型">
            <el-option label="本科生" value="本科生"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="tdname">开始时间：</td>
        <td class="tinfo">
          <el-date-picker type="date" placeholder="选择日期" v-model="tstarttime"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </td>
      </tr>
      <tr>
        <td class="tdname">结束时间：</td>
        <td class="tinfo">
          <el-date-picker type="date" placeholder="选择日期" v-model="tendtime"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
         </td>
      </tr>
      <tr>
        <td class="tdname">项目简介：</td>
        <td class="tinfo"><el-input type="textarea" v-model="tdescrible1"></el-input></td>
      </tr>
      <tr>
        <td class="tdname">项目类型：</td>
        <td class="tinfo">
          <el-select v-model="tinnovaproject" placeholder="请选择项目类型">
            <el-option label="创新训练项目" value="创新训练项目"></el-option>
            <el-option label="创业实践项目" value="创业实践项目"></el-option>
            <el-option label="创业训练项目" value="创业训练项目"></el-option>
          </el-select>
        </td>
      </tr>
      <tr>
        <td class="tdname">项目周期：</td>
        <td class="tinfo">
          <el-select v-model="tperiod" placeholder="请选择项目等级">
            <el-option label="一年期" value="一年期"></el-option>
            <el-option label="两年期" value="两年期"></el-option>
            <el-option label="三年期" value="三年期"></el-option>
          </el-select>
         </td>
      </tr>
        <el-button @click="handleEditAgain">提交</el-button>
      <el-popover
        placement="top"
        width="160"
        v-model="visible">
        <p>确定删除该项目吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false">取消</el-button>
          <el-button type="primary" size="mini" @click="handleDelete">确定</el-button>
        </div>
        <el-button slot="reference">删除</el-button>
      </el-popover>
    </table>
  </el-dialog>
  <el-tabs v-model="activeName">
    <el-tab-pane label="项目查看" name="second">
      <div style="float: right">
        <el-input v-model="tableDataName" placeholder="请输入项目名称" style="width:240px"></el-input>
        <el-button type="primary" @click="doFilter" >搜索</el-button>
      </div>
      <el-table
        :data="tableDataEnd"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="项目编号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="项目名称"
          width="200">
        </el-table-column>
        <el-table-column
          prop="year"
          label="所属年度" width="90">
        </el-table-column>
        <el-table-column
          prop="rank"
          label="项目等级"
          width="80">
        </el-table-column>
        <el-table-column
          prop="studenttype"
          label="学生类型"
          width="80">
        </el-table-column>
        <el-table-column
          prop="innovaproject"
          label="项目类型"
          width="105">
        </el-table-column>
        <el-table-column
          prop="period"
          label="项目周期"
          width="80">
        </el-table-column>

        <el-table-column label="操作" fixed="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.row)">编辑</el-button>
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
    </el-tab-pane>
    <el-tab-pane label="项目发布" name="first">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 500px;">
        <el-form-item label="项目编号" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="项目主题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="项目年度" prop="year">
          <el-input v-model="ruleForm.year"></el-input>
        </el-form-item>
        <el-form-item label="项目等级" prop="level">
          <el-select v-model="ruleForm.level" placeholder="请选择项目等级">
            <el-option label="校级" value="校级"></el-option>
            <el-option label="省级" value="省级"></el-option>
            <el-option label="国家级" value="国家级"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生类型" prop="student">
          <el-select v-model="ruleForm.student" placeholder="请选择学生类型">
            <el-option label="本科生" value="本科生"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间" prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间"prop="date2">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="项目类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择项目类型">
            <el-option label="创新训练项目" value="创新训练项目"></el-option>
            <el-option label="创业实践项目" value="创业实践项目"></el-option>
            <el-option label="创业训练项目" value="创业训练项目"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目周期" prop="cycle">
          <el-select v-model="ruleForm.cycle" placeholder="请选择项目等级">
            <el-option label="一年期" value="一年期"></el-option>
            <el-option label="两年期" value="两年期"></el-option>
            <el-option label="三年期" value="三年期"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>

  </el-tabs>
  </div>
</template>
<style>
  .tdname{
    width: 160px;
    text-align: center;
  }
  .tinfo{
    border-right: 1px gray solid;
    width: 500px;
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
        name: "release",

      data() {
        return {
          visible: false,
          rowid:'',
          dialogFormVisible:false,
          activeName:'second',
          tableDataBegin: [],
          project:{
            id:'',
            name: '',
            year:'',
            rank:'',
            studenttype: '',
            starttime:'',
            endtime:'',
            innovaproject: '',
            period: ''
          },
          gridData:[],
          tid:'',
          tname:'',
          tyear:'',
          trank:'',
          tstudenttype:'',
          tstarttime:'',
          tendtime:'',
          tdescrible1:'',
          tinnovaproject:'',
          tperiod:'',
          tableDataName: "",
          tableDataEnd: [],
          currentPage: 1,
          pageSize: 5,
          totalItems: 0,
          filterTableDataEnd:[],
          ruleForm: {
            id:'',
            name: '',
            level: '',
            year:'',
            date1: '',
            date2: '',
            student:'',
            type: '',
            cycle: '',
            desc: ''
          },
          rules: {
            id: [
              { required: true, message: '请输入项目编号', trigger: 'blur' },
            ],
            name: [
              { required: true, message: '请输入项目主题', trigger: 'blur' },
              { min: 5, max: 100, message: '长度在 5 到 20 个字符', trigger: 'blur' }
            ],
            year: [
              {  required: true, message: '请输入项目所属年度', trigger: 'blur' },
            ],
            level: [
              { required: true, message: '请选择项目等级', trigger: 'change' }
            ],
            date1: [
              { type: 'string', required: true, message: '请选择项目开始日期', trigger: 'change' }
            ],
            date2: [
              { type: 'string', required: true, message: '请选择项目结束日期', trigger: 'change' }
            ],
            type: [
              { required: true, message: '请选择项目类型', trigger: 'change' }
            ],
            student: [
              { required: true, message: '请选择学生类型', trigger: 'change' }
            ],
            cycle: [
              { required: true, message: '请选择项目周期', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写项目描述', trigger: 'blur' }
            ]
          }
        };
      },
      created() {
        this.getInfo();
      },
      methods: {
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
        handleDelete(){
          var rowid = this.rowid
         this .$http.delete("api/user/deleteUser", {
              params: {
                id: rowid
              }
            })
            .then(response => {
              //执行成功，给予删除成功提示
              alert('已经删除')
            })
            .catch(function (error) {
              console.log(error);
              alert('删除失败')
            });
          this.visible=false;
          this.dialogFormVisible=false;
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
      },
        handleEditAgain:function(){
          var name = this.tname;
          var year = this.tyear;
          var rank = this.trank;
          var studenttype = this.tstudenttype;
          var starttime = this.tstarttime;
          var endtime = this.tendtime;
          var describle1 = this.tdescrible1;
          var innovaproject = this.tinnovaproject;
          var period = this.tperiod;
          var id = this.rowid;
        this.$http.patch("api/user/editAgain",
        {
          name:name,
          year:year,
          rank:rank,
          studenttype:studenttype,
          starttime:starttime,
          endtime:endtime,
          describle1:describle1,
          innovaproject:innovaproject,
          period:period,
          id:id
        }
          )
          .then(response => {
            alert("修改成功")
          })
          .catch(function (error) {
            console.log(error);
            alert("修改失败")
          });
          this.dialogFormVisible=false;
        },
        handleEdit(row){
          this.gridData = [];
          this.rowid = row.id;
          var queryParam = row.id;
          this.$http
            .get("api/user/mainprojectInfo", {
              params: {
                id: queryParam
              }
            })
            .then(response => {
              this.gridData = [];
              this.gridData = response.data;
              this.tid = this.gridData[0].id;
              this.tname = this.gridData[0].name;
              this.tyear = this.gridData[0].year;
              this.trank = this.gridData[0].rank;
              this.tstudenttype = this.gridData[0].studenttype;
              this.tstarttime = this.gridData[0].starttime;
              this.tendtime = this.gridData[0].endtime;
              this.tdescrible1 =this.gridData[0].describle1;
              this.tperiod = this.gridData[0].period;
              this.tinnovaproject = this.gridData[0].innovaproject;
            })
            .catch(function (error) {
              console.log(error);
            });
          this.dialogFormVisible = true;

        },
        getInfo:function () {
          this.$http.get('/api/user/mainInfo',{},{}).then((response)=>{
            for(let i = 0; i<response.data.length;i++){
              this.project = {
                id : response.data[i].id,
                name : response.data[i].name,
                year :response.data[i].year,
                rank:response.data[i].rank,
                studenttype : response.data[i].studenttype,
                starttime: response.data[i].starttime,
                endtime : response.data[i].endtime,
                describle1:response.data[i].describle1,
                innovaproject:response.data[i].innovaproject,
                period:response.data[i].period
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
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              var info = this.ruleForm;
              var id = info.id;
              var name = info.name;
              var year =info.year;
              var rank = info.level;
              var studenttype =info.student;
              var starttime =info.date1;
              var endtime =info.date2;
              var describle = info.desc;
              var innovaproject =info.type;
              var period = info.cycle;
              this.$http.post('/api/user/addUser',{
                id : id,
                year:year,
                name:name,
                rank:rank,
                studenttype:studenttype,
                starttime:starttime,
                endtime:endtime,
                describle1:describle,
                innovaproject:innovaproject,
                period:period
              },{}).then((response)=>{
                alert('提交成功!');
                this.resetForm(formName);
              });

            } else {
              console.log('提交失败!');

              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
</style>
