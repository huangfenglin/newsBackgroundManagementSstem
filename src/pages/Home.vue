<template>

  <el-container class="wrapper">

    <el-aside width="200px">Aside</el-aside>
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container>

  </el-container>

</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    }
};
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0
  }
  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #303f51;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>