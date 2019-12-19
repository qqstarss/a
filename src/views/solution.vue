<template>
    <div id="proWrap">
        <commBanner productBanner="solution"/>
        <div class="com-cont">
            <div class="ls-l">
                <div class="l-men-a l-men-com">VOCS解决方案</div>
            </div>
            <div class="ls-r" id="rightMain">
                <commNav :nav="nav"/>
                <div class="proh-tit"> VOCS解决方案</div>
                <div class="so-con">
                    <h3>餐饮油烟的危害</h3>
                    <div><img src="@/assets/img/so_01.png" /></div>
                    <p>近年来，餐饮油烟污染一直是环保投诉的最热点问题之一。研究表明，餐饮油烟污染在整个空气污染中占比比较大,对PM2.5的贡献率能够达到6-15%，成为了除工业污染、机动车污染以外的第三大污染源。餐饮业排放的颗粒物以PM2.5为主，约占颗粒物的76.91%，除了颗粒物以外，油烟中还含有挥发性有机物（VOCs），对大气环境造成严重的危害，直接影响人们的身体健康。因此，必须要对厨房油烟产生的废气进行处理。</p>
                    <div class="im-w"><img src="@/assets/img/so_02.png" /></div>
                    <p>华迪轩榕在环境污染治理行业深耕多年，研发了大气污染防治（餐饮油烟）监督管理信息化平台系统，平台采用了“物联网+技术服务”创新环保模式，针对餐饮监管信息缺失、运维记录不健全、监管时间不方便等多方面难点问题，给予监管实施信息化全覆盖，使监管工作“一键排查、一键通告、一键管控”，做到管理精准化、治理高效化、排放稳定化。</p>
                    <h3>治理目标</h3>
                    <p>减少餐饮油烟排放，改善大气环境，提高空气质量。</p>
                    <h3>整体构成</h3>
                    <div class="im-w"><img src="@/assets/img/so_03.png" /></div>
                    <p>由净化器效率传感器、净化器工况传感器、风机工况传感器、油烟在线监测仪、监管信息化平台组成。 整个餐饮油烟在线监控系统实时监测餐饮企业的油烟排放浓度、净化器的运行状态及静电电场洁净度、风机运行状态，集成数据采集与管理系统、数据统计与查询系统、餐饮企业管理系统、报警管理系统、GIS网络地理信息系统、数据库系统、中心控制系统等，实现不同空间、不同维度图文一体化的应用分析。</p>
                    <h3>平台运行</h3>
                    <p>当餐饮企业油烟净化器、风机出现不正常运行时，在线监测仪自动向平台发送预警，平台接收信息后，一键通告餐饮商户及时维护，同时，监管人员也可查看该通告，并通过地图定位查询不正常运行餐饮商户具体位置，对不正常运行餐饮做到精准管控。</p>
                    <h3>工艺-复合式净化</h3>
                    <p>复合式：静电处理+活性炭吸附（或UV），能兼顾不同方法的优点，不同的工艺组合方式，适合不同的处理场合。</p>
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
                    a:"解决方案",
                    b:"VOCS解决方案"
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
.proh-tit{
    color:black;
    font-size:16px;
    font-weight: bold;
    height:30px;
    line-height: 30px;
    text-align: center
}
.mt-20{
    margin-top:20px;
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
h3{
    color:black;
}
.so-con div{
    margin-bottom:20px;
    text-align: center;
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
    /* visibility: hidden; */    
    width:100px;
}
.ls-l div:last-of-type{
    border-bottom: 1px solid #eee;
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
    display:none;
    top:50px;
}
.ls-l-
.ls-l-men-w div:last-of-type{
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