<template>
  <div id="app1">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <h3 class="medium">{{'项目名称：' + name}}</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="medium">{{'项目类型：' + type}}</h3>
      </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'项目等级：' + rank}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'所属学科：' + major}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'所属学院：' + college}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'项目来源：' + source}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'项目周期：' + period}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'申请经费(元)：' + money}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'指导老师(审核老师)：' + teacher}}</h3>
    </el-carousel-item>
      <el-carousel-item>
      <h3 class="medium">{{'申请人：' + captain}}</h3>
    </el-carousel-item>
      <el-carousel-item>
        <h3 class="medium">{{'申请人联系方式：' + phonenum}}</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="medium">{{'申请人邮箱：' + emailnum}}</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="medium">{{'成果形式：' + result1 + result2 + result3 + result4 + result5}}</h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3 class="medium">{{'项目简介：' + describe1}}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card0" shadow="hover" id="box0">
      <span>项目名称：{{name}}</span><br>
      <span>项目类型：{{type}}</span><br>
      <span>···</span><br>
      <el-button type="text" @click="dealer()">点击查看详细内容</el-button>
    </el-card>
    <div id="box15">
    <el-button type="text" @click="pack()">点击收起详细内容</el-button>
    </div>
    <el-card class="box-card" shadow="hover" id="box1">
      <div class="projectTag">
        <b>项目名称：</b><br>
        <p>{{name}}</p>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="box2">
      <div class="projectTag">
        <b>项目类型：</b><br>
        <p>{{type}}</p>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="box3">
      <div class="projectTag">
        <b>项目等级：</b><br>
        <p>{{rank}}</p>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="box4">
      <div class="projectTag">
        <b>所属学科：</b><br>
        <p>{{major}}</p>
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" id="box5">
    <div class="projectTag">
      <b>所属学院：</b><br>
      <p>{{college}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box6">
    <div class="projectTag">
      <b>项目来源：</b><br>
      <p>{{source}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box7">
    <div class="projectTag">
      <b>项目周期：</b><br>
      <p>{{period}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box8">
    <div class="projectTag">
      <b>申请经费(元)：</b><br>
      <p>{{money}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box9">
    <div class="projectTag">
      <b>指导老师(审核老师)：</b><br>
      <p>{{teacher}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box10">
    <div class="projectTag">
      <b>申请人：</b><br>
      <p>{{captain}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box11">
    <div class="projectTag">
      <b>申请人联系方式：</b><br>
      <p>{{phonenum}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box12">
    <div class="projectTag">
      <b>申请人邮箱：</b><br>
      <p>{{emailnum}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box13">
    <div class="projectTag">
      <b>成果形式：</b><br>
      <p>{{result1 + result2 + result3 + result4 + result5}}</p>
    </div>
  </el-card>
    <el-card class="box-card" shadow="hover" id="box14">
    <div class="projectTag">
      <b>项目简介：</b><br>
      <p>{{describe1}}</p>
    </div>
  </el-card>
  </div>
</template>

<script>
export default {
  name: 'checkOption',
  data () {
    return {
      name: '',
      type: '',
      rank: '',
      major: '',
      college: '',
      source: '',
      period: '',
      money: '',
      teacher: '',
      captain: '',
      phonenum: '',
      emailnum: '',
      result1: '',
      result2: '',
      result3: '',
      result4: '',
      result5: '',
      describe1: ''
    }
  },
  mounted: function () {
    this.name = this.$route.query.name
    console.log(this.name)
    this.show(this.name)
  },
  methods: {
    show (name1) {
      this.$http.post('/api/user/queryProjectByName', {name: name1}, {}).then((res) => {
        console.log(res.data)
        console.log(res.data[0].name)
        this.name = res.data[0].name
        this.type = res.data[0].type
        this.rank = res.data[0].rank
        this.major = res.data[0].major
        this.college = res.data[0].college
        this.source = res.data[0].source
        this.period = res.data[0].period
        this.money = res.data[0].money
        this.teacher = res.data[0].teacher
        this.captain = res.data[0].captain
        this.phonenum = res.data[0].phonenum
        this.emailnum = res.data[0].emailnum
        if (res.data[0].result1 === 1) {
          this.result1 = '实物 '
        } else {
          this.result1 = ''
        }
        if (res.data[0].result2 === 1) {
          this.result2 = '软件 '
        } else {
          this.result2 = ''
        }
        if (res.data[0].result3 === 1) {
          this.result3 = '研究报告 '
        } else {
          this.result3 = ''
        }
        if (res.data[0].result4 === 1) {
          this.result4 = '高水平论文 '
        } else {
          this.result4 = ''
        }
        if (res.data[0].result5 === 1) {
          this.result5 = '经济效益'
        } else {
          this.result5 = ''
        }
        this.describe1 = res.data[0].describe1
      })
    },
    dealer () {
      document.getElementById('box0').style.display = 'none'
      document.getElementById('box1').style.display = 'block'
      document.getElementById('box2').style.display = 'block'
      document.getElementById('box3').style.display = 'block'
      document.getElementById('box4').style.display = 'block'
      document.getElementById('box5').style.display = 'block'
      document.getElementById('box6').style.display = 'block'
      document.getElementById('box7').style.display = 'block'
      document.getElementById('box8').style.display = 'block'
      document.getElementById('box9').style.display = 'block'
      document.getElementById('box10').style.display = 'block'
      document.getElementById('box11').style.display = 'block'
      document.getElementById('box12').style.display = 'block'
      document.getElementById('box13').style.display = 'block'
      document.getElementById('box14').style.display = 'block'
      document.getElementById('box15').style.display = 'block'
    },
    pack () {
      document.getElementById('box0').style.display = 'block'
      document.getElementById('box1').style.display = 'none'
      document.getElementById('box2').style.display = 'none'
      document.getElementById('box3').style.display = 'none'
      document.getElementById('box4').style.display = 'none'
      document.getElementById('box5').style.display = 'none'
      document.getElementById('box6').style.display = 'none'
      document.getElementById('box7').style.display = 'none'
      document.getElementById('box8').style.display = 'none'
      document.getElementById('box9').style.display = 'none'
      document.getElementById('box10').style.display = 'none'
      document.getElementById('box11').style.display = 'none'
      document.getElementById('box12').style.display = 'none'
      document.getElementById('box13').style.display = 'none'
      document.getElementById('box14').style.display = 'none'
      document.getElementById('box15').style.display = 'none'
    }
  }
}
</script>

<style scoped>
#app1{
  width: 82%;
}
#box15{
  display: none;
}
.box-card{
  width: 28%;
  float: left;
  display: none;
  margin: 15px 15px;
  background: snow;
}
.box-card0 {
  display: block;
  width: 480px;
  margin: 0 auto;
}
.projectTag{
  font-family: 华文中宋;
}
.projectTag b{
  float: left;
  font-size: larger;
}
.projectTag p{
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  flex-wrap: wrap;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
