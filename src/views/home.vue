<template>
  <div id="app">
    <commHeader />
    <div class="home-cont">
      <!-- 公司介绍 -->
      <div class="h-a">
        <div class="h-a-l">
          <div class="h-a-img-w">
            <img src="@/assets/img/home_img01.jpg"/>
          </div>
        </div>
        <div class="h-a-r">
          <div class="h-a-tit">公司介绍</div>
          <div class="h-a-info"><p>北京华迪轩榕环境科技有限公司是一家符合国家环保政策，将传统环保行业管理实施“物联网+”技术结合起来的环保科技型企业。</p>
<p>华迪轩榕在环境污染治理行业深耕多年，伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，在监督、管理、治理、服务等环节下功夫，做到预防为主，防治结合，解决城市环境治理监管难、执法难、工作量大等问题，为城市决策、行政执法提供了强效有力的数据支撑……</p></div>
          <div class="h-a-w">
            <div class="h-btn f-r"><router-link to="/about">查看详情</router-link></div>
          </div>
        </div>
      </div>
      <!-- 公司优势 -->
      <div class="h-b">
        <div class="h-b-tit">
          公司优势<br/><span class="h-b-t-h3">Company advantage</span>
        </div>
        <div class="h-b-con">
          <ul>
            <li class="mar-r-20 li-cur" @mouseover="showIcon(0)" @mouseout="showIcon(5)">
              <div :class="['h-b-r-a icon-a',iconIndex == 0?'icon-a-d':'']"></div>
              <div class="h-b-r-b">服务卓越</div>
              <div class="h-b-r-c">以改善大气污染防治为核心，处处以城市环保需求为先导，精准发力，卓越实施，以诚信服务、可靠服务、专业服务、精细化服务为目标，辅助城市决策者提升大气环境质量，构建卓越服务型企业。</div>
            </li>
            <li class="mar-r-20" @mouseover="showIcon(1)" @mouseout="showIcon(5)">
              <div :class="['h-b-r-a icon-b',iconIndex == 1?'icon-b-d':'']"></div>
              <div class="h-b-r-b">监督便捷</div>
              <div class="h-b-r-c">开创数字环保、智慧环保并行，充分的实现了畅通环境污染源头治理,大大提高了城市监管工作效率，减少了环保监管的人工成本投入。</div>
            </li>
            <li class="mar-r-20" @mouseover="showIcon(2)" @mouseout="showIcon(5)">
              <div :class="['h-b-r-a icon-c',iconIndex == 2?'icon-c-d':'']"></div>
              <div class="h-b-r-b">管控精准</div>
              <div class="h-b-r-c">透过物联网+技术服务，坚持精准管控发力方向，源头管理，系统治理，以科技治气为基准，着力大气污染防治，提供科学化、智能化、精准化的管控手段，辅助城市环境监管效能提升。</div>
            </li>
            <li @mouseover="showIcon(3)" @mouseout="showIcon(5)">
              <div :class="['h-b-r-a icon-d',iconIndex == 3?'icon-d-d':'']"></div>
              <div class="h-b-r-b">治理达标</div>
              <div class="h-b-r-c">立足当下，以科技智能化新技术，以查促改，以管代罚，以防代治，科学、精准、高效的服务于环境管理部门。着眼长远，倡导企业绿色排放，达标生产，为城市大气污染防治保驾护航。</div>
            </li>
          </ul>
          <div class="h-btn m-t-16 h-cen" style="display:none;">查看详情</div>
        </div>
      </div>
      <!-- 产品展示 -->
      <div class="h-c">
        <div class="h-b-tit">
          产品展示<br/><span class="h-b-t-h3">Company advantage</span>
        </div>
        <div class="h-c-con">
          <div class="h-c-con-w">
            <div class="h-c-con-l">
              <div class="h-c-con-l-a h-solution-img"><img src="@/assets/img/home_img_03.jpg"/></div>
              <div class="h-c-con-l-b">
                <!-- 菜单列表 -->
                <ul class="h-c-con-lis">
                  <li :class="[homeProInh == 'a'? 'h-c-active' :'']" @mouseover="setProLive('a','油烟净化器')">油烟净化器</li>
                  <li :class="[homeProInh == 'b'? 'h-c-active' :'']" @mouseover="setProLive('b','在线监测仪')">在线监测仪</li>
                  <li :class="[homeProInh == 'c'? 'h-c-active' :'']" @mouseover="setProLive('c','净化效率传感器')">净化效率传感器</li>
                  <li :class="[homeProInh == 'd'? 'h-c-active' :'']" @mouseover="setProLive('d','净化器工况传感器')">净化器工况传感器</li>
                  <li :class="[homeProInh == 'e'? 'h-c-active' :'']" @mouseover="setProLive('e','风机工况传感器')">风机工况传感器</li>
                </ul>
              </div>
            </div>
            <div class="h-c-con-line"></div>
            <div class="h-c-con-r">
              <div class="h-c-con-r-w">
                <div class="h-c-con-r-t cut">{{homeProDesTit}}</div>
                <!-- 显示90个字 -->
                <div class="h-c-con-r-con">{{homeProDesCot}}</div>
                <div class="h-c-con-r-btn">
                  <div class="h-btn fl-r"><router-link to="/product">查看详情</router-link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 成功案例 -->
      <div class="h-d" style="display:none;">
        <div class="h-b-tit">
          成功案例<br/><span class="h-b-t-h3">Successful case</span>
        </div>
        <div class="succ-w">
          <ul class="succ-ul">
            <li class="mar-r-20">
              <div class="succ-li-img"><img src="@/assets/img/home_img_04.jpg" /></div>
              <div class="succ-li-tit cut">邯郸市油烟管理净化平台</div>
              <div class="succ-li-ds">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
            </li>
            <li class="mar-r-20">
              <div class="succ-li-img"><img src="@/assets/img/home_img_04.jpg" /></div>
              <div class="succ-li-tit cut">邯郸市油烟管理净化平台</div>
              <div class="succ-li-ds">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
            </li>
            <li>
              <div class="succ-li-img"><img src="@/assets/img/home_img_04.jpg" /></div>
              <div class="succ-li-tit cut">邯郸市油烟管理净化平台</div>
              <div class="succ-li-ds">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 新闻中心 -->
      <div class="h-e">
        <div class="h-b-tit">
          新闻中心<br/><span class="h-b-t-h3">News Center</span>
        </div>
        <div class="h-e-con">
          <div class="h-e-l">
            <div class="h-e-l-row h-e-im"><img src="@/assets/img/home_img_04.jpg"></div>
            <div class="h-e-l-row h-e-tit">华迪轩榕保卫蓝天保卫生命</div>
            <div class="h-e-l-row h-e-x">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
            <div class="h-e-l-row h-e-sk">
              <div class="h-e-sk-itema">2019-03-10</div>
              <div class="h-e-sk-itemb">查看详情</div>
            </div>
          </div>
          <div class="h-e-r">
            <div class="h-e-r-tab">
              <div @click="setNewTab(0)" :class="['h-e-tab-row',newsIndex == 0 ? 'h-e-tab-ac' :'h-e-tab-lev']">公司新闻</div>
              <div @click="setNewTab(1)" :class="['h-e-tab-row',newsIndex == 1 ? 'h-e-tab-ac' :'h-e-tab-lev']">行业新闻</div>
            </div>
            <div class="h-e-tab-ud">
              <ul class="h-e-ul">
                <li class="h-e-lirows">
                  <div class="h-e-nub">
                    <i class="h-e-nuba">01</i><i class="h-e-nubb">2019.09</i>
                  </div>
                  <div class="h-e-tx">
                    <div class="h-e-tx-t cut">标题标题标题测试调表</div>
                    <div class="h-e-tx-x">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
                  </div>
                </li>
                <li class="h-e-lirows">
                  <div class="h-e-nub">
                    <i class="h-e-nuba">02</i><i class="h-e-nubb">2019.09</i>
                  </div>
                  <div class="h-e-tx">
                    <div class="h-e-tx-t cut">标题标题标题测试调表</div>
                    <div class="h-e-tx-x">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
                  </div>
                </li>
                <li class="h-e-lirows">
                  <div class="h-e-nub">
                    <i class="h-e-nuba">03</i><i class="h-e-nubb">2019.09</i>
                  </div>
                  <div class="h-e-tx">
                    <div class="h-e-tx-t cut">标题标题标题测试调表</div>
                    <div class="h-e-tx-x">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
                  </div>
                </li>
                <li class="h-e-lirows">
                  <div class="h-e-nub">
                    <i class="h-e-nuba">04</i><i class="h-e-nubb">2019.09</i>
                  </div>
                  <div class="h-e-tx">
                    <div class="h-e-tx-t cut">标题标题标题测试调表</div>
                    <div class="h-e-tx-x">华迪轩榕在环境污染治理行业深耕多年，并伴随着“互联网+”科技浪潮，以大气污染防治监管信息化平台做为新业务切入点，通过在监督。</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 友情链接 -->
    </div>
    <div class="f-w">
      <div class="h-f">
        友情链接：<a target="_blank" href="http://www.caepi.org.cn/">中国环境保护产业协会</a><a target="_blank" href="http://www.acef.com.cn/">中华环保联合会</a><a target="_blank" href="http://www.ncst.edu.cn/">华北理工大学</a><a target="_blank" href="http://www.cee.cn/">北京市环境保护科学研究院</a><a target="_blank" href="http://www.craes.cn/">中国环境科学研究院</a>
      </div>
    </div>
    <commFooder />
  </div>
</template>

<script>
import commHeader from '@/components/header.vue'
import commFooder from '@/components/footer.vue'
export default {
  name: 'app',
  components: {
    commHeader,
    commFooder
  },
  data(){
    return{
      iconIndex:5,
      newsIndex:0,
      homeProInh:'a',
      homeProDes:{
        "a":"油烟净化器主要用于厨房低空排放油烟的净化治理。",
        "b":"利用激光光散射检测技术、电化学检测技术、电磁感应技术、互联网技术、3G/4G无线通信技术等技术，24小时全方位在线监测餐饮企业油烟、颗粒物、非甲烷总烃的排放浓度，净化器系统运行状态、风机运行状态等指标。",
        "c":"净化效率传感器直接安装在油烟净化器上，通过采集油烟净化器的运行工况数据，上传到餐饮油烟监督管理信息化平台，利用华迪轩榕公司独有的专业算法进行数据统计、分析，计算出被监测油烟净化器的净化效率，形成油烟净化器净化效率统计报表，提供给行政执法人员、餐饮企业和运维团队，作为净化器高压电场进行清洗、运维的参考依据。通过“主动预防、科学运维”，对油烟净化器运行维护提出预警，为餐饮企业提供最佳的油烟净化处理效率。",
        "d":"净化器工况传感器安装在油烟净化器上，通过感应油烟净化器的工作电流，判断油烟净化器的运行状态处于开启或者关停，并将采集到的状态数据上传到餐饮油烟监督管理信息化平台，作为餐饮企业和运维队伍对设备运维状况的判断依据。",
        "e":"风机工况传感器安装在风机上，通过感应风机的工作电流，判断风机的运行状态是处于开启或者关停，并将采集到的状态数据上传到餐饮油烟监督管理信息化平台，作为餐饮企业和运维队伍对设备运维状况的判断依据。"
      },
      homeProDesTit:'',
      homeProDesCot:''
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.homeProDesTit = "油烟净化器";
      this.homeProDesCot = this.homeProDes.a;
    })
  },
  methods:{
    showIcon(index){
      this.iconIndex = index;
    },
    setNewTab:function(m){
      this.newsIndex = m;
    },
    setProLive:function(m,t){
      this.homeProDesTit = t; this.homeProInh = m;
      if(this.homeProDes[m].length < 80){
        this.homeProDesCot = this.homeProDes[m];
      } else {
        this.homeProDesCot = this.homeProDes[m].substr(0,80) + "…";
      }
      
    }
  }
}
</script>

<style scoped>
#app{
    min-width:960px;
}
.h-a-w{
  overflow: hidden;

}
.home-cont{
    width:960px;
    margin:0 auto;
}
.f-w{
    background:#eee;
    height:35px;
    line-height:35px;
}
.f-r{
  float:right;
}
.h-f{
    width:960px;
    font-size: 14px;
    overflow: hidden;
    margin:0 auto;
}
.h-f a{
    color:black;
    text-decoration: none;
    margin-right: 10px;
}
.h-a{
  padding:30px 0;
  overflow: hidden;
}
.h-a::after{
    content:'';
    overflow: hidden;
    clear: both;
}
.h-a-l{
    float: left;
    width:283px;
    
}
.h-a-img-w{
  width:247px;
  margin: 0 auto;
  overflow:hidden;

}
.h-a-r{
    float: right;
    width:670px;
    margin-right:7px;
}
.h-a-tit{
    font-size:24px;
    font-weight: bold;
    color:#000;
}
.h-a-info{
    margin-top:14px;
    font-size:12px;
    color:rgba(102,102,102,1);
    line-height:25px;
    text-indent: 24px;
    text-align: justify;
}
.h-btn{
  width:140px;
  height:40px;
  line-height:40px;
  color:white;
  font-size:14px;
  text-align: center;
  cursor:pointer;
  background:rgba(15,99,199,1);
  box-shadow:1px 1px 1px 0px rgba(0, 0, 0, 0.2);
  border-radius:3px;
}
.h-btn:hover{
  background:rgba(15,99,199,.7);
}
.h-b{
  overflow: hidden;
  margin-top:10px;
}
.h-b-tit{
  text-align:center;
  font-size:24px;
  font-weight:bold;
  color:black;
  overflow: hidden;
  line-height:35px;
}
.h-b-t-h3{
  color:#a3a3a3;
}
.h-b-con{
  margin:20px 0 30px 0;
  overflow: hidden;
}
.h-b-con ul::after{
  content: '';
  overflow:hidden;
  clear: both;
}
.h-b-con ul{
  overflow:hidden;
}
.h-b-con ul li{
  float:left;
  width:225px;
  cursor: pointer;
}
.mar-r-20{
  margin-right: 20px;
}
.h-b-r-a,.h-b-r-b{
  font-size:16px;
  text-align: center;
}
.h-b-r-a{
  margin:0 auto;
  background:url("../assets/img/h_icon_01_d.png") no-repeat;
  width:72px;
  height:84px;
}
.icon-a{
  background:url("../assets/img/h_icon_01_d.png") no-repeat;
}
.icon-b{
  background:url("../assets/img/h_icon_02_d.png") no-repeat;
}
.icon-c{
  background:url("../assets/img/h_icon_03_d.png") no-repeat;
}
.icon-d{
  background:url("../assets/img/h_icon_04_d.png") no-repeat;
}

.icon-a-d{
  background:url("../assets/img/h_icon_01.png") no-repeat;
}
.icon-b-d{
  background:url("../assets/img/h_icon_02.png") no-repeat;
}
.icon-c-d{
  background:url("../assets/img/h_icon_03.png") no-repeat;
}
.icon-d-d{
  background:url("../assets/img/h_icon_04.png") no-repeat;
}
.h-b-r-b{
  margin:10px 0;
}
.h-b-r-c{
  font-size:12px;
  color:#666;
  text-align:center;
  line-height:24px;
  text-indent:24px;
}
.h-cen{
  margin:20px auto 0 auto;
}
.h-c{
  overflow: hidden;
}
.h-c-con{
  overflow:hidden;
  margin:20px 0 13px 0;
  height:260px;
  background:#e5e5e5;
}
.h-c-con-w{
  width:930px;
  margin:15px auto;
  height:230px;
  background-color:white;
  overflow:hidden;
}
.h-c-con-w::after{
  content:'';
  overflow:hidden;
  clear: both;
}
.h-c-con-l,.h-c-con-r{
  float: left;
}
.h-c-con-l::after{
  content:'';
  overflow:hidden;
  clear: both;
}
.h-c-con-l-a,.h-c-con-l-b{
  float: left;
}
.h-c-con-l-a{
  width:280px;
  overflow:hidden;
}
.h-c-con-l-a img{
  vertical-align: middle;
}
.h-c-con-l-b{
  width:184px;
}
.h-c-con-l{
  width:464px;
  overflow: hidden;
}
.h-c-con-r{
  width:465px;
  overflow: hidden;
}
.h-c-con-r-w{
  width:405px;
  margin:0 auto;
}
.h-c-con-line{
  float: left;
  width:1px;
  background-color:#eee;
  height:115px;
  margin-top:60px;
}
.h-c-con-lis{
  overflow:hidden;
  margin-top:10px;
}
.h-c-con-lis li{
  width:154px;
  height:30px;
  font-size:12px;
  line-height:30px;
  border-bottom:1px solid #eee;
  text-align: center;
  cursor: pointer;
}

.h-c-active{
  color:white;
  background-color:#0F63C7; 
}
.h-c-con-r-t{
  font-weight:bold;
  font-size:14px;
  margin-top:40px;
}
.h-c-con-r-con{
  font-size:12px;
  color:#666;
  margin-top:10px;
  text-align: justify;
  text-indent:24px;
  height: 72px;
  line-height:24px;
}

.h-c-con-r-btn{
  overflow:hidden;
  margin-top:16px;
}
.m-t-16{
  margin-top:16px;
}
.fl-r{
  float: right;
}
.succ-w{
  width:960px;
  overflow: hidden;
  margin-top:20px;
}
.succ-ul{
  overflow:hidden;
}
.succ-ul::after{
  content:'';
  overflow:hidden;
  clear: both;
}
.succ-ul li{
  width:305px;
  float: left;
}
.succ-li-img{
  overflow: hidden;
  height:130px;
}
.succ-li-img img{
  width:100%;
  transition: all 0.3s;
}
.succ-li-img img:hover{
  transform: scale(1.1);
}
.h-d{
  overflow:hidden;
  margin-top:20px;
}
.succ-li-tit{
  height:35px;
  font-size:14px;
  line-height:35px;
  text-align: center;
  font-weight: bold;
}
.mar-r-22{
  margin-right:22px;
}
.succ-li-ds{
  text-indent: 24px;
  text-align: justify;
  font-size: 12px;
  font-weight: 200;
  line-height:24px;
}
.h-e{
  margin:30px 0;
  overflow: hidden;
}
.h-e-l,.h-e-r{
  overflow: hidden;
  float: left;
}
.h-e-r{
  width:640px;
}
.h-e-l{
  width:320px;
  box-shadow:0 0 11px 0 #ccc;
}
.h-e-con{
  padding:20px 0 10px 0;
  overflow: hidden;
}
.h-e-im{
  height:220px;
}
.h-e-im img{
  width:100%;
  transition: all 0.3s;
}
.h-e-im img:hover{
  transform: scale(1.1);
}
.h-solution-img img{
  width:100%;
  transition: all 0.3s;
}
.h-solution-img img:hover{
  transform: scale(1.1);
}
.h-e-l-row{
  overflow: hidden;
}
.h-e-tit{
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color:#0F63C7;
  margin-top:10px;
  line-height: 35px;
}
.h-e-x{
  text-align: justify;
  color:#909090;
  font-size: 12px;
  line-height:24px;
  height:72px;
  overflow: hidden;
  text-indent:24px;
  padding:0 10px 0 10px;
}
.h-e-sk{
  padding:10px;
  margin-top:5px;
  overflow: hidden;
}
.h-e-sk::after{
  content:'';
  overflow: hidden;
  clear: both;
}
.h-e-sk-itema{
  float: left;
  font-size: 12px;
  color:#999;
}
.h-e-sk-itemb{
  float:right;
  cursor: pointer;
  color:#0F63C7;
  font-size:12px;
}
.h-e-sk-itemb:hover{
  color:rgba(15,99,199,.7);
}
.h-e-r-tab{
  overflow: hidden;
}
.h-e-r-tab::after{
  content:'';
  overflow: hidden;
  clear: both;
}
.h-e-tab-row{
  float: left;
  width:50%;
  height:35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.h-e-tab-lev{
  background-color:#EEEEEE;
}
.h-e-tab-ac{
  color:white;
  background-color:#0F63C7;
}
.h-e-tab-ud,.h-e-ul{
  overflow: hidden;
}
.h-e-ul{
  padding:0 10px 0 20px;
}
.h-e-lirows{
  overflow: hidden;
  margin-top:15px;
  cursor: pointer;
  color:#333;
}
.h-e-lirows::after{
  content:'';
  overflow:hidden;
  clear: both;
}
.h-e-lirows:hover{
  color:#0F63C7;
}
.h-e-nub{
  width:89px;
  float: left;
  border-right:1px solid #D6D6D6;
}
.h-e-nub i{
  font-style: normal;
  display:block;
}
.h-e-tx{
  float:right;
  width:500px;
}
.h-e-nuba{
  font-size:50px;
  line-height:50px;
  text-align: center;
}
.h-e-nubb{
  font-size:14px;
  text-align: center;
}
.h-e-tx-t{
  font-size:14px;
  font-weight:bold;
}
.h-e-tx-x{
  margin-top:8px;
  font-size: 12px;
  text-align: justify;
  line-height:21px;
}
.f-r a,.fl-r a{
 color:white;
 text-decoration:none;
}
.cut{
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu-activ{
  background-color:white;;
}
</style>