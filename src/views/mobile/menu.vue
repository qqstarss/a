<template>
    <div class="m-a-w">
        <div class="head">
            <div class="head-logo"><img src="@/assets/img/mobile/logo.png" /></div>
            <div class="top-menu"></div>
        </div>
    </div>
</template>

<script>

</script>
<style>
.m-a-w{
    width:100%;
    overflow:hidden;
    background-color:white;
}
.head{
    overflow: hidden;
    height:44px;
    border-bottom:1px solid #eee;
}

.head::after{
    overflow: hidden;
    clear: both;
    content:'';
}
.head-logo{
    width:80px;
    height:17px;
    overflow: hidden;
    margin:14px auto 0 auto;
}
.head-logo img{
    width:100%;
}
.top-menu{
    width:14px;
    height:12px;
    position:absolute;
    top:15px;
    right:15px;
    background:url("../../assets/img/mobile/m_icon_img_01.png") no-repeat;
    background-size: cover;
}

</style>