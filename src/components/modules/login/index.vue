<template>
  <div class="warpLogin">
    <div class="contentLogin">
      <div class="titleLogin">
        失乐园后台管理系统
      </div>
      <div class="formLogin">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input type="input" v-model="form.username" @keyup.enter="submit" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="form.password" @keyup.enter="submit" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-checkbox class="remPwd" v-model="form.checked">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button class="btnLogin" type="primary" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username:'',
	      	password:'',
	      	checked:false
        }
      }
    },
    methods: {
      submit: function() {
        console.log(1);
        this.$router.push('mainFrame');
      }
    }
  }
</script>
<style lang="scss">
  .warpLogin {
    position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
    background: url('../../../assets/image/bg.png') 100% 100%  no-repeat;
    .contentLogin {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 520px;
        height: 400px;
        background: #fff;
        border-radius: 6px;
        .titleLogin {
            margin: 20px auto;
            font-size: 28px;
            font-weight: 500;
            color: #333;
        }
        .formLogin {
            width: 400px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .remPwd {
                float: left;
            }
            .btnLogin {
                width: 100%
            }
        }

    }
}
</style>
