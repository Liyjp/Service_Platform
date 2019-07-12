<template>
  <el-container class="login">
    <img src="../../assets/logo-mini.png" style="width: 287px;height: 67px;left: 1300px;position: absolute">
    <h1 style="position: absolute;color: rgba(255,255,255,0.9);left: 1370px;top:80px;font-family: 楷体">科研创新服务平台</h1>
    <div class="div1" ref="div1">
      <h1 style="font-size: 48px;color: #67C23A;line-height: 200px;">登 录</h1>
      <el-input style="width: 320px;margin-bottom: 10px" v-model="input1" placeholder="请输入用户名"></el-input>
      <el-input style="width: 320px;margin-bottom: 10px" v-model="input2" placeholder="请输入密码" show-password></el-input>

      <el-button type="success" style="top: 100px;position: relative;width: 320px;height: 40px;font-size: 18px;" @click="goyanzheng">登 录</el-button>
    </div>
    <div class="div2" ref="div2">
      <slide-verify class="div3"
                    :l="42"
                    :r="10"
                    :w="310"
                    :h="155"
                    @success="onSuccess"
                    @fail="onFail"
                    @refresh="onRefresh"
                    :slider-text="text"
      ></slide-verify>
      <div style="color: #67C23A;line-height: 50px;">{{msg}}</div>
    </div>
  </el-container>
</template>

<script>

  export default {
    name: 'logins',
    data () {
      return {
        input1: '',
        input2: '',
        msg: '',
        text: '向右滑',
        options: [{
          value: '学生',
          label: '学生'
        }, {
          value: '管理员',
          label: '管理员'
        }
        ],
        value: ''
      }
    },
    methods: {
      goyanzheng: function () {
        // this.$router.push({path: '/check'}) left:176px;
        this.$refs.div1.style.left = 176 +'px';
        this.$refs.div2.style.display = 'block';
      },
      onSuccess () {
        var name = this.input1;
        var pass = this.input2;
        this.$http.post('/api/user/getUsers', {
          name:name
        },{}).then((res) => {
          let resData = res.data;
          if(resData[0].passwords == pass){
            this.COMMON.username1 =name;
            this.msg = '登录成功！';
            if(resData[0].job=="管理员"){
              this.$router.push({path: '/mainpage'})// 成功后跳转
            }
            if(resData[0].job=="学生"){
              this.$router.push({path: '/mainpage2'})// 成功后跳转
            }
          }
          else{
            //登录失败
          }
        })
      },
      onFail () {
        this.msg = '请重试'
      },
      onRefresh () {
        this.msg = ''
      }
    }
  }
</script>

<style scoped>
  el-menu-item,el-menu-item-group{
    height: 50px;
    width: 200px;
    font-family: 宋体;
  }
  .login{
    /*background: #000;*/
    width: 100%;
    height: 757px;
    background-image: url("../../assets/login_bg.jpg");
    justify-content: center;
  }
  .div1{
    background: rgba(255,255,255,.75);
    width: 350px;
    height: 561px;
    border-radius: 5px;
    top: 113px;
    position: relative;
    box-shadow: 0px 0px 20px 20px rgba(255, 255, 255, .30);
    justify-content: center;
    left:0px;
    display: block;
  }

  .div2{
    background: rgba(255,255,255,.90);
    width: 350px;
    height: 260px;
    border-radius: 20px;
    top: 269px;
    position: relative;
    box-shadow: 0px 0px 20px 20px rgba(0, 0, 0, .30);
    justify-content: center;
    display: none;
    left: -175px;
  }
  .div3{
    top: 10px;
    left: 19px;
  }
</style>
