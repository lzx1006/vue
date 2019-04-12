<template>
  <div class="alert">
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="375px">
      <img src="static/images/login_register/success.jpg" alt="">
      <p><slot></slot></p>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'alert',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .alert {
    .el-dialog__header{
      background: white !important;
      padding: 0px 20px 10px;
    }
    .el-dialog__body{
      text-align: center;
      p{
        margin: 25px 0;
      }
      .el-button--primary{
        padding: 11px 60px;
      }
    }
  }
</style>
