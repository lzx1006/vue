<template>
  <div class="nav">
   <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="navItem"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        :router=false
        @close="handleClose">
        <el-submenu index="1"  v-for="item in navObj" :key="item.id">
          <template slot="title">
            <i class="icon" :class="item.subMenuIcon" v-if="item.subMenuIconType == 0"></i>
            <span>{{ item.subMenu }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="list.navItem" v-for="list in item.menuItemList" :key="list.id">{{ list.navName }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>
<script>
  export default {
    props: ['navItem', 'navObj'],
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>