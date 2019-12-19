<template>
    <div id="wrap">
        <commMenu />
        <div class="cen-cot">
            <div class="n-tab-tit">
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-ov">软件产品</div>
                    <div class="n-tab-tl tab-t-ac"></div>
                </div>
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-out">硬件产品</div>
                    <div class="n-tab-tl"></div>
                </div>
            </div>
            <div class="cen-cot-b">
                <div class="n-img-w">
                    <img src="@/assets/img/mobile/p_img_02.png" />
                </div>
                <div class="p-ls-w">
                    <div class="cls">
                        <ul class="cls-ul" >
                            <li>
                                <div class="t-t-w s-t-ac">监管平台</div>
                                <div class="t-t-l tab-t-ac"></div>
                            </li>
                            <li>
                                <div class="t-t-w">运维平台</div>
                                <div class="t-t-l"></div>
                            </li>
                            <li>
                                <div class="t-t-w">执法平台</div>
                                <div class="t-t-l"></div>
                            </li>
                            <li>
                               <div class="t-t-w">餐饮APP</div>
                                <div class="t-t-l"></div> 
                            </li>
                            <li>
                               <div class="t-t-w">餐饮APP</div>
                                <div class="t-t-l"></div> 
                            </li>
                            <li>
                               <div class="t-t-w">餐饮APP</div>
                                <div class="t-t-l"></div> 
                            </li>
                            <li>
                               <div class="t-t-w">餐饮APP</div>
                                <div class="t-t-l"></div> 
                            </li>
                            <li>
                               <div class="t-t-w">餐饮APP</div>
                                <div class="t-t-l"></div> 
                            </li>
                        </ul>
                    </div>
                    <div class="cls-cot">
                        <h3>大气污染防治监督信息化平台简介</h3>
                        <p>大气污染监督信息化管理平台采用了“物联网+技术服务”创新环保模式，针对之前所说的治理难点，给予监管实施信息化全覆盖，通过平台实施市级、区县级、乡镇级精细架构管控，做到可视化全区域油烟排放监管。</p>
                        <h3>产品特点</h3>
                        <p>平台结合了监管平台、餐饮监管、餐饮企业、运维APP，形成四项闭环式管理体系，使监管工作做到管理精准化、治理高效化、排放标准化。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import commMenu from '@/views/mobile/menu.vue'
    export default {
        name:"home",
        components: {
            commMenu
        }
    }
</script>
<style>
    #wrap{
        overflow:hidden;
    }
    .cen-cot{
        overflow: hidden;

    }
    .n-tab-tit{
        height:40px;
        box-shadow:0 2px 5px rgba(0,0,0,.16);
    }
    .n-tab-tit::after{
        content:'';
        overflow: hidden;
        clear: both;
    }
    .n-img-w{
        overflow: hidden;
        margin-top:10px;
    }
    .n-tab-tit-itm{
        float: left;
        height:40px;
        width:50%;
        font-size:14px;
        font-weight: bolder;
        line-height:40px;
        text-align:center;
    }
    .cen-cot-b{
        padding:0 15px;
    }
    .n-img-w img{
        width:100%;
        border-radius:5px;
    }
    .p-ls-w{
        overflow: hidden;
    }
    .cls{
        margin-top:10px;
        line-height:40px;
        height:40px;
        overflow-y:hidden;
        overflow-x:auto;
        border-bottom:1px solid #F2F2F2;
    }
    .cls-ul{
        overflow:hidden;
        width:600px;
    }
    .s-t-ac{
        font-size:16px;
        font-weight: bolder;
        color:#333!important;
    }
    .cls-ul::after{
        content:'';
        overflow: hidden;
        clear: both;
    }
    .cls-ul li{
        float: left;
        font-size:14px;
        margin-right:20px;
    }
    .t-t-w{
        height:40px;
        line-height:40px;
        color:#999;
    }
    .t-t-l,.n-tab-tl{
        width:2rem;
        height:2px;
        border-radius: 3px;
        margin:-5px auto 0 auto;
    }
    .tab-t-ac{
        background-color:#333;
    }
    .cls-cot{
        margin-top:20px;
        line-height:24px;
        color:#333;
    }
    .cls-cot p{
        text-indent:24px;
    }
</style>