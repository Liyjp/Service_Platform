<template>
    <el-header style="text-align: right; font-size: 16px;">
      <img src="../../assets/logo-mini.png" style="float: left">
      <el-dropdown style="top: 23px">
        <i class="fa fa-cog fa-spin fa-fw" style="font-size: 23px ;color: white" ></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item style="width: 60px" @click.native="exitbut">退出登录</el-dropdown-item>
          <el-dropdown-item>返回登录</el-dropdown-item>
          <el-dropdown-item>问题反馈</el-dropdown-item>
          <el-dropdown-item>帮助</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span style="position: relative;top: 27px">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" size="small"></el-avatar>
      </span>
      <span style="position: relative;top: 20px;margin-left: 5px ;color: white">{{user}}</span>
    </el-header>
</template>

<script>
    export default {
        name: "header1",
      data(){
        return{
          user:this.COMMON.username1
        }
      },
      methods:{
          exitbut(){
            this.COMMON.username1 = '';
            this.$router.push({path: '/'})
          }
      }
    }
</script>

<style scoped>
  .el-header{
    background-color: #609B7C;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

</style>
