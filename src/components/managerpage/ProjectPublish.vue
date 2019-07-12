<template>
  <el-form ref="form" :model="form" label-width="150px" style="width: 600px">
    <el-form-item label="项目主题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="学生类型">
      <el-select v-model="form.region" placeholder="请选择学生类型" style="float: left;">
        <el-option label="本科生" value="本科生"></el-option>
        <el-option label="研究生" value="研究生"></el-option>
        <el-option label="博士生" value="博士生"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="开始时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="截止时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="项目类型">
      <el-checkbox-group v-model="form.type" style="float: left">
        <el-checkbox label="创新训练项目" name="type1"></el-checkbox>
        <el-checkbox label="创业实践项目" name="type2"></el-checkbox>
        <el-checkbox label="创业训练项目" name="type3"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="描述">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>

    <el-divider>项目周期</el-divider>
    <el-form-item label="周期">
      <el-select v-model="form.yearRegion" placeholder="请选择周期" style="float: left; margin-bottom: 0">
        <el-option label="一年期" value="一年期"></el-option>
        <el-option label="两年期" value="两年期"></el-option>
        <el-option label="三年期" value="三年期"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="中期检查开始时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.middle1" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="中期检查截止时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.middle2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="结题开始时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.last1" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="结题截止时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.last2" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-button type="primary" size="medium" @click="addMsg">添加</el-button>


      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="period"
          label="周期"
          width="80">
        </el-table-column>
        <el-table-column
          prop="middleStart"
          label="中期检查开始时间"
          width="140">
        </el-table-column>
        <el-table-column
          prop="middleEnd"
          width="140"
          label="中期检查结束时间">
        </el-table-column>
        <el-table-column
          prop="lastStart"
          width="120"
          label="结题开始时间">
        </el-table-column>
        <el-table-column
          prop="lastEnd"
          width="120"
          label="结题结束时间">
        </el-table-column>
      </el-table>

    <el-divider style="padding-top: 20px;padding-bottom: 20px"></el-divider>

      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>

  </el-form>
</template>

<script>
    export default {
      name: "ProjectPublish",
      data() {
        return {
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            yearRegion:'',
            middle1:'',
            middle2:'',
            last1:'',
            last2:''
          },
          tableData: []
        }
      },
      methods: {
        onSubmit() {
          console.log('submit!');
          //数据库操作！

        },
        addMsg(){
          //放在tableData里，点提交时再与数据库进行交互
          //this.list.push({id:this.id,name:this.name});
          var period = this.form.yearRegion;
          var middle1 = this.getDays(this.form.middle1);
          var middle2 = this.getDays(this.form.middle2);
          var last1 =  this.getDays(this.form.last1);
          var last2 =  this.getDays(this.form.last2);
          this.tableData.push({
            period:period,
            middleStart:middle1,
            middleEnd:middle2,
            lastStart:last1,
            lastEnd:last2
          });
        },
        getDays(day){
            var years = day.getFullYear();
            var month = day.getMonth();
            var da = day.getDate();
            return years+"年"+month+"月"+da+"日";
        }
      }
    }
</script>

<style scoped>

</style>
