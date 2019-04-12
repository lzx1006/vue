<template>
  <div class="qrcode">
    <div :id="qrId" class="qrcode-warp" :ref="qrId"></div>
  </div>
</template>

<script>
const QRCode = window.QRCode
export default {
  name: 'qrcode',
  components: { },
  props: {
    id: {
      type: String
    },
    text: {
      type: String
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: '#000000'
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    logo: {
      type: Object,
      default() {
        return {
          name: 'no-logo-inside-qrcode',
          src: null
        }
      }
    }
  },
  watch: {
    text(val) {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      qrText: this.text,
      qrId: this.id || 'qr' + new Date(),
      qrLogo: this.logo
    }
  },
  methods: {
    init() {
      if (!QRCode || !this.text) return
      // 强制清空可能绘制的二维码后重绘
      document.getElementById(this.qrId).innerHTML = null
      const qrcode = new QRCode(this.qrId, {
        text: this.text,
        width: this.width,
        height: this.height,
        colorDark: this.color,
        colorLight: this.bgColor,
        correctLevel: QRCode.CorrectLevel.M
      })
      this.qrcodeInited = qrcode
    }
  }
}
</script>

<style lang="less" scoped>
  .qrcode{
  }
</style>