<template>
  <div class="login" id="login-box">
    <el-container>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <el-tabs v-model="activeName" type="card" @tab-click="ontabs">
              <el-tab-pane label="无账户？注册" name="ruleForm">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                  <el-form-item prop="username" label-width="0px">
                    <el-input placeholder="请输入账户名" v-model="ruleForm.username">
                      <template slot="prepend">账号</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password" label-width="0px">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" auto-complete="off">
                      <template slot="prepend">密码</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="checkPassword" label-width="0px">
                    <el-input type="password" placeholder="请再出输入密码" v-model="ruleForm.checkPassword" auto-complete="off">
                      <template slot="prepend">确认密码</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label-width="0px">
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="用户登录" name="loginForm">
                <el-form :model="loginForm" status-icon :rules="loginRule" ref="loginForm" label-width="100px">
                  <el-form-item prop="username" label-width="0px">
                    <el-input placeholder="请输入账户名" v-model="loginForm.username">
                      <template slot="prepend">账号</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="password" label-width="0px">
                    <el-input type="password" placeholder="请输入密码" v-model="loginForm.password" auto-complete="off">
                      <template slot="prepend">密码</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label-width="0px">
                    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                    <el-button @click="resetForm('loginForm')">重置</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<style scoped>
.login{
  border: 1px solid red;
  width: 100%;
  background: white;
}
.el-input{
  margin-top: 20px;
}
</style>
<script>
export default {
  name:'login',
  data(){
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }else{
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPassword !== '') {
          this.$refs.ruleForm.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var checkPassword=(rule,value,callback)=>{
      if(!value){
        return callback(new Error('密码不能为空'))
      }else{
        callback();
      }
    }
    return {
      activeName: 'ruleForm',
      ruleForm:{
        password: '',
        checkPassword: '',
        username: ''
      },
      rules:{
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' }
        ]
      },
      loginForm:{
        username:'',
        password:''
      },
      loginRule:{
         username: [
          { validator: checkUsername, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  mounted(){
    var orderHeight=document.body.clientHeight;
      document.getElementById("login-box").style.height=orderHeight+'px';
  },
  methods:{
    submitForm(formName) {
      let vm=this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(formName=="loginForm"){
            vm.onLogin();
          }else{
            vm.onRegister();
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    onRegister(){
      console.log('注册');
    },
    onLogin(){
      console.log('登录');
    },
    ontabs(){
     this.resetForm(this.activeName);
    }
  }
}
</script>


