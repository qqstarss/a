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
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">公司介绍</div>
                    <div class="ab-ls-ds">
                        <p>北京华迪轩榕环境科技有限公司是一家符合国家环保政策，将传统环保行业管理实施“物联网+”技术结合起来的环保科技型企业。</p>
                        <p>华迪轩榕在环境污染治理行业深耕多年，伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，在监督、管理、治理、服务等环节下功夫，做到预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑。随着在环境治理领域不断的耕耘，华迪轩榕坚持在水、土壤、固废等污染防治方面建立360度治理监管方案，从初期城市环保需求分解到智慧平台研发交付培训、后期运行维护等，均建立了成熟的管理体系，做到环境监管技术服务精准卓越，切实有效降低大气污染，提升城市智慧环保效能，改善城市空气环境质量。</p>
                    </div>
                </div>
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">愿景</div>
                    <div class="ab-ls-ds">
                        <p>创大气污染防治监督行业信息化行业平台。</p> 
                        <p>建大气污染防治监督责任企业。</p>
                        <p>做智慧环保领域技术创新型标杆企业。</p>
                    </div>
                </div>
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">价值观</div>
                    <div class="ab-ls-ds">
                        <p>创立大气污染监督管理信息化平台，刷新大气源头治理服务理念。</p>
                        <p>新思想、新理念、新技术，新方法，赋予大气污染治理新活力。</p>
                        <p>“环”环阻击，杜绝源头污染。</p>
                        <p>保卫蓝天，迎“蓝”而上。</p>
                    </div>
                </div>
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">理念</div>
                    <div class="ab-ls-ds">
                        <p>通过技术理念的不断创新，创立大气污染治理行业新模式，为中国大气污染治理事业的发展竭诚奉献。</p>
                    </div>
                </div>
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">企业宗旨</div>
                    <div class="ab-ls-ds">
                        <p>创建智慧环保卓越团队，为城市环境治理提供专业的环保技术咨询、整体解决方案、在线数据监测、环境数据分析和设备运行维护等全方位、精细化城市智慧管家服务，担当城市智慧环保管家角色。</p>
                    </div>
                </div>
                <div class="ab-ls-w">
                    <div class="ab-ls-tit">团队介绍</div>
                    <div class="ab-ls-ds">
                        <div class="td-img-01"><img src="@/assets/img/mobile/b_img_02.png" /></div>
                        <p>华迪轩榕团队是以环保研发、集成、运维、应用等八大模块为中心，聚集了环保治理软硬件开发、产品引荐、设备设计、技术培训、设备运行维护等全方位人才，团队精英每位员工都怀揣保护生态环境的责任使命,自愿加入华迪轩榕。经过长期反复的技术研讨和实操磨练，华迪轩榕三大团队练就成一支召之即来，来之即战，战之必胜的专业技能过硬的智慧环保先锋团。</p>
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
        padding:0 15px;
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
        margin-right:20px;
        font-size:14px;
        font-weight: bolder;
        line-height:40px;
        text-align:center;
    }
    .cen-cot-b{
        padding:0 15px;
      overflow: hidden;  
    }
    .n-tab-tl{
        width:2rem;
        height:2px;
        border-radius: 3px;
        margin:-5px auto 0 auto;
    }
    .tab-t-ac{
        background-color:#333;
    }
    .cen-cot-b{
        margin-top:10px;
        overflow: hidden;
    }
    .td-img-01{
        text-align: center;
        margin:10px 0;
    }
    .td-img-01 img{
        height:150px;
        border-radius:5px;
    }
    .ab-ls-w{
        overflow: hidden;
        margin-bottom:10px;
    }
    .ab-ls-tit{
        font-size: 14px;
        height:30px;
        color:#333;
        font-weight:bolder;
        line-height:30px;
    }
    .ab-ls-ds{
        color:#999;
        font-size:12px;
        line-height:24px;
        text-indent:24px;
    }
    .ab-ls-ds p{
        text-indent:24px;
    }
</style>