<template>
  <div class="foot">
    <el-row class="container">
      <el-col :span="10">
        <div class="grid-content bg-purple logo">
          <img :src="$t('img.logoBottomUrl')">
          <p v-text="$t('footer.copyright')"></p>
        </div>
        </el-col>
      <el-col :span="14" class="info">
        <el-row >
        <!-- <el-col :span="6"> 
          <div class="grid-content bg-purple">
            <h1 v-text="$t('footer.service')">服务</h1>
            <p><router-link to="/" v-text="$t('footer.serviceInformation')">服务咨讯</router-link></p>
            <p><router-link to="/" v-text="$t('footer.ecology')">中非国际生态</router-link></p>
          </div>
        </el-col> -->
          <el-col :span="6" :offset="6">
            <div class="grid-content bg-purple">
              <h1 v-text="$t('footer.about')">公司简介</h1>
              <p><router-link to="/about" v-text="$t('footer.aboutUs')">关于我们</router-link></p>
              <!-- <p><router-link to="/notice" v-text="$t('footer.announcement')">公告</router-link></p> -->
              <p v-if="$i18n.locale === 'zn'"><a href="https://help.crypto.hkcexp.com/zh-cn/notice" v-text="$t('footer.announcement')"></a></p>
              <p v-if="$i18n.locale === 'zh-hk'"><a href="https://help.crypto.hkcexp.com/zh-tw/notice" v-text="$t('footer.announcement')"></a></p>
              <p v-if="$i18n.locale === 'en'"><a href="https://help.crypto.hkcexp.com/en-us/notice" v-text="$t('footer.announcement')"></a></p>
              <p><router-link to="/proto" v-text="$t('footer.proto')">服务条款</router-link></p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <h1 v-text="$t('footer.tool')">工具</h1>
              <!-- <p><router-link to="/downloadApp" v-text="$t('footer.downloadAPP')">客户端下载</router-link></p> -->
              <!-- <p><a href="https://help.crypto.hkcexp.com" v-text="$t('footer.help')"></a></p> -->
              <p v-if="$i18n.locale === 'zn'"><a href="https://help.crypto.hkcexp.com/zh-cn" v-text="$t('footer.help')"></a></p>
              <p v-if="$i18n.locale === 'zh-hk'"><a href="https://help.crypto.hkcexp.com/zh-tw" v-text="$t('footer.help')"></a></p>
              <p v-if="$i18n.locale === 'en'"><a href="https://help.crypto.hkcexp.com/en-us" v-text="$t('footer.help')"></a></p>
              <p><router-link to="/numberAsset" v-text="$t('footer.numberAsset')">数字资产介绍</router-link></p>
              <p><router-link to="/ratesStandard" v-text="$t('ratesStandard.part4')">费率标准</router-link></p>
            </div>
            </el-col>
          
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <h1 v-text="$t('footer.contactUs')">联系我们</h1>
              <!-- <p><img src="static/images/QQ.png"/> 910328151</p> -->
              <p><img src="static/images/email.png"/> cs@hkcexp.com</p>
              <p><img src="static/images/tel.png"/> 852-9600-1039</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .foot{
    .container{
      width: auto;
    }
    background-color: #e3e5e8;
    color: #777889;
    margin-top: 85px;
    padding: 34px 0;
    .logo{
      text-align: left;
      margin-top: 12px;
      p{
        padding-top: 11px;
        font-size: 14px;
      }
    }
    .info {
      text-align: left;
      h1{
        color: #404549;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px !important;
      }
      p{
        margin: 0;
        margin-bottom: 7px;
        a{
          text-decoration: none;
          color: #777889;
          font-size: 14px;
          
        }
      }
    }
  }
</style>