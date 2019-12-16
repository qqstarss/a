<template>
  <div class="head-w">
    <div class="menu-ban">
      <div class="head">
        <div class="head-logo"><router-link to="/"><img width="96" src="@/assets/img/logo.png"></router-link></div>
        <div class="head-menu">
          <ul>
            <li :class="[maFlag == 'home' ? 'mactive':'']"><router-link to="/">首页</router-link></li>
            <li :class="[maFlag == 'product' ? 'mactive':'']"><router-link to="/product">产品中心</router-link></li>
            <li :class="[maFlag == 'solution' ? 'mactive':'']"><router-link to="/solution">解决方案</router-link></li>
            <li @mouseover="menuSlideDo(true)" @mouseleave="menuSlideDo(false)" :class="['news-items',maFlag == 'news' ? 'mactive':'']">
              <div class="news-item"><router-link to="/news">新闻中心</router-link></div>
              <transition name="slide-fade">
                <ul class="news-ch-w" v-if="newsFlag">
                  <li><router-link to="/news">新闻中心</router-link></li>
                  <li><router-link to="/newsCp">公司新闻</router-link></li>
                  <li><router-link to="/newsRd">行业新闻</router-link></li>
                </ul>
              </transition>
            </li>
            <li :class="[maFlag == 'business' ? 'mactive':'']"><router-link to="/business">商务合作</router-link></li>
            <li :class="[maFlag == 'about' ? 'mactive':'']"><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bann-h">
      <ul class="ban-img">
        <li class="ban-01" v-if="banns == 0"></li>
        <li class="ban-02" v-else-if="banns == 1"></li>
        <li class="ban-03" v-else-if="banns == 2"></li>
        <li class="ban-04" v-else-if="banns == 3"></li>
      </ul>
      <div class="ban-txe-h">
        <ul class="ban-txt">
          <li @mouseover="setImgShow(0,true)" :class="['li-item',banns == 0 ? 'ban-active' :'']">
            <div class="ban-text-a">创</div>
            <div class="ban-text-b">“创”立大气污染监督管理信息化平台，刷新大气源头治理服务理念。</div>
          </li>
          <li class="ban-v-le"></li>
          <li @mouseover="setImgShow(1,true)" :class="['li-item',banns == 1 ? 'ban-active' :'']">
            <div class="ban-text-a">新</div>
            <div class="ban-text-b">“新”思想、新理念、新技术，新方法，赋予大气污染治理新活力。</div>
          </li>
          <li class="ban-v-le"></li>
          <li @mouseover="setImgShow(2,true)" :class="['li-item',banns == 2 ? 'ban-active' :'']">
            <div class="ban-text-a">环</div>
            <div class="ban-text-b">“环”环阻击，杜绝源头污染。</div>
          </li>
          <li class="ban-v-le"></li>
          <li @mouseover="setImgShow(3,true)" :class="['li-item',banns == 3 ? 'ban-active' :'']">
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
   data(){
    return{
      banns:0,
      maFlag:'',
      newsFlag:false
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.bans().setMenuLight();
    });
  },
  methods:{
    bans:function(){
      let _self = this;
      if (_self.scTim) {clearInterval(_self.scTim); _self.scTim = null;}
      _self.scTim = setInterval(()=>{
        if (_self.banns < 3) { _self.banns++ } else { _self.banns=0}
        _self.setImgShow(_self.banns,null);
      },3000)
      return this;
    },
    setImgShow:function(m,d){
      this.banns = m; if(d){this.bans()}
    },
    setMenuLight:function(){
      this.maFlag = this.$route.name;
    },
    menuSlideDo:function(b){
      this.newsFlag = b;
    }
  } 
}
</script>

<style scoped>
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
    height: 60px;
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    background:rgba(15,99,199,.5);
  }
  .head{
    width:960px;
    height: 60px;
    margin:0 auto;
  }
  .head-logo{
    width:96px;
    height:20px;
    margin-top:20px;
    float: left;
  }
  .bann-h{
    margin:0 auto;
  }
  .head-menu {
    float: right;
    height: 60px;
    line-height: 60px;
  }
  .head-menu ul{
    margin: 0;
    padding: 0;
  }
  .head-menu li{
    float: left;
    text-align: center;
    color:white;
    height:60px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
  .head-menu li a{
    color:white;
    padding:0 18px;
    display: block;
    height: 60px;
    text-decoration: none;
    font-size: 14px;
  }
  .head-menu li a:hover{
    background: white;
    color:#0F63C7;
  }
  .ban-01{
    background: url("../assets/img/img_bann_img_01.png") no-repeat center;
    height: 700px;
    background-size:cover;
  }
  .ban-02{
    background: url("../assets/img/img_bann_img_02.png") no-repeat center;
    height: 700px;
    background-size:cover;
  }
  .ban-03{
    background: url("../assets/img/img_bann_img_03.png") no-repeat center;
    height: 700px;
    background-size:cover;
  }
  .ban-04{
    background: url("../assets/img/img_bann_img_04.png") no-repeat center;
    height: 700px;
    background-size:cover;
  }
  .ban-txe-h{
    position: absolute;
    height:120px;
    bottom:0;
    width:100%;
    background:rgba(0,0,0,0.5);
  }
  .ban-txt{
    width:1200px;
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
  .ban-txt li:hover{
    background: #0F63C7;
  }
  .ban-txt .li-item{
    width:238px;
    padding:0 30px;
    height: 120px;
    cursor: pointer;
  }
  .ban-txt li::after{
    overflow: hidden;
    content: "";
    clear:both;
  }
  .ban-text-a{
    font-weight:bold;
    font-size:20px;
    width:20px;
    height:30px;
    margin-top:20px;
    line-height:30px;
    border-bottom:1px solid white;
    color:white;

  }
  .ban-text-b{
    font-size: 12px;
    line-height:20px;
    color:#ccc;
    margin-top:5px;
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
  .mactive{
    background-color:white;
  }
  .mactive a{
    color:#0F63C7!important;
  }
  .mactive div{
    color:#0F63C7!important;
  }
 .news-items{
    height:60px;
    width:92px;
    position: relative;
  }
  .news-item{
    color:white;
    height: 60px;
    width:92px;
    text-align: center;
    position:absolute;
    top:0;
    z-index: 200;
    font-size: 14px;
  }
  .news-item a{
    text-decoration: none;  
  }
  .news-ch-w{
    position:absolute;
    top:0;
    left:0;
    z-index: 300;
  }
  .news-ch-w li{
    background-color:white;
    border-bottom:1px solid #eee;
  }
  .news-ch-w li a{
    color:#666!important;
  }
  .news-ch-w li a:hover{
    color:#0F63C7!important;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
