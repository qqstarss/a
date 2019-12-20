<template>
    <div id="proWrap">
        <commBanner productBanner="product"/>
        <div class="com-cont">
            <div :class="['ls-l', mFd ? 'lm-fx' :'']">
                <div class="l-men-b l-men-com">软件产品</div>
                <ul class="ls-ul">
                    <li :class="active =='a' ? 'mActive' :''"><a href="#a" @click="setNav(true)">监管平台</a></li>
                </ul>
                <div class="l-men-b l-men-com">硬件产品</div>
                 <ul class="ls-ul">
                    <li :class="active == 'b' ? 'mActive' :''"><a href="#b" @click="setNav(false)">油烟净化器</a></li>
                </ul>
            </div>
            <div class="ls-r" id="rightMain">
                <commNav :nav="nav"/>
                <div class="proh2">
                    软件产品<span>software product</span>
                </div>
                <div class="ls-con-a">
                    <div class="tit" id="a"><span class="pro-icon-com picon-a"></span>大气污染防治监督信息化平台</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/so_02.png"></div>
                        <div class="pro-ls-r">大气污染监督信息化管理平台采用了“物联网+技术服务”创新环保模式，针对之前所说的治理难点，给予监管实施信息化全覆盖，通过平台实施市级、区县级、乡镇级精细架构管控，做到可视化全区域油烟排放监管。</div>
                    </div>
                </div>
                <div class="proh2 mt-20">
                    硬件产品<span>Hardware products</span>
                </div>
                <div class="ls-con-a">
                    <div class="tit" id="b"><span class="pro-icon-com picon-b"></span>油烟净化设备</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/hd_01.png"></div>
                        <div class="pro-ls-r">油烟净化设备由采集罩收集餐饮企业厨房的油烟，经过风机作用抽取，使其能够顺利地进入排烟管道，然后经过油烟净化设备净化处理，油烟被净化达标后再被风机抽取到室外进行排放。配套油烟在线监测系统对餐饮企业的油烟排放进行实时监控。</div>
                    </div>
                </div>
            </div>
        </div>
        <commFooder />
    </div>
</template>
<script>
    import commBanner from '@/components/banner.vue'
    import commFooder from '@/components/footer.vue'
    import commNav from '@/components/nav_bread.vue'
    import smScroll from 'smooth-scroll';
    export default {
        name: 'product',
        components: {
            commBanner,
            commFooder,
            commNav
        },
        data(){
            return {
                active:'a',
                mFd:false,
                mNb:0,
                scroll:null,
                nav:{
                    a:"产品中心",
                    b:"软件产品"
                }
            }
        },
        mounted(){
            this.$nextTick(function(){
                window.addEventListener('scroll', this.onScroll);
                this.onScroll(); 
                this.scroll = new smScroll('a[href*="#"]',{
                    speed:800,
                    speedAsDuration: true
                });
                let getSele = window.location.hash;
                if(getSele){
                   let anchor = document.querySelector(getSele).offsetTop + 400;
                   this.scroll.animateScroll(anchor);
                }

            })
        },
        methods:{
            onScroll:function(){
                let sTp = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                // 定位左侧菜单
                if(sTp > 400){this.mFd = true;}else if(sTp < 400){this.mFd = false;}
            },
            setSlidDo:function(e){
                this.active='a'; this.mNb = e;
            },
            setNav:function(b){
               if(b){
                   this.nav.b="软件产品";
                   this.active = "a"
               } else {
                   this.nav.b="硬件产品"
                   this.active = "b"
               }
            }
        }
    }
</script>
<style scoped>
.com-cont{
    overflow: hidden;
    width:960px;
    margin:20px auto;
    position:relative;
}
.com-cont::after{
    content:'';
    overflow: hidden;
    clear: both;
}
.proh2{
    color:black;
    font-size:16px;
    font-weight: bold;
    height:30px;
    line-height: 30px;
}
.mt-20{
    margin-top:20px;
}
.ls-ul a{
    color:#333;
    text-decoration: none;
}
.ls-ul a:hover{
    color:#0F63C7;
}
.proh2 span{
    margin-left: 10px;
}
.picon-a{
    background:url("../assets/img/pro_icon_01.png") no-repeat;
}
.pro-icon-com{
    display:block;
    float: left;
    margin-right: 10px;
    width:30px;
    height:30px;
}
.picon-b{
    background:url("../assets/img/pro_icon_02.png") no-repeat;
}
.picon-c{
    background:url("../assets/img/pro_icon_03.png") no-repeat;
}
.mActive a{
    color:#0F63C7!important;
}
.ls-l{
    float: left;
    width:100px;
}
.ls-r{
    margin-left:30px;
    width:830px;
    float: right;
}
.ls-ul{
    overflow: hidden;
}
.ls-ul li{
    font-size:12px;
    height:30px;
    line-height:30px;
    text-align: center;
    cursor:pointer;
    color:#333;
}
.ls-ul li:hover{
    color:#0F63C7;
}
.l-men-com{
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight:bold;
    cursor:pointer;
    color:#333;
}
.l-men-a{
    color:white;
    background-color:#0F63C7;
}
.l-men-b{
    border-bottom: 1px solid #eee;
    border-top:1px solid #eee;
}
.itm-vs{
    display: none;
}
.ls-l-last{
    border-bottom: 1px solid #eee;
}
.tit{
    height:30px;
    line-height: 30px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    margin-top:20px;
    color:#333;
}   
.ss{
    color:#757575;
    padding:15px 0 15px 0;
    line-height: 24px;
    text-align: justify;
    overflow: hidden;
}
.ss::after{
    content:'';
    clear: both;
    overflow: hidden;
}
.pro-ls-l,.pro-ls-r{
    float: left;
}
.pro-ls-l{
    overflow: hidden;
    width:265px;
}
.pro-ls-l img{
    width:100%;
    transition: all 0.3s;
}
.pro-ls-l img:hover{
    transform: scale(1.1);
}
.pro-ls-r{
    width:555px;
    margin-left:10px;
    text-align: justify;
    line-height: 21px;
    text-indent: 24px;
    padding-top:20px;
}
.ss-ch-0{
    text-indent: 24px;
}
.ss-ch-a{
    margin-left: 24px;
    text-align: justify;
}
.ss-ch-b{
    margin-top: 10px;
    text-align: center;
}
.ls-l-men-w{
    width:100px;
    background-color:white;
    position:fixed;
    display: none;
    top:50px;
}
/* .ls-l-men-w div:last-of-type{
    border-bottom: 1px solid #eee;
} */
.ls-l div:last-of-type{
    border-bottom: 1px solid #eee;
}
.ss-tit{
    font-weight: bold;
}
.ss-in-a{
    font-size: 12px;
    line-height: 21px;
}
</style>