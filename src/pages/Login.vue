<template>
  <el-row type="flex" justify="center" align="middle" class="wrapper">

    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="手机号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

    <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button @click="empyForm">重置</el-button>
  </el-form-item>

    </el-form>
  </el-row>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {

        /**
         * 有关业务逻辑的方法
         */
        empyForm() {
            this.form = {
                username: '',
                password: '' 
            }
        },


        /**
         * 有关网络请求的方法
         */
        login() {
            
            if(!this.form.username || !this.form.password) {
                this.$message.error('请输入手机号和密码')
                return
            }

            this.$axios({
                url:'/login',
                method: 'post',
                data: {
                    username: this.form.username,
                    password: this.form.password
                }
            }).then(res=>{

                // console.log(res);
                if(res.data.message == '登录成功') {
                localStorage.setItem('token',res.data.data.token)
                localStorage.setItem('user',JSON.stringify(res.data.data.user))

                this.$router.push('/')
                }
            })
        }
    }
};
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
</style>