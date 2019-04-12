<template>
  <div class="custom-service">
    <transition name="fade">
      <iframe :src="srcURL" class="custom-service-dialog" v-show="serviceDialogVisible"></iframe>
    </transition>
    <el-button type="primary" class="custom-service-btn" @click="handleOpenDialog">{{ btnTxt }}</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        serviceDialogVisible: false,
        btnTxt: '',
        srcURL: ''
      }
    },
    created() {
      this.btnTxt = this.$t('customerServiceDialog.onlineServie')
    },
    methods: {
      handleOpenDialog() {
        if (this.serviceDialogVisible) {
          this.serviceDialogVisible = false
          this.btnTxt = this.$t('customerServiceDialog.onlineServie')
        } else {
          this.serviceDialogVisible = true
          this.btnTxt = this.$t('customerServiceDialog.closeDialog')
          this.srcURL = 'https://kefu6.kuaishang.cn/bs/im.htm?cas=118598___882607&fi=121048'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .custom-service{
    .custom-service-btn{
      position: fixed;
      z-index: 999;
      right: 10px;
      bottom: 120px;
      width: 143px;
      height: 60px;
      padding: 0;
      border-radius: 57px;
      padding-left: 25px;
      background: url(/static/images/kefu.png) 20px  center no-repeat  #1fa8f6,;
    }
    .custom-service-dialog{
      z-index: 999;
      width: 490px;
      height: 613px;
      position: fixed;
      right: 10px;
      bottom: 200px;
      border: none;
    }
    .fade-enter-active, .fade-leave-active {
      transition: all 0.2s ease-out;
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;
    }
  }
</style>
