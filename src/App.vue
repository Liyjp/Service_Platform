<template>
  <div id="app">
<!--    <mainpage style="width: 1200px;margin: 0 auto "></mainpage>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import mainpage from './components/managerpage/mainpage.vue'
  export default {
    name: 'App',
    components:{
      "mainpage":mainpage
    }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .el-select-dropdown__wrap{
    margin-bottom: 0;
  }

</style>
