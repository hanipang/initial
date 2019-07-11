<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt style="margin-bottom:10px" />
      <el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="moblie">
          <el-input placeholder="请输入手机号" v-model="ruleForm.moblie"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input placeholder="请输入验证码"  v-model="ruleForm.code" style="width:70%;float:left"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item style="text-align:left;">
          <el-checkbox v-model="checked" style="float:left;width:0px;height:20px"></el-checkbox>我已阅读并同意
          <el-link style="color:#409EFF;vertical-align: baseline;height:20px">用户协议</el-link>和
          <el-link style="color:#409EFF;vertical-align: baseline;height:20px">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const checkMoblie = (rule,value,callback) => {
      // 逻辑
      if (/^1[3-9]\d{9}$/.test(value)){
        callback()
      }else{
        callback(new Error('手机号格式不对'))  
      }
    }
    return {
      checked: true,
      ruleForm: {
        moblie: "17778889522",
        code: "666666"
      },
      rules: {
        moblie: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // { min: 11, max: 11, message: "请输入正确的手机长度", trigger: "blur" },
          { validator: checkMoblie, trigger: 'blur' }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6, max: 6, message: "请输入正确的验证码长度", trigger: "blur" }
          ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登陆成功");
          this.$router.push('/')
        //   this.axios.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
        //   this.ruleForm).then(res => {
        //     const data = red.data
        //     console.log(data)
        //     alert("登陆成功");
        //     // 跳转到首页 保存登陆状态
        //     this.$router.push('/')
        //   }).catch(err => {
        //     console.log(err)
        //   })
        // } else {
        //   alert('写完没写完自己心里没B数？？？')
        //   console.log("error submit!!");
        //   return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/1561104479663.jpg) no-repeat center / cover;
  .login-box {
    width: 450px;
    height: 350px;
    position: absolute;
    background-color: darkcyan;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
      height: 50px;
    }
  }
}
</style>

