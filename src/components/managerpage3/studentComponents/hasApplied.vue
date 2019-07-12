<template>
    <!--<div>There should be some projects you had applied</div>-->
  <div id="app1">
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#C0C4CC"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
<!--    <el-menu-item index="1" flag="index1">我申请的项目</el-menu-item>
    <el-menu-item index="2" flag="index2">立项项目管理</el-menu-item>
    <el-menu-item index="3" flag="index3">中期检查申请</el-menu-item>
    <el-menu-item index="4" flag="index4">项目变更申请</el-menu-item>
&lt;!&ndash;    <el-menu-item index="5" flag="index5">项目变更指导教师申请</el-menu-item>
    <el-menu-item index="6" flag="index6">项目变更记录</el-menu-item>&ndash;&gt;
    <el-menu-item index="7" flag="index7">项目结题申请</el-menu-item>
    <el-menu-item index="8" flag="index8">结题项目管理</el-menu-item>-->

    <router-link style="width: 132px" id="index1" to="/hasApplied/index1" tag="el-menu-item" index="1">我申请的项目</router-link>
    <router-link style="width: 132px" id="index2" to="/hasApplied/index2" tag="el-menu-item" index="2">立项项目管理</router-link>
    <router-link style="width: 132px" id="index3" to="/hasApplied/index3" tag="el-menu-item" index="3">中期检查申请</router-link>
    <router-link style="width: 132px" id="index4" to="/hasApplied/index4" tag="el-menu-item" index="4">项目变更申请</router-link>
<!--
    <router-link id="index5" to="/hasApplied/index5" tag="el-menu-item" index="5"><i class="el-icon-s-order"></i>项目变更指导教师申请</router-link>
-->
<!--    <router-link id="index6" to="/hasApplied/index6" tag="el-menu-item" index="6"><i class="el-icon-s-order"></i>项目变更记录</router-link>-->
    <router-link style="width: 132px" id="index7" to="/hasApplied/index7" tag="el-menu-item" index="7">项目结题申请</router-link>
    <router-link style="width: 132px" id="index8" to="/hasApplied/index8" tag="el-menu-item" index="8">结题项目一览</router-link>
  </el-menu>
  </div>
</template>

<script>
import index1 from '../index/index1'
import index2 from '../index/index2'
import index3 from '../index/index3'
import index4 from '../index/index4'
import index7 from '../index/index7'
import index8 from '../index/index8'

export default {
  name: 'hasApplied',
  components: {index1, index2, index3, index4, index7, index8},
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tableData: []
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>
  #app1{
    width: 100%;
  }
</style>
