<template>
      <div id="app">
        <!-- 头部导航 -->
        <header class="header">
	        <div class="title">
	        	<i class="el-icon-printer"></i>
	        	<span>XXXX管理系统</span>
	        </div>
	        <div class="welcome">
	        	<i class="el-icon-service"></i>
	        	<span @mouseenter="show=show" @mouseleave="show =!show" >经营者&nbsp;&nbsp;周立波，您好<i class="el-icon-arrow-down"></i>&nbsp;&nbsp;<i class="el-icon-message"></i></span>
	        	<div class="detail">
	        		<el-collapse-transition>
		        		<el-menu  class="transition-box" :router="true" v-show="!show">
			                <el-menu-item index="/personData">个人资料</el-menu-item>
			                <el-menu-item index="/changePwd">修改密码</el-menu-item>
			                <el-menu-item index="/exit">退出登录</el-menu-item>
			            </el-menu>
			        </el-collapse-transition>
	        	</div>
	        </div>
        </header>


        <main>
              <!-- 左侧导航 -->
            <div class="main-left">
              <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
                <el-menu-item index="/storeManage" :class="{'isActive': active}">店铺管理</el-menu-item>
                <el-menu-item index="/financeManage" :class="{'isActive': !active}">财务管理</el-menu-item>
                <el-menu-item index="/valueService" :class="{'isActive': !active}">增值服务</el-menu-item>
                <el-menu-item index="/report" :class="{'isActive': !active}">报表</el-menu-item>
                <el-menu-item index="/accountManage" :class="{'isActive': !active}">账户管理</el-menu-item>
                <el-menu-item index="/systemManage" :class="{'isActive': !active}">系统管理</el-menu-item>
              </el-menu>
            </div>

              <!-- 右侧主内容区 -->
              <div  class="main-right" >
                  <router-view class="view"></router-view>
              </div>
        </main>
      </div>
    </template>

    <script>
	import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
    export default {
      name: 'app',
      data: function (){
        return {
            active:true,
            show:true
        }
      }
    }
    </script>

<style lang="scss">
  @import './MainFrame.scss'
</style>


