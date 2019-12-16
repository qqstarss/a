<template>
  <div class="food-w">
    <div class="food">
      <div class="food-nav">
        <ul>
          <li><router-link to="/">网站首页</router-link></li>
          <li><router-link to="/product">产品中心</router-link></li>
          <li><router-link to="/solution">解决方案</router-link></li>
          <li><router-link to="/news">新闻中心</router-link></li>
          <li><router-link to="/business">商务合作</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
        </ul>
      </div>
      <div class="food-box">
        <div class="food-box-a">
          联系热线：010-88712369<br/>
          公司地址：北京市石景山区实兴东街11号2层2498室<br/>
          公司邮箱：huandixuanrong@163.com
        </div>
        <div class="food-box-b">
          <ul>
            <li><img src="@/assets/img/code1.jpg"><br/>微信公众号</li>
            <li><img src="@/assets/img/code2.jpg"><br/>监管平台</li>
            <li><img src="@/assets/img/code2.jpg"><br/>餐饮APP</li>
            <li><img src="@/assets/img/code2.jpg"><br/>监管APP</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="food-txt-cp">Copyright © 2019 Hdxrkj All Rights Reserved. 华迪轩榕科技 版权所有</div>
  </div>
  
</template>

<script>
export default {
  
}
</script>


<style scoped>
  .food-w{
    overflow: hidden;
  }
  .food{
    overflow:hidden;
    padding:15px 0;
    background-color:#0F63C7;
    background:#0F63C7 url("../assets/img/fooder_img_bg_01.png") left -2px no-repeat;
    background-size:contain; 
  }
  .food-nav,.food-box{
    width:960px;
    margin:20px auto 0 auto;
    overflow:hidden;
  }
  .food-nav ul::after{
    content: '';
    clear: both;
    overflow:hidden;
  }
  .food-nav ul li{
    float: left;
    overflow: hidden;
    font-size:14px;
    font-weight: bold;
    margin-right: 20px;
    cursor: pointer;
  }
  .food-nav ul li a{
    color:white;
    text-decoration:none;
  }
  .food-nav ul li a:hover{
    color:rgba(255,255,255,.7);
  }
  .food-txt-cp{
    text-align: center;
    height:30px;
    font-size:12px;
    line-height: 30px;
    color:white;
    background:black;
  }
  .food-box{
    margin-top:10px;
  }
  .food-box::after{
    content: '';
    clear: both;
    overflow:hidden;
  } 
  .food-box-a,.food-box-b{
    font-size: 12px;
    color:white;
  }
  .food-box-a{
    float: left;
    line-height: 30px;
    
  }
  .food-box-b{
    float:right;
  }
  .food-box-b ul::after{
    content: '';
    clear: both;
    overflow:hidden;
  } 
  .food-box-b li{
    float: left;
    width:104px;
    margin-right: 20px;
    line-height: 20px;
    text-align: center;
  }
  .food-box-b li img{
    box-sizing: border-box;
    width:100%;
  }
</style>
