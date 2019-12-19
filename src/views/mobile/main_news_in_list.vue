<template>
    <div id="wrap">
        <commMenu />
        <div class="cen-cot">
            <div class="n-tab-tit">
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-ov">公司新闻</div>
                    <div class="n-tab-tl tab-t-ac"></div>
                </div>
                <div class="n-tab-tit-itm">
                    <div class="n-tab-tt t-out">行业新闻</div>
                    <div class="n-tab-tl"></div>
                </div>
            </div>
            <div class="cen-cot-b">
                <div class="n-img-w">
                    <img src="@/assets/img/mobile/n_b_img_01.png" />
                </div>
                <div class="n-ls-w">
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
                    </div>
                    <div class="ls-row-w">
                        <div class="ls-rw-l">
                            <div class="n-tit-a cut">新闻标题新闻标题</div>
                            <div class="n-tit-ds">详情详情详情详情详情详情详情详情详情详情详情详情详情30个字</div>
                            <div class="n-tit-t cut">2019-10-12</div>
                        </div>
                        <div class="ls-rw-r"><img src="@/assets/img/mobile/n_l_img_01.png"></div>
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
        box-shadow:0px 2px 5px rgba(0,0,0,.16);
    }
    .n-tab-tit::after{
        content:'';
        overflow: hidden;
        clear: both;
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
        margin-top:10px;
        padding:0 15px;
    }
    .n-img-w{
        overflow: hidden;
    }
    .n-ls-w{
        height:calc(100% - 225px);
        overflow-y:scroll;
        margin-top:10px;
    }
    .ls-row-w{
        overflow: hidden;
        padding:10px 0;
        border-bottom:1px solid #eee;
        width:100%;
    }
    .n-img-w img{
        width:100%;
        height: 120px;
        border-radius: 5px;
    }
    .ls-row-w::after{
        content:'';
        overflow:hidden;
        clear: both;
    }
    .ls-rw-l{
        width:63%;
        float: left;
    }
    .ls-rw-r{
        float: right;
        width:35%;
    }
    .ls-rw-r img{
        width:100%;
        border-radius:5px;
    }
    .n-tit-a{
        font-size:14px;
        color:#333;
    }
    .n-tit-ds{
        font-size:12px;
        margin-top:3px;
        line-height:21px;
        color:#757575;
    }
    .n-tit-t{
        font-size:12px;
        color:#999999;
    }
    .cut{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .n-tab-tl{
        width:10%;
        height:2px;
        border-radius: 3px;
        margin:-5px auto 0 auto;
    }
    .tab-t-ac{
        background-color:#333;
    }
    .t-ov{
        color:#333;
    }
    .t-out{
        color:#999;
    }
</style>