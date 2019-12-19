<template>
    <div id="wrap">
        <commMenu />
        <div class="bann-w">
            <div class="ban-img-w">
                <img src="@/assets/img/mobile/bann.png" />
            </div>
            <div class="ban-txt">
                <ul class="ban-txt-ul">
                    <li class="btxt-act">创</li>
                    <li>新</li>
                    <li>环</li>
                    <li>保</li>
                </ul>
            </div>
        </div> 
        <div class="tit-w">
            <div class="tit-i">公司介绍</div>
            <div class="tit-ie">Company introduction</div>
            <div class="tit-line"></div>
        </div>      
        <div class="m-co">
            <p>华迪轩榕是围绕国家生态环境政策和规划方向，将传统环保行业和互联网新兴技术结合起来的环保科技型企业。</p>
            <p>华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合…</p>
        </div>
        <div class="img-w">
            <div class="img-item-a"><img src="@/assets/img/mobile/h_img_01.png"></div>
            <div class="img-item-b"><img src="@/assets/img/mobile/h_img_03.png"></div>
            <div class="img-item-c"><img src="@/assets/img/mobile/h_img_02.png"></div>
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
    .bann-w{
        height:175px;
        overflow: hidden;
        position: relative;
    }
    .bann-w img{
        width:100%;
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
        line-height: 24px;
        text-indent: 24px;
        padding:10px 15px 15px 15px;
        text-align: justify;
    }
    .img-w{
        position: relative;
        width:31.25rem;
        height:14.58rem;
        margin:0 auto;
    }
    .img-item-a{
        width:50%;
        height:110px;
        position:absolute;
        z-index:20;
        left:15px;
        overflow: hidden;
    }
    .img-item-b{
        border:1px solid #333;
        position:absolute;
        z-index:30;
        width:35%;
        top:30px;
        left:50%;
        margin-left:-70px;
        height:90px;
    }
    .img-item-c{
        position:absolute;
        z-index:40;
        width:35%;
        height:100px;
        top:75px;
        right:15px;
    }
    .img-item-a img{
        width:100%;
    }
    .img-item-b img{
        width:100%;
        margin:20px 0 0 10px;
    }
    .img-item-c img{
        width:100%;
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
    .ban-txt{
        position:absolute;
        width:90%;
        margin:0 5%;
        height:35px;
        z-index:40;
        bottom:10px;
    }
    .ban-txt-ul{
        overflow: hidden;
    }
    .ban-txt-ul li{
        float: left;
        width:25%;
        height:35px;
        line-height:35px;
        text-align:center;
        color:white;
        font-size:1.2rem;
    }
    .btxt-act{
        color:#0F63C7!important;
        border-bottom:2px solid #0F63C7!important;
    }
</style>