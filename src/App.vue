<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
html,body,#app{height:100%;padding: 0;margin:0;}
.main{
  float: left;
  width: 100%;
  background-color: #eff2f7;
  height: 100%;
  overflow: auto;
}
.clearfix::after{
  content:' ';
  display:block;
  clear: both;
}
*{
  box-sizing: border-box;
}
ul{
  padding: 0;
}
</style>
