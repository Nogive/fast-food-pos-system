<template>
  <div class="pos">
    <el-container>
      <el-aside width="auto" height="100%">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse">
          <el-menu-item index="1">
            <i class="icon iconfont icon-wodezichan"></i>
            <span slot="title">收银</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="icon iconfont icon-dianpu"></i>
            <span slot="title">店铺</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="icon iconfont icon-hanbao"></i>
            <span slot="title">商品</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="icon iconfont icon-huiyuanqia"></i>
            <span slot="title">会员</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="icon iconfont icon-tongji"></i>
            <span slot="title">统计</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="back">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>快餐收银系统</span>
        </el-header>
        <el-main>
          <el-col :span="8">
            <el-tabs>
              <el-tab-pane label="点餐">
                <el-table :data="tableData" border show-summary style="width:100%">
                  <el-table-column prop="goodsName" label="商品"></el-table-column>
                  <el-table-column prop="count" label="量" width="50"></el-table-column>
                  <el-table-column prop="price" label="金额" width="70"></el-table-column>
                  <el-table-column label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                      <el-button type="text" size="small">删除</el-button>
                      <el-button type="text" size="small">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <el-row class="btn-group">
                  <el-button type="warning" icon="el-icon-edit-outline">挂单</el-button>
                  <el-button type="danger" icon="el-icon-delete" >删除</el-button>
                  <el-button type="success" icon="el-icon-success" >结账</el-button>
                  <el-button type="default" @click="onValid">验证登录过期</el-button>
                </el-row>   
              </el-tab-pane>
              <el-tab-pane label="挂单">
              挂单
              </el-tab-pane>
              <el-tab-pane label="外卖">
              外卖
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="16">
            <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul class="clearfix">
                  <li v-for="(item,index) in oftenGoods" :key="index">
                    <span>{{item.goodsName}}</span>
                    <span class="o-price">￥{{item.price}}元</span>
                  </li>
                </ul>
              </div>
              <div class="goods-type">
                <el-tabs>
                  <el-tab-pane label="汉堡">
                    <el-row :gutter="10">
                      <el-col :span="6" v-for="item in type0Goods" :key="item.goodsId">
                        <el-card :body-style="{ padding: '0px' }" >
                          <img src="../../assets/hamburger.50e4091.png" class="image">
                          <div style="padding: 5px">
                            <span>{{item.goodsName}}</span>
                            <div class="bottom clearfix">
                              <time class="time">￥{{item.price}}元</time>
                              <el-button type="text" class="button" icon="el-icon-star-on"></el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="小食">
                    <el-row :gutter="10">
                      <el-col :span="6" v-for="item in type1Goods" :key="item.goodsId">
                        <el-card :body-style="{ padding: '0px' }" >
                          <img src="../../assets/hamburger.50e4091.png" class="image">
                          <div style="padding: 5px">
                            <span>{{item.goodsName}}</span>
                            <div class="bottom clearfix">
                              <time class="time">￥{{item.price}}元</time>
                              <el-button type="text" class="button" icon="el-icon-star-on"></el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="饮料">
                    <el-row :gutter="10">
                      <el-col :span="6" v-for="item in type2Goods" :key="item.goodsId">
                        <el-card :body-style="{ padding: '0px' }" >
                          <img src="../../assets/hamburger.50e4091.png" class="image">
                          <div style="padding: 5px">
                            <span>{{item.goodsName}}</span>
                            <div class="bottom clearfix">
                              <time class="time">￥{{item.price}}元</time>
                              <el-button type="text" class="button" icon="el-icon-star-on"></el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="套餐">
                    <el-row :gutter="10">
                      <el-col :span="6" v-for="item in type3Goods" :key="item.goodsId">
                        <el-card :body-style="{ padding: '0px' }" >
                          <img src="../../assets/hamburger.50e4091.png" class="image">
                          <div style="padding: 5px">
                            <span>{{item.goodsName}}</span>
                            <div class="bottom clearfix">
                              <time class="time">￥{{item.price}}元</time>
                              <el-button type="text" class="button" icon="el-icon-star-on"></el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
        </el-main>
        <el-footer style="text-align: right; font-size: 12px">
          <i class="el-icon-location" style="margin-right: 15px"></i>
          <span>上海市徐汇区钦州北路分店</span>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import qs from 'qs';
export default {
  name:'Home',
  data(){
    return {
      isCollapse:false,
      tableData: [
        {
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, 
        {
          
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, 
        {
         
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, 
        {
         
          goodsName: '甜筒',
          price: 8,
          count:1
        }
      ],
      oftenGoods:[
        {
          goodsId:1,
          goodsName: '可口可乐',
          price: 8,
        }, 
        {
          goodsId:2,
          goodsName: '香辣鸡腿堡',
          price: 15,
        }, 
        {
          goodsId:3,
          goodsName: '爱心薯条',
          price: 8,
        }, 
        {
          goodsId:4,
          goodsName: '甜筒',
          price: 8,
        }
      ],
      type0Goods:[
        {
          goodsId:1,
          goodsName: '可口可乐',
          price: 8,
          goodsImg:"../../assets/hamburger.50e4091.png"
        }, 
        {
          goodsId:2,
          goodsName: '香辣鸡腿堡',
          price: 15,
          goodsImg:"../../assets/hamburger.50e4091.png"
        }, 
        {
          goodsId:3,
          goodsName: '爱心薯条',
          price: 8,
          goodsImg:"../../assets/hamburger.50e4091.png"
        }, 
        {
          goodsId:4,
          goodsName: '甜筒',
          price: 8,
          goodsImg:"../../assets/hamburger.50e4091.png"
        }
      ],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      type:'',
      token:''
    }
  },
  created(){
    this.$http.get('http://jspang.com/DemoApi/oftenGoods.php').then(res=>{
      this.oftenGoods=res.data;
    },err=>{
      console.log(err);
    });
    this.$http.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(response=>{
        this.type0Goods=response.data[0];
        this.type1Goods=response.data[1];
        this.type2Goods=response.data[2];
        this.type3Goods=response.data[3];
    })
    .catch(error=>{
        console.log(error);
        alert('网络错误，不能访问');
    })
  },
  watch:{
    token(){
      if(this.token!=''){
        this.$http.defaults.headers.common['Authorization']=this.type+' '+this.token;
      }
    }
  },
  methods:{
    handleCommand(command){
      if(command=='back'){
        this.$router.replace('/login');
      }
    },
    onValid(){
      let config={
        Authorization:this.type+' '+this.token
      }
      console.log(config);
      //this.$http.get('http://localhost:8080/test/3',{
        //headers: config,
      //})
      this.$http.get('http://localhost:8080/test/3')
      .then(response=>{
        console.log(response);
      },err=>{
        console.log("error");
        console.log(err);
      })
    }
  }
}
</script>
<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.el-aside,.el-aside ul {
  height: -webkit-fill-available;
}
body > .el-container {
  margin-bottom: 40px;
}
.el-col-16{
  padding: 0px 15px 15px;
}
.btn-group{
  margin-top: 15px;
  text-align: center;
}
.title{
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
}
.often-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin-right:5px;
  margin-bottom: 5px;
  background-color:#fff;
}
.o-price{
  color:#58B7FF; 
}
.cookList li{
  list-style: none;
  width:23%;
  border:1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color:#fff;
  padding: 2px;
  float:left;
  margin: 2px;
}
.cookList li span{
       
  display: block;
  float:left;
}
.foodImg{
  width: 40%;
}
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color:brown;

}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top:10px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>
