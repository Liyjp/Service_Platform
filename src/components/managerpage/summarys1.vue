<template>
  <div class="container" style=" max-height: 800px; height: 550px;width: 600px;text-align: center;">
    <div style="margin-bottom: 20px"><h2>项目申请情况</h2></div>
    <div class="block" style="margin-bottom: 50px">
      <span class="demonstration" style="margin-left: 50px">年度</span>
      <el-date-picker
        v-model="value1"
        type="year"
        value-format="yyyy"
        placeholder="显示近三年申请情况">
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px" @click="show">搜索</el-button>
    </div>
    <div ref="table1" style="width: 80%;height: 65%;margin:0 auto"></div>
  </div>
</template>

<script>
    export default {
        name: "summarys1",
      data(){
          return{
            value1:'',
            tableData:[]
          }
      },
      methods:{
          show() {
            if (this.value1 == '') {
              // alert("请选择年份");
              this.$alert('请选择年份！', '提示', {
                confirmButtonText: '确定'
              });
            } else {
              // 数据库操作
              this.$http.post('/api/user/showProjects', {}, {}).then((res) => {
                console.log(res);
                let list = [];
                let resData = res.data;
                resData.map((item, index) => {
                  let obj = {};
                  obj["check"] = item.check1;
                  obj["year"] = item.year;
                  list.push(obj);
                });
                console.log(list);

                let table = [];
                let year = parseInt(this.value1);
                // console.log(year);
                let data = ['count', year - 2, year - 1, year];
                table.push(data);
                let year11 = 0, year12 = 0, year13 = 0;
                let year21 = 0, year22 = 0, year23 = 0;
                let year31 = 0, year32 = 0, year33 = 0;

                list.map((item, index) => {
                  if (item.year == (year - 2)) {
                    if (item.check == "未审核") {
                      year11++;
                    }
                    if (item.check == "已通过") {
                      year12++;
                    }
                    if (item.check == "未通过") {
                      year13++;
                    }
                  }
                  if (item.year == (year - 1)) {
                    if (item.check == "未审核") {
                      year21++;
                    }
                    if (item.check == "已通过") {
                      year22++;
                    }
                    if (item.check == "未通过") {
                      year23++;
                    }
                  }
                  if (item.year == (year)) {
                    if (item.check == "未审核") {
                      year31++;
                    }
                    if (item.check == "已通过") {
                      year32++;
                    }
                    if (item.check == "未通过") {
                      year33++;
                    }
                  }
                });

                table.push(["未审核", year11, year21, year31]);
                table.push(["已通过", year12, year22, year32]);
                table.push(["未通过", year13, year23, year33]);

                console.log(this.value1);

                var opt = {
                  legend: {},
                  tooltip: {},
                  dataset: {
                    source: table
                    //   [
                    //   ['product', 2012, '2013', '2014', '2015'],
                    //   ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                    //   ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                    //   ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
                    // ]
                  },
                  xAxis: [
                    {type: 'category', gridIndex: 0},
                  ],
                  yAxis: [
                    {gridIndex: 0},
                  ],
                  grid: [
                    {bottom: '20%'},
                    {top: '20%'}
                  ],
                  series: [
                    // These series are in the first grid.
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                    {type: 'bar', seriesLayoutBy: 'row'},
                  ]
                };
                this.$echarts.init(this.$refs.table1, 'macarons').setOption(opt);
              })
            }
          }
      }
    }
</script>

<style scoped>

</style>
