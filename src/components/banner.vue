<template>
  <div class="bann-w">
    <div class="menu-ban">
      <div class="head">
        <div class="head-logo"><router-link to="/"><img width="96" src="@/assets/img/logo.png"></router-link></div>
        <div class="head-menu">
          <ul>
            <li :class="[maFlag == 'home' ? 'mactive':'']"><router-link to="/">首页</router-link></li>
            <li :class="[maFlag == 'product' ? 'mactive':'']"><router-link to="/product">产品中心</router-link></li>
            <li :class="[maFlag == 'solution' ? 'mactive':'']"><router-link to="/solution">解决方案</router-link></li>
            <li @mouseover="menuSlideDo(true)" @mouseleave="menuSlideDo(false)" :class="['news-items',maFlag == 'news' ? 'mactive':'']">
              <div class="news-item"><router-link :to="{ path: '/news', query: { name:'a'}}">新闻中心</router-link></div>
              <transition name="slide-fade">
                <ul class="news-ch-w" v-if="newsFlag">
                  <li @click="setHide"><router-link :to="{ path: '/news', query: { name:'a'}}">新闻中心</router-link></li>
                  <li @click="setHide"><router-link :to="{ path: '/news', query: { name:'a'}}">公司新闻</router-link></li>
                  <li @click="setHide"><router-link :to="{ path: '/news', query: { name:'b'}}">行业新闻</router-link></li>
                </ul>
              </transition>
            </li>
            <li :class="[maFlag == 'business' ? 'mactive':'']"><router-link to="/business">商务合作</router-link></li>
            <li :class="[maFlag == 'about' ? 'mactive':'']"><router-link to="/about/abouts">关于我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 二级页面banner -->
    <div class="bann-pro" v-if="productBanner == 'about'">
      <img src="@/assets/img/bann_img_01.png" />
    </div>
    <div class="bann-solution" v-else-if="productBanner == 'product'">
      <img src="@/assets/img/bann_img_02.png" />
    </div>
    <div class="bann-solution" v-else-if="productBanner == 'solution'">
      <img src="@/assets/img/bann_img_05.png" />
    </div>
    <div class="bann-solution" v-else-if="productBanner == 'business'">
      <img src="@/assets/img/bann_img_03.png" />
    </div>
    <div class="bann-solution" v-else-if="productBanner == 'news'">
      <img src="@/assets/img/bann_img_04.png" />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      maFlag:'',
      newsFlag:false
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.setMenuLight();  
    })
  },
  methods:{
    setMenuLight:function(){
      this.maFlag = this.$route.name;
    },
    menuSlideDo:function(b){
      this.newsFlag = b;
    },
    setHide:function(){
      this.newsFlag = false;
    }
  },
  props: ['productBanner']
}
</script>

<style scoped>
  .bann-pro,.bann-solution{
    overflow: hidden;
  }
  .bann-pro img,.bann-solution img{
    vertical-align: middle;
  }
  .bann-w{
    overflow: hidden;
  }
  .banna{
    overflow: hidden;
  }
  .head::after{
    overflow: hidden;
    content: "";
    clear:both;
  }
  .menu-ban{
    height: 60px;
    width: 100%;
    background:#0F63C7;
  }
  .head{
    width:960px;
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
    height:60px;
    line-height: 60px;
  }
  .head-menu ul{
    margin: 0;
    height:60px;
    padding: 0;
  }
  .head-menu li{
    float: left;
    text-align: center;
    color:white;
    font-weight: bold;
    font-size: 14px;
    height:60px;
    cursor: pointer;
  }
  .head-menu li a{
    color:white;
    padding:0 18px;
    display: block;
    height: 60px;
    text-decoration:none;
    font-size: 14px;
  }
  .head-menu li a:hover{
    background: white;
    color:#0F63C7;
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
