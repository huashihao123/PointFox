<template>
  <div id="headerBook">
     <div id="headerTitle">
         <span>
            {{message}}
         </span>
     </div>
     <div id="headerFunction">
              <el-row>
              <router-link to="/main">
              <el-button type="primary" disable>系统登入</el-button>
              </router-link>
              <router-link to="/work">
              <el-button type="primary" disable>工作中心</el-button>
              </router-link>
              <router-link to="udent">
              <el-button type="danger" disable>学生信息查询</el-button>
              </router-link>
              <router-link to="/book">
              <el-button type="primary" disable>图书信息查询</el-button>
              </router-link>
              <router-link to="/cnnode">
              <el-button type="primary" disable>cnnode论坛</el-button>
              </router-link>
              </el-row>
     </div>
  </div>
</template>

<script>
export default {
    name:"headerBook",
    data(){
        return {
            message:"江西软件大学-新型图书管理系统"
        }
    }
}
</script>

<style>
/* #headerBook{
    background-color: red; 
} */
#headerTitle{
    /* background-color: blue; */
    width: 400px;
    height: 60px;
    color:white;
    font-size: 20px;
    font-weight: bolder;
    line-height: 60px;
    display: inline-block;
        }
 #headerFunction{
            float: right;
            display: inline-block;
            /* width: 200px; */
            line-height: 60px;
            /* background-color: green; */
        }
 #headerFunction > .el-button {
            display: inline-block;
            margin-top: 8px;
            background-color: #0a9588;
            border-color: #0a9588;
        }

</style>