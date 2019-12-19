<template>
    <div id="wrap">
        <commMenu />
        <div class="tit-w">
            <div class="tit-i">新闻中心</div>
            <div class="tit-ie">News Center</div>
            <div class="tit-line"></div>
        </div>      
        <div class="m-co">
            <div class="row-item">
                <div class="ri-l">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/n_img_01.png"></div>
                    <div class="pro-item-dt"><span>4</span>/26</div>
                    <div class="pro-item-ds">工况净化器</div>
                    <div class="pro-item-btn">查看详情</div>
                </div>
                <div class="ri-r">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/n_img_01.png"></div>
                    <div class="pro-item-dt"><span>4</span>/26</div>
                    <div class="pro-item-ds">工况净化器</div>
                    <div class="pro-item-btn">查看详情</div>
                </div>
            </div>
            <div class="row-item">
                <div class="ri-l">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/n_img_01.png"></div>
                    <div class="pro-item-dt"><span>4</span>/26</div>
                    <div class="pro-item-ds">工况净化器</div>
                    <div class="pro-item-btn">查看详情</div>
                </div>
                <div class="ri-r">
                    <div class="pro-item-i"><img src="@/assets/img/mobile/n_img_01.png"></div>
                    <div class="pro-item-dt"><span>4</span>/26</div>
                    <div class="pro-item-ds">工况净化器</div>
                    <div class="pro-item-btn">查看详情</div>
                </div>
            </div>
        </div>
        <div class="c-u">
            <div class="c-u-a"></div>
            <div class="a-it-r"><span class="a-ic-a"></span>联系热线：010-88712369</div>
            <div class="a-it-r"><span class="a-ic-b"></span>公司地址：北京市石景山区实兴东街11号2层2498室</div>
            <div class="a-it-r"><span class="a-ic-c"></span>公司邮箱：huandixuanrong@163.com</div>
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
        margin-top:20px;
    }
    .row-item::after{
        content:'';
        clear: both;
        overflow: hidden;
    }
    .pro-item-i{
        overflow: hidden;
    }
    .pro-item-dt{
        color:#333;
        text-align: center;
        margin-top:5px;
        font-size:14px;
    }
    .pro-item-dt span{
        color:#333;
        font-size:12px;
    }
    .pro-item-btn{
        font-size:14px;
        height:30px;
        line-height:30px;
        border:1px solid #999;
        text-align: center;
        width:50%;
        margin:5px auto 0 auto;
    }
    .pro-item-i img{
        width:100%;
        border-radius: 5px;
    }
    .pro-item-ds{
        height:35px;
        color:#333;
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
    .c-u{
        position:absolute;
        bottom: 0;
        width:90%;
        padding:10px 5%;
        background:url("../../assets/img/mobile/a_img_01.png") right 4rem no-repeat;
        background-size: contain;
    }
    .c-u-a{
        width:80px;
        height:18px;
        overflow: hidden;
        background:url("../../assets/img/mobile/logo.png") no-repeat;
        background-size: cover;
    }
    .a-it-r{
        font-size:12px;
        margin-top:10px;
        height:13px;
        line-height:13px;
    }
    .a-ic-a{
        display:block;
        float:left;
        width:10px;
        margin-right:10px;
        height:12px;
        overflow: hidden;
        background:url("../../assets/img/mobile/a_pho_icon_a.png") no-repeat;
        background-size: cover;
    }
    .a-ic-b{
        display:block;
        float:left;
        width:10px;
        overflow: hidden;
        margin-right:10px;
        height:13px;
        background:url("../../assets/img/mobile/a_add_icon_b.png") no-repeat;
        background-size: cover;
    }
    .a-ic-c{
        display:block;
        float:left;
        overflow: hidden;
        width:12px;
        margin-right:8px;
        margin-top:1px;
        height:10px;
        background:url("../../assets/img/mobile/a_mail_icon_c.png") no-repeat;
        background-size: cover;
    }
</style>