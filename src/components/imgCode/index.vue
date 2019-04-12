<template>
  <div class="imgcode" :loading="!toogle">
    <transition name="fade" mode="out-in">
      <img @click="getCode" :src="url+'?time='+new Date().getTime()" alt="">
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  },
  data() {
    return {
      toogle: true
    }
  },
  created() {
  },
  methods: {
    getCode() {
      this.toogle = false
      this.$nextTick(() => {
        this.toogle = true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.imgcode{
  display: inline-block;
  cursor: pointer;
  img{
    width: inherit;
    height: inherit;
  }
}
</style>