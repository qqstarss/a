<template>
    <div id="wrap">
        <commMenu />
        <div class="tit-w">
            <div class="tit-i">产品展示</div>
            <div class="tit-ie">product display</div>
            <div class="tit-line"></div>
        </div>      
        <div class="m-co">
            <div class="row-item">
                <div class="ri-l">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/p_img_01.png"></div>
                    <div class="pro-item-ds">工况净化器</div>
                </div>
                <div class="ri-r">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/p_img_01.png"></div>
                    <div class="pro-item-ds">工况净化器</div>
                </div>
            </div>
            <div class="row-item">
                <div class="ri-l">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/p_img_01.png"></div>
                    <div class="pro-item-ds">工况净化器</div>
                </div>
                <div class="ri-r">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/p_img_01.png"></div>
                    <div class="pro-item-ds">工况净化器</div>
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
        margin-top:60px;
    }
    .row-item::after{
        content:'';
        clear: both;
        overflow: hidden;
    }
    .pro-item-i{
        overflow: hidden;
        border:1px solid #D6D6D6;
        border-radius: 5px;
        padding:10px;
    }
    .pro-item-i img{
        width:100%;
    }
    .pro-item-ds{
        height:35px;
        font-size:14px;
        line-height:35px;
        text-align:center;
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