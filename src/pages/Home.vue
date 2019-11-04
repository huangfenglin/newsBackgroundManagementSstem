<template>

  <el-container class="wrapper">

    <el-aside width="200px">

        <div class="logo">
            This is the logo
        </div>
        
        <el-menu>
            <el-menu-item index="2" @click="jump('/editpost')">
                <i class="el-icon-menu"></i>
                <span slot="title">文章列表</span>
            </el-menu-item>
            <el-menu-item index="4" @click="jump('/postlist')">
                <i class="el-icon-setting"></i>
                <span slot="title">发布文章</span>
            </el-menu-item>
        </el-menu>

    </el-aside>

    <el-container>
        <el-header>
            <img class="avatar" v-if="user.head_img" :src="axios.defaults.baseURL+head_img" alt="">
            <img class="avatar" v-else src="/static/img/touxiang.jpg" alt="">
             <span class="nickname">{{user.nickname}}</span>
        </el-header>
        <el-main>Main
            <router-view/>
        </el-main>
    </el-container>

  </el-container>

</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('user'))
        }
    },
    methods: {
      /**
       * 业务逻辑的方法
       */
      jump(path) {
        if(path !== this.$route.path) {
          this.$router.push(path)
        }
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
  .el-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .avatar {
          height: 48px;
          width: 48px;
          object-fit: cover;
          border-radius: 50%
      }
      .nickname {
          font-weight: 600;
          margin: 0 10px;
          color: #333;
      }
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
    .logo {
        line-height: 60px;
        font-size: 24px;
        text-align: center;
        color: #fff;

    }
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
  .el-menu {
      background-color: #fff;
      border-left: 2px solid #303f51;
      border-right: 2px solid #303f51
  }
</style>