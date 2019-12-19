<template>
    <div id="proWrap">
        <commBanner productBanner="product"/>
        <div class="com-cont">
            <!-- 固定菜单 -->
            <div class="ls-l-men-w">
                <div class="l-men-a l-men-com">软件产品</div>
                <ul class="ls-ul">
                    <li>监管平台</li>
                    <li>运维平台</li>
                    <li>监管APP</li>
                    <li>执法APP</li>
                    <li>餐饮APP</li>
                    <li>运维APP</li>
                </ul>
                <div class="l-men-b l-men-com">硬件产品</div>
                 <ul class="ls-ul">
                    <li>硬件产品</li>
                    <li>硬件产品</li>
                    <li>硬件产品</li>
                </ul>
            </div>
            <div class="ls-l">
                <div class="l-men-a l-men-com">软件产品</div>
                <ul class="ls-ul">
                    <li>监管平台</li>
                    <li>运维平台</li>
                    <li>监管APP</li>
                    <li>执法APP</li>
                    <li>餐饮APP</li>
                    <li>运维APP</li>
                </ul>
                <div class="l-men-b l-men-com">硬件产品</div>
                 <ul class="ls-ul">
                    <li>硬件产品</li>
                    <li>硬件产品</li>
                    <li>硬件产品</li>
                </ul>
            </div>
            <div class="ls-r" id="rightMain">
                <commNav :nav="nav"/>
                <div class="proh2">
                    软件产品<span>software product</span>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-a"></span>监管平台</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
                    </div>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-b"></span>运维平台</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
                    </div>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-c"></span>监管APP</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
                    </div>
                </div>
                <div class="proh2 mt-20">
                    硬件产品<span>Hardware products</span>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-a"></span>监管平台</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
                    </div>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-b"></span>运维平台</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
                    </div>
                </div>
                <div class="ls-con-a">
                    <div class="tit"><span class="pro-icon-com picon-c"></span>监管APP</div>
                    <div class="ss">
                        <div class="pro-ls-l"><img src="@/assets/img/pro_img_01.png"></div>
                        <div class="pro-ls-r">餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</div>
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
    export default {
        name: 'product',
        components: {
            commBanner,
            commFooder,
            commNav
        },
        data(){
            return {
                act:"#a",
                nav:{
                    a:"产品中心",
                    b:"软件产品"
                }
            }
        },
        mounted(){
            this.$nextTick(function(){
                document.querySelector("#proWrap").addEventListener('scroll', this.onScroll);
            })
        },
        methods:{
            onScroll:function(){

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
.ls-l{
    float: left;
    /* visibility: hidden;  */   
    width:100px;
}
.ls-r{
    margin-left:30px;
    width:830px;
    float: left;
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
</style>