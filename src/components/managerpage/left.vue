<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246) ;">
    <el-menu>

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-notebook-1"></i>项目管理</template>
        <el-menu-item-group>
          <router-link to="/release" style="text-decoration: none"><el-menu-item index="1-1">项目发布</el-menu-item></router-link>
          <router-link to="/apply" style="text-decoration: none"><el-menu-item index="1-2">申请管理</el-menu-item></router-link>
          <router-link to="/check" style="text-decoration: none"><el-menu-item index="1-3">项目审核</el-menu-item></router-link>
          <router-link to="/lastcheck" style="text-decoration: none"><el-menu-item index="1-4">项目结题</el-menu-item></router-link>
          <router-link to="/verify" style="text-decoration: none"><el-menu-item index="1-5">项目评估</el-menu-item></router-link>
          <router-link to="/view" style="text-decoration: none"><el-menu-item index="1-6">项目查看</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-coin"></i>财务管理</template>
        <el-menu-item-group>
          <router-link to="/money" style="text-decoration: none"><el-menu-item index="2-1">经费详情</el-menu-item></router-link>
          <router-link to="/moneyPermit" style="text-decoration: none"><el-menu-item index="2-2">经费批准</el-menu-item></router-link>
          <router-link to="/moneyList" style="text-decoration: none"><el-menu-item index="2-3">经费明细</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-notebook-2"></i>发布学术消息</template>
        <el-menu-item-group>
          <router-link to="/ShowNews" style="text-decoration: none"><el-menu-item index="3-1">发布新闻</el-menu-item></router-link>
          <router-link to="/PublishResult" style="text-decoration: none"><el-menu-item index="3-2">发布科研成果</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-data-line"></i>年度工作总结</template>
        <el-menu-item-group>
          <router-link to="/summarys1" style="text-decoration: none"><el-menu-item index="4-1">项目申请情况</el-menu-item></router-link>
          <router-link to="/summarys2" style="text-decoration: none"><el-menu-item index="4-2">项目评估情况</el-menu-item></router-link>
          <router-link to="/summarys3" style="text-decoration: none"><el-menu-item index="4-3">项目进度情况</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
    export default {
        name: "left"
    }
</script>

<style scoped>

</style>
