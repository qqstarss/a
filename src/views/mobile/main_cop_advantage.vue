<template>
    <div id="wrap">
        <commMenu />
        <div class="tit-w">
            <div class="tit-i">公司优势</div>
            <div class="tit-ie">Company advantage</div>
            <div class="tit-line"></div>
        </div>      
        <div class="m-co">
            <div class="row-item">
                <div class="ri-l">
                    <div class="cpa-icon i-a"></div>
                    <div class="cpa-tit"><i>01</i>服务卓越</div>
                    <div class="cpa-ds">以改善大气污染防治为核心，处处以城市环保需求为先导，精准发力，卓越实施</div>
                </div>
                <div class="ri-r">
                    <div class="cpa-icon i-b"></div>
                    <div class="cpa-tit"><i>02</i>监督便捷</div>
                    <div class="cpa-ds">开创数字环保、智慧环保并行，充分的实现了畅通环境污染源头治理</div>
                </div>
            </div>
            <div class="row-item">
                <div class="ri-l">
                    <div class="cpa-icon i-c"></div>
                    <div class="cpa-tit"><i>03</i>管控精准</div>
                    <div class="cpa-ds">透过物联网+技术服务，坚持精准管控发力方向，源头管理，系统治理</div>
                </div>
                <div class="ri-r">
                    <div class="cpa-icon i-d"></div>
                    <div class="cpa-tit"><i>04</i>治理达标</div>
                    <div class="cpa-ds">立足当下，以科技智能化新技术，以查促改，以管代罚，以防代治</div>
                </div>
            </div>
        </div>
        <div class="arrow-d"><img src="@/assets/img/mobile/arrow_down.png"></div>
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
        overflow: hidden;
    }
    .tit-w{
        overflow: hidden;
        margin:15px 0 0 0;
    }
    .tit-i{
        font-size:14px;
        text-align: center;
    }
    .tit-ie{
        font-size:14px;
        text-align: center;
    }
    .tit-line{
        height:2px;
        width:20px;
        background-color:#e5e5e5;
        margin:3px auto 0 auto;
    }
    .m-co{
        overflow: hidden;
        padding:0 15px;
    }
    .row-item{
        overflow: hidden;
        margin-top:40px;
    }
    .row-item::after{
        content:'';
        clear: both;
        overflow: hidden;
    }
    .cpa-icon{
        text-align: center;
        width:36px;
        height:41px;
        margin:0 auto;
    }
    .cpa-icon img{
        width:100%;
    }
    .cpa-ds{
        line-height:24px;
        font-size:1rem;
        color:#999;
        text-align: center;
    }
    .cpa-tit i{
        font-style: normal;
        color: #d6d6d6;;
        margin-right:3px;
        font-size:12px;
    }
    .cpa-tit{
        font-size:16px;
        overflow: hidden;
        margin:10px auto;
        text-align: center;
    }
    .i-a{
        background:url("../../assets/img/mobile/i_img_01.png") no-repeat;
        background-size:cover;
    }
    .i-b{
        background:url("../../assets/img/mobile/i_img_02.png") no-repeat;
        background-size:cover;
    }
    .i-c{
        background:url("../../assets/img/mobile/i_img_03.png") no-repeat;
        background-size:cover;
    }
    .i-d{
        background:url("../../assets/img/mobile/i_img_04.png") no-repeat;
        background-size:cover;
    }
    .ri-l{
        width:45%;
        float:left;
    }
    .ri-r{
        width:45%;
        float:right;
    }
    .arrow-d{
        width:32px;
        height:25px;
        position:absolute;
        bottom:15px;
        left:50%;
        margin-left:-16px;        
    }
    .arrow-d img{
        width:100%;
    }
</style>