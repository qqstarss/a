<template>
    <div id="wrap">
        <commMenu />
        <div class="cen-cot">
            <div class="n-tab-tit">
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-ov">公司介绍</div>
                    <div class="n-tab-tl tab-t-ac"></div>
                </div>
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-out">诚聘英才</div>
                    <div class="n-tab-tl"></div>
                </div>
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-out">联系我们</div>
                    <div class="n-tab-tl"></div>
                </div>
            </div>
            <div class="cen-cot-b">
                <div class="cot-ls-w">
                    <div class="ls-rowa">
                        <div class="ls-rowa-l">运维工程师</div>
                        <div class="ls-rowa-r c-1">4-6</div>
                    </div>
                    <div class="ls-rowb">
                        <div class="ls-rowa-l">河北·邯郸</div>
                        <div class="ls-rowa-r">2019-10-30</div>
                    </div>
                    <div class="ls-rowc"><b class="j-ico-01"></b>技术部</div>
                </div>
                <div class="cot-ls-w">
                    <div class="ls-rowa">
                        <div class="ls-rowa-l">运维工程师</div>
                        <div class="ls-rowa-r c-1">4-6</div>
                    </div>
                    <div class="ls-rowb">
                        <div class="ls-rowa-l">河北·邯郸</div>
                        <div class="ls-rowa-r">2019-10-30</div>
                    </div>
                    <div class="ls-rowc"><b class="j-ico-01"></b>技术部</div>
                </div>
                <div class="cot-ls-w">
                    <div class="ls-rowa">
                        <div class="ls-rowa-l">运维工程师</div>
                        <div class="ls-rowa-r c-1">4-6</div>
                    </div>
                    <div class="ls-rowb">
                        <div class="ls-rowa-l">河北·邯郸</div>
                        <div class="ls-rowa-r">2019-10-30</div>
                    </div>
                    <div class="ls-rowc"><b class="j-ico-01"></b>技术部</div>
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
    .n-tab-tit{
        height:40px;
        box-shadow:0 2px 5px rgba(0,0,0,.16);
        padding:0 15px;
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
        margin-right:20px;
        font-size:14px;
        font-weight: bolder;
        line-height:40px;
        text-align:center;
    }
    .cen-cot-b{
        padding:0 15px 5px 15px;
    }
    .cot-ls-w{
        overflow: hidden;
        border:1px solid #eee;
        box-shadow:0px 0px 6px rgba(0,0,0,0.16);
        border-radius:5px;
        padding:10px 15px;
        margin-top:15px;
    }
    .ls-rowa,.ls-rowb,.ls-rowc{
        overflow: hidden;
    }
    .ls-rowa,.ls-rowb{
        margin-bottom:8px;
    }
    .ls-rowc{
        font-size:14px;
    }
    .ls-rowa::after,.ls-rowb::after{
        content:'';
        overflow: hidden;
        clear: both;
    }
    .ls-rowa .ls-rowa-l{
        width:40%;
        font-weight: bolder;
        font-size:16px;
        text-align: left;
        color:#333;
        float:left;
    }
    .ls-rowa .ls-rowa-r{
        width:40%;
        color:#0F63C7;
        font-size:14px;
        position: relative;
        top:5px;
        text-align: right;
        float:right;
    }
    .ls-rowb .ls-rowa-l{
        width:40%;
        font-size:12px;
        text-align: left;
        float:left;
    }
    .ls-rowb .ls-rowa-r{
        width:40%;
        font-size:12px;
        text-align: right;
        float:right;
    }
    .ls-rowb{
        color:#999999;
    }
    .j-ico-01{
        display:block;
        margin-right:5px;
        width:14px;
        float:left;
        margin-top:3px;
        height:13px;
        background:url("../../assets/img/mobile/j_img_01.png") no-repeat;
        background-size:cover;
    }
</style>