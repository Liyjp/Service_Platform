<template>
  <el-container id="bgdiv">
    <!--    <canvas id="testCanvas" width=100% height="757"></canvas>-->
    <el-container id="main1"  direction="vertical">
      <header1 style="height:10vh;">Header</header1>
      <el-container style=" overflow:hidden; position:relative;">
        <left width="200px"></left>

        <el-main style="text-align: center;background-color: white">
          <router-view style="width: 800px ;margin:0 auto"/>
        </el-main>

      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import left2 from './left2'
  import header2 from '../managerpage/header1'
    export default {
        name: "mainpage2",
      components:{
        "left": left2,
        "header1": header2
      }
    }
</script>

<style scoped>
  #bgdiv{
    width: 100%;
    height: 757px;
    justify-content: center;
  }
  #bgdiv::before{
    content:"";
    /*-webkit-filter: opacity(50%);
    filter: opacity(50%); */
    background-image: url("../../assets/bgsec.jpg");
    opacity:0.5;//透明度设置
  z-index:-1;
    width: 100%;
    height: 757px;
    position:absolute;
    top:0px;
    left:0px;
  }
  #main1{
    height: 100vh; border: 1px solid #eee;width: 1200px;left: 200px;position: absolute;
  }
</style>
