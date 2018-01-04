<template>
  <div id="headNav">
    <div class="user">
      <icon name="user-circle-o" scale="1.5"></icon>
      <span>{{userName}}</span>
    </div>
    <div class="setting">
      <el-button type="text" @click="dialogTableVisible = true"><span><icon name="pencil-square-o" scale="1"></icon></span>修改密碼</el-button>
      <el-button type="text" @click="quit"><span><icon name="sign-out" scale="1"></icon></span>退出</el-button>
    </div>
    <el-dialog title="修改密码" size="tiny" :visible.sync="dialogTableVisible" :before-close="beforeClose">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px" style="width:380px;margin:0 auto;">
        <el-form-item label="旧密码" prop="password">
          <el-input v-model="form.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="form.newPassword" type="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
    var checkConfirmPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'));
      }else if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form:{
        password:'',
        newPassword:'',
        confirmPassword:''
      },
      userName: '劉曉凡',
      dialogTableVisible:false,
      rules: {
          password: [
             { required: true, message: '请输入旧密码', trigger: 'blur' },
          ],
          newPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
          ],
          confirmPassword: [
            { validator: checkConfirmPassword, trigger: 'blur' }
          ]
        }
    }
  },
    methods:{
      beforeClose(){
        this.dialogTableVisible = false;
      },
      quit(){
        localStorage.token = '';
        this.$router.push('/login');
      },
      confirm(){
        this.$refs.form.validate((valid) =>{
          if (!valid) {
            return;
          }
          api.common({
            loading:true,
            method:'updatePassword',
            param:[{
              password: this.form.password,
              newPassword: this.form.newPassword,
            }]
          }).then(response => {
            this.$message({
              type: 'success',
              message: '修改成功!'
            });
            this.form = {
              password:'',
              newPassword:'',
              confirmPassword:''
            };
            this.dialogTableVisible = false;
          });
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  #headNav {
    height: 90px;
    line-height: 90px;
    width: 100%;
    border-bottom: 3px solid #545c64;
    position: fixed;
    top: 0px;
    left: 150px;
    .user {
      float: left;
      padding: 0px 10px;
      font-size: 30px;
      font-weight: bold;
    }
    .setting {
      float: right;
      margin-right: 180px;
      font-size: 18px;
    }
  }
</style>  