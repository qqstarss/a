<template>
    <div id="proWrap">
        <commBanner productBanner="business"/>
        <div class="com-cont">
            <div class="ls-l">
                <div class="l-men-a l-men-com">运维商务合作</div>
                <ul class="ls-ul">
                    <li>进入运维平台</li>
                </ul>
                <div class="l-men-b l-men-com">平台商务合作</div>
                <div class="l-men-b l-men-com">战略商务合作</div>
            </div>
            <div class="ls-r" id="rightMain">
                <commNav :nav="nav"/>
                <div class="com-cont">
                    <div class="proh-tit"></div>
                    <div class="so-con">
                        <p>餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</p>
                        <p>餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。餐饮油烟监督管理信息化平台是专业餐饮油烟治理系统, 采用净化+监测治理模式，通过在线实时监测，解决餐饮企业油烟排放不达标、设备运行异常、清洗台账不健全、执法人员监管难等问题，填补了国内餐饮行业油烟治理的空白。</p>
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
                    a:"商务合作",
                    b:"运维商务合作"
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
.so-con{
    padding:15px;
    line-height: 24px;
    color:#757575;
}
.so-con p{
    margin-bottom: 10px;
    text-indent: 24px;
    text-align: justify;
}
.proh-tit{
    color:black;
    font-size:16px;
    font-weight: bold;
    height:30px;
    line-height: 30px;
    text-align: center
}
.news-nab{
    height: 30px;
    line-height:30px;
    border-bottom: 1px solid #eee;
}
.news-nab::after{
    content:'';
    overflow: hidden;
    clear: both;
}
.bread-lt,.bread-rt{
    font-size:12px;
}
.bread-lt{
    float: left;
    font-size: 14px;
    font-weight: bold;
}
.bread-rt{
    float:right;
    font-size:12px;
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
    width:100px;
}
.ls-l div:last-child{
    border-bottom:1px solid #eee;
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
    width:265px;
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
    top:50px;
}
.ss-tit{
    font-weight: bold;
}
.ss-in-a{
    font-size: 12px;
    line-height: 21px;
}
</style>