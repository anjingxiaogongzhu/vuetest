<template>
  <div class="billManage">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }"><icon name="home"></icon>当前位置</el-breadcrumb-item>
      <el-breadcrumb-item>臻收银管理</el-breadcrumb-item>
      <el-breadcrumb-item>财务管理</el-breadcrumb-item>
      <el-breadcrumb-item>账单管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="店铺">
          <el-input v-model="formInline.user" placeholder="店铺名" size="small" class="input"></el-input>
        </el-form-item>
        <el-form-item label="商户">
          <el-input v-model="formInline.user" placeholder="商户名" size="small" class="input"></el-input>
        </el-form-item>
        <el-form-item label="支付来源">
          <el-select v-model="formInline.region" placeholder="支付来源" size="small" class="input">
            <el-option label="支付宝" value="shanghai"></el-option>
            <el-option label="微信" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款方式">
          <el-select v-model="formInline.region" placeholder="支付来源" size="small" class="input">
            <el-option label="支付宝" value="shanghai"></el-option>
            <el-option label="微信" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search" size="small">查询</el-button>
        </el-form-item>
        <div class="on-off" @click="searchCell = !searchCell" style="cursor: pointer;">
           <icon name="chevron-down" v-if="!searchCell"></icon>
           <icon name="chevron-up" v-if="searchCell"></icon>
        </div>
      </el-form>
    </div>
    <div class="moreSearch" v-if="searchCell">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="formInline.user" placeholder="订单号" size="small" class="input"></el-input>
        </el-form-item>
        <el-form-item label="代理商">
          <el-input v-model="formInline.user" placeholder="代理商" size="small" class="input"></el-input>
        </el-form-item>
        <el-form-item label="服务码">
          <el-input v-model="formInline.user" placeholder="服务码" size="small" class="input"></el-input>
        </el-form-item>
        <el-form-item label="收款时间">
          <el-date-picker
          v-model="value9"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          default-value="2017-10-01"
          size="small">
        </el-date-picker>
        </el-form-item>
        
      </el-form>
      
    </div>
    <div class="table">
      <el-table
        :data="tableData"
        stripe
        height="500"
        align="center"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div class="fenye">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </div>
  </div>

</template>
<script>
  export default {
    data(){
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        searchCell: false,
        formInline: {
          user: "",
          region: ""
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      search() {
        
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search {
    padding-left: 20px;
    padding-top: 20px;
    text-align: left;
    .input {
      width: 120px;
    }
  }
  .on-off {
    display: inline-block;
    margin-top: 10px;
  }
  .moreSearch {
    padding-left: 20px;
    text-align: left;
    .input {
      width: 150px;
    }
  }
  .fenye {
    text-align: left;
    padding: 20px;
  }
</style>

