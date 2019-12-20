<template>
    <div id="proWrap">
        <commBanner productBanner="about"/>
        <div class="com-cont">
            <div :class="['ls-l', mFd ? 'lm-fx' :'']">
                <div :class="['l-men-com',mNb == 0 ?'l-men-a' :'l-men-b']" @click="setSlidDo(0)"><router-link to="/about/abouts">关于我们</router-link></div>
                <ul v-if="mNb == 0" class="ls-ul">
                    <li :class="active == 'a'? 'mActive' :''"><a href="#a">公司介绍</a></li>
                    <li :class="active == 'b'? 'mActive' :''"><a href="#b">使命</a></li>
                    <li :class="active == 'c'? 'mActive' :''"><a href="#c">愿景</a></li> 
                    <li :class="active == 'd'? 'mActive' :''"><a href="#d">理念</a></li>
                    <li :class="active == 'e'? 'mActive' :''"><a href="#e">宗旨</a></li>
                    <li :class="active == 'f'? 'mActive' :''"><a href="#f">价值观</a></li>
                    <li :class="active == 'g'? 'mActive' :''"><a href="#g">团队介绍</a></li>
                    <li :class="active == 'h'? 'mActive' :''"><a href="#h">组织架构</a></li>
                    <li :class="active == 'i'? 'mActive' :''"><a href="#i">资质荣誉</a></li>
                </ul>
                <div :class="['l-men-com',mNb == 1 ?'l-men-a' :'l-men-b']" @click="setSlidDo(1)"><router-link to="/about/contactUs">联系我们</router-link></div>
                <div :class="['l-men-com',mNb == 2 ?'l-men-a' :'l-men-b']" @click="setSlidDo(2)"><router-link to="/about/advertise">诚聘英才</router-link></div>
                <!-- <div class="l-men-b l-men-com ls-l-last">成功案例</div> -->
            </div>
            <div class="ls-r" id="rightMain">
                <router-view></router-view>
            </div>
        </div>
        <commFooder />
    </div>
</template>
<script>
    import commBanner from '@/components/banner.vue'
    import commFooder from '@/components/footer.vue'
    import smScroll from 'smooth-scroll';
    export default {
        name: 'product',
        components: {
            commBanner,
            commFooder
        },
        data(){
            return {
                active:'a',
                mFd:false,
                mNb:0,
                scroll:null
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

                // 定位左侧菜单子项高亮
                let cStp = sTp - 400;
                if(cStp >= document.querySelector("#a").offsetTop){ // 公司介绍
                  this.active = 'a';
                }
                if(cStp >= document.querySelector("#b").offsetTop){ // 使命
                  this.active = 'b';
                }
                if(cStp >= document.querySelector("#c").offsetTop){ // 愿景
                  this.active = 'c';
                }
                if(cStp >= document.querySelector("#d").offsetTop){ // 理念
                  this.active = 'd';
                }
                if(cStp >= document.querySelector("#e").offsetTop){ // 宗旨
                  this.active = 'e';
                }
                if(cStp >= document.querySelector("#f").offsetTop){ // 价值观
                  this.active = 'f';
                }
                if(cStp >= document.querySelector("#g").offsetTop){ // 团队介绍
                  this.active = 'g';
                }
                if(cStp >= document.querySelector("#h").offsetTop){ // 组织架构
                  this.active = 'h';
                }
                if(cStp >= document.querySelector("#i").offsetTop){ // 荣誉
                  this.active = 'i';
                }
            },
            setSlidDo:function(e){
                this.active='a'; this.mNb = e;
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
.sh-24{
    text-indent: 24px;
}
.sh-pd-24{
    padding-left:24px!important;
}
.ls-l{
    float: left;    
    width:100px;
}
.lm-fx{
    position:fixed;
    top:10px;
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
.ls-ul a{
    text-decoration: none;
    color:#333;
}
.ls-ul a:hover{
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
.l-men-com a{
    text-decoration: none;
    color:#333;
}
.l-men-a{
    color:white;
    background-color:#0F63C7;
}
.l-men-b{
    border-top:1px solid #eee;
}
.l-men-a a{
    color:white;
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
    border-bottom:1px solid #eee;  
    color:#333;
}   
.ss{
    color:#757575;
    padding:10px 0 15px 0;
    line-height: 24px;
    text-align: justify;
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
    display:none;
    top:20px;
}
.ls-l-men-w div:last-of-type{
    border-bottom: 1px solid #eee;
}
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
.mActive a{
    color:#0F63C7!important;
}
.mt-10{
    text-indent: 24px;
    margin-top:10px;
}
</style>