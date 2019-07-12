<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246) ;">
    <el-menu>

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-notebook-1"></i>大学生创新创业</template>
        <el-menu-item-group>
          <router-link to="/sApply" style="text-decoration: none"><el-menu-item index="1-1">创新项目申请</el-menu-item></router-link>
          <router-link to="/hasApplied" style="text-decoration: none"><el-menu-item index="1-2">我申请的项目</el-menu-item></router-link>
          <router-link to="/onProject" style="text-decoration: none"><el-menu-item index="1-3">我参与的项目</el-menu-item></router-link>
          <router-link to="/sDefault" style="text-decoration: none"><el-menu-item index="1-4">自主项目申报</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-coin"></i>实验室开放</template>
        <el-menu-item-group>
          <router-link to="/lab1" style="text-decoration: none"><el-menu-item index="2-1">实验室1</el-menu-item></router-link>
          <router-link to="/lab2" style="text-decoration: none"><el-menu-item index="2-2">实验室2</el-menu-item></router-link>
          <router-link to="/lab3" style="text-decoration: none"><el-menu-item index="2-3">实验室3</el-menu-item></router-link>
          <router-link to="/lab4" style="text-decoration: none"><el-menu-item index="2-4">实验室4</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        name: "left2"
    }
</script>

<style scoped>

</style>
