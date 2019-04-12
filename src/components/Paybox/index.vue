<template>
  <div class="paybox">
    <ul class="box-wrap">
      <input type="password" maxlength="6" v-model="payPwd" @keyup="emitPwd" autocomplete="new-password">
      <li 
        v-for="item in boxList" 
        class="box-item" 
        :key="item.sequeence"
        :class="{ filledDot : payPwd.length >= item.sequeence}">
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'paybox',
  components: { },
  data() {
    return {
      payPwd: '',
      boxList: [
        {
          sequeence: 1
        },
        {
          sequeence: 2
        },
        {
          sequeence: 3
        },
        {
          sequeence: 4
        },
        {
          sequeence: 5
        },
        {
          sequeence: 6
        }
      ]
    }
  },
  methods: {
    emitPwd() {
      this.$emit('payPwd', this.payPwd)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/paybox.less';
</style>

