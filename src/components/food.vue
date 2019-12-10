<template>
  <div class="food-w">
    <div class="food">
      <div class="food-nav">
        <ul>
          <li>网站首页</li>
          <li>产品中心</li>
          <li>解决方案</li>
          <li>新闻中心</li>
          <li>商务合作</li>
          <li>关于我们</li>
        </ul>
      </div>
      <div class="food-box">
        <div class="food-box-a">
          联系热线：010-88712369<br/>
          公司地址：北京市石景山区实兴东街11号2层2498室<br/>
          huandixuanrong@163.com
        </div>
        <div class="food-box-b">
          <ul>
            <li><img src="@/assets/img/food_1.jpg"><br/>微信公众号</li>
            <li><img src="@/assets/img/food_1.jpg"><br/>微信公众号</li>
            <li><img src="@/assets/img/food_1.jpg"><br/>餐饮APP下载</li>
            <li><img src="@/assets/img/food_1.jpg"><br/>餐饮APP下载</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="food-txt-cp">© 2009-2019 Aliyun.com 版权所有 ICP证：冀B2-20080101</div>
  </div>
  
</template>

<script>
export default {
  
}
</script>


<style >
  .food-w{
    overflow: hidden;
  }
  .food{
    overflow:hidden;
    padding:15px 0;
    background:#0F63C7;
  }
  .food-nav,.food-box{
    width:960px;
    margin:0 auto;
    overflow:hidden;
  }
  .food-nav ul::after{
    content: '';
    clear: both;
    overflow:hidden;
  }
  .food-nav ul li{
    float: left;
    font-size:14px;
    font-weight: bold;
    margin-right: 10px;
    cursor: pointer;
    color:white;
  }
  .food-txt-cp{
    text-align: center;
    height:30px;
    line-height: 30px;
    color:white;
    background:black;
  }
  .food-box{
    margin-top:20px;
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
    margin-right: 20px;
    line-height: 20px;
    text-align: center;
  }
</style>
