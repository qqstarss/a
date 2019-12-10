<template>
  <div class="head-w">
    <div class="menu-ban">
      <div class="head">
        <div class="head-logo"><img width="96" src="@/assets/img/logo.png"></div>
        <div class="head-menu">
          <ul>
            <li>首页</li>
            <li>产品中心</li>
            <li>解决方案</li>
            <li>新闻中心</li>
            <li>商务合作</li>
            <li>关于我们</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bann-h">
      <ul class="ban-img">
        <li><img src="@/assets/img/img-01.png" alt="图1"></li>
      </ul>
      <div class="ban-txe-h">
        <ul class="ban-txt">
          <li class="li-item ban-active">
            <div class="ban-text-a">创</div>
            <div class="ban-text-b">“创”立大气污染监督管理信息化平台，刷新大气源头治理服务理念。</div>
          </li>
          <li class="ban-v-le"></li>
          <li class="li-item">
            <div class="ban-text-a">新</div>
            <div class="ban-text-b">“新”思想、新理念、新技术，新方法，赋予大气污染治理新活力。</div>
          </li>
          <li class="ban-v-le"></li>
          <li class="li-item">
            <div class="ban-text-a">环</div>
            <div class="ban-text-b">“环”环阻击，杜绝源头污染。</div>
          </li>
          <li class="ban-v-le"></li>
          <li class="li-item">
            <div class="ban-text-a">保</div>
            <div class="ban-text-b">“保”卫蓝天，迎“蓝”而上。</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style >
  .head-w{
    position: relative;
    height: 700px;;
  }
  .head::after{
    overflow: hidden;
    content: "";
    clear:both;
  }
  .menu-ban{
    height: 30px;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    background:rgba(15,99,199,.5);
  }
  .head{
    width:960px;
    height: 30px;
    margin:0 auto;
  }
  .head-logo{
    width:96px;
    height:20px;
    margin-top:5px;
    float: left;
  }
  .bann-h{
    margin:0 auto;
    width:1920px;
  }
  .head-menu {
    float: right;
    height: 30px;
    line-height: 30px;
  }
  .head-menu ul{
    overflow:hidden;
    margin: 0;
    padding: 0;
  }
  .head-menu li{
    float: left;
    padding:0 18px;
    text-align: center;
    color:white;
    height:30px;
    font-size: 14px;
    cursor: pointer;
  }
  .head-menu li:hover{
    background: white;
    color:#0F63C7;
  }
  .ban-img img{
    vertical-align: middle;
  }
  .ban-txe-h{
    position: absolute;
    height:100px;
    bottom:0;
    width:100%;
    background:rgba(0,0,0,0.5);
  }
  .ban-txt{
    width:960px;
    overflow:hidden;
    margin:0 auto;
  }
  .ban-txt::after{
    overflow: hidden;
    content: "";
    clear:both;
  }
  .ban-txt li{
    float: left;
  }
  .ban-txt .li-item{
    width:218px;
    padding:0 10px;
    height: 100px;
    cursor: pointer;
  }
  .ban-txt li::after{
    overflow: hidden;
    content: "";
    clear:both;
  }
  .ban-text-a{
    font-weight:bold;
    font-size:16px;
    width:20px;
    height:30px;
    margin-top:5px;
    line-height:30px;
    border-bottom:1px solid white;
    color:white;

  }
  .ban-text-b{
    font-size: 12px;
    line-height:20px;
    color:#ccc;
    margin-top:5px;
    text-justify: distribute-all-lines;
    text-indent: 24px;
  }
  .ban-active{
    background: #0F63C7;
  }
  .ban-v-le{
    width:2px;
    height:50px;
    background-image:repeating-linear-gradient(rgba(0,0,0,0), white, rgba(0,0,0,0));
    overflow: hidden;
    position:relative;
    top:25px;
  }
</style>
