<template>
  <el-button size="small" :loading="loading" :disabled="!this.$route.meta.download&& !this.action" type="primary" @click="handleExport">{{ this.$t('translateLang.user.text16') }}</el-button>
</template>

<script>
// import request from '@/utils/request'
import qs from 'qs'
export default {
  name: 'export-excel',
  components: { },
  props: {
    action: String,
    Options: {}
  },
  data() {
    return {
      loading: false
    }
  },
  mounted() {
  },
  methods: {
    handleExport() {
      const ss = this.Options ? '?' + qs.stringify(this.Options) : ''
      window.location.href = (this.action || this.$route.meta.download) + ss
    //   this.loading = true
      // request({
      //   url: this.action || this.$route.meta.download,
      //   data: this.Options,
      //   method: 'post'
      // }).then(res => {
      //   console.log('res', res)
      //   this.loading = false
      // }).catch(_ => {
      //   this.loading = false
      // })
    }
  }
}
</script>
