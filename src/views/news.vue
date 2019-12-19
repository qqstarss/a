<template>
    <div id="proWrap">
        <commBanner productBanner="news"/>
        <div class="com-cont">
            <div class="ls-l">
                <div class="l-men-a l-men-com">公司动态</div>
                <div class="l-men-b l-men-com">行业新闻</div>
            </div>
            <div class="ls-r" id="rightMain">
                <commNav :nav="nav"/>
                <div class="news-ls-wrap">
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                    <div class="news-ls-w">
                        <div class="news-ls-img"><img src="../assets/img/new_ls_imgicn_01.jpg" /></div>
                        <div class="news-ls-ds">
                            <div class="nls-ds-tit">华迪轩榕签约成功</div>
                            <div class="nls-ds-con">以大气污染防治监管信息化平台做为新业务切入点，通过在监督、管理、治理、服务等环节下功夫，预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。</div>
                        </div>
                        <div class="news-ls-date">
                            <b>18</b><b>2018.09</b>
                        </div>
                    </div>
                </div>
                <!-- 分页 -->
                <div class="page-w">
                    <span>共有30条记录</span>
                    <a>上一页</a>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>下一页</a>
                    <input placeholder="输入页" type="text" />
                    <button>跳转</button>
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
                    a:"新闻中心",
                    b:"公司动态"
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
.page-w{
    padding:5px 0;
    text-align: center;
    overflow: hidden;
    margin:20px auto 0 auto;
}
.page-w span{
    margin-right:5px;
}
.page-w input{
    width:40px;
    border-radius: 5px;
    background: white;
    border:1px solid #999;
    margin:0 5px;
    padding:4px 8px;
}
.page-w button{
    background: #0f63c7;
    border:none;
    border-radius: 5px;
    color:white;
    display:inline-block;
    margin:0 5px;
    padding:4px 8px;
}
.page-w a{
    border:1px solid #999;
    border-radius: 5px;
    margin:0 5px;
    cursor: pointer;
    padding:4px 8px;
}
.page-w a:hover{
    background-color:#0F63C7;
    color:white;
}
.news-ls-wrap{
    overflow: hidden;
    /* height:1010px; */
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
.news-ls-w{
    overflow: hidden;
    cursor: pointer;
    padding:10px 0;
    border-bottom: 1px solid #eee;
}
.news-ls-w::after{
    content:'';
    clear: both;
    overflow: hidden;
}
.news-ls-img{
    width:90px;
    height:90px;
    float: left;
    overflow: hidden;
}
.news-ls-img img{
    width:100%;
    transition: all 0.3s;
}
.news-ls-img img:hover{
    transform: scale(1.1);
}
.news-ls-ds{
    overflow: hidden;
    float: left;
    width:560px;
    color:#757575;
    height:90px;
    padding-left:10px;
    margin-left:10px;
    border-left: 1px solid #eee;
}
.nls-ds-tit{
    font-size: 14px;
    font-weight: bold;
}
.nls-ds-con{
    margin-top:7px;
    font-size: 12px;
    line-height: 21px;
}
.news-ls-date{
    float: right;
    width:90px;
    margin-top:15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    color:#757575;
}
.news-ls-date b:first-of-type{
    display: block;
    font-size: 40px;
    line-height: 40px;
}
.news-ls-date b:last-of-type{
    display: block;
    font-size: 14px;
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
.l-men-com:hover{
    background: #0F63C7;
    color:white;
}
.l-men-a{
    color:white;
    background-color:#0F63C7;
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