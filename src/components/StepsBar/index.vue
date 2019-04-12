<template>
  <div class="steps-bar" :style="`width:${width}`">
    <div 
    class="item"
    :class="{active:index === x.index}" 
    v-for="(x,i) in item"
    :style="`
    background-color:${index === x.index?activeColor:bgColor};
    background-color:${index < x.index?disableColor:''};
    width:${x.width||100/item.length}%;
    height:${x.height||10}px;
    `"
    :key="x.index">
      <span class="ball">{{x.index || i}}</span>
      <p 
      class="text"
      :style="`
        color:${index === x.index?activeColor:bgColor};
        color:${index < x.index?disableColor:''}
        `">{{x.txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'steps-bar',
  components: { },
  props: {
    item: {
      type: Array,
      default() {
        return [
          {
            txt: this.$t('tradePwd.part6'),
            color: `#ccc`,
            index: '1'
          },
          {
            txt: this.$t('tradePwd.part5'),
            color: `#ccc`,
            index: '2'
          },
          {
            txt: this.$t('tradePwd.part7'),
            color: `#ccc`,
            index: '3'
          }
        ]
      }
    },
    bgColor: {
      type: String,
      default: '#ccc'
    },
    disableColor: {
      type: String,
      default: '#ccc'
    },
    activeColor: {
      type: String,
      default: '#999'
    },
    color: {
      type: String,
      default: '#ccc'
    },
    index: {
      type: Number,
      default: 1
    },
    width: String
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/less" lang="less" scoped>
.steps-bar{
  font-size: 16px;
  .item{
    display: inline-block;
    position: relative;
    text-align: center; 
    &:first-child{
      border-radius: 5px 0 0 5px;
    }
    &:last-child{
      border-radius: 0 5px 5px 0;
    }
    .ball{
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 25px;
      height: 25px;
      line-height: 25px;
      background-color: inherit;
      border-radius: 50%;
      font-size: 16px;
      color: #fff;
    }
    .text{
      margin-top: 25px;
    }
  }
}
</style>