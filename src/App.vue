<template>
  <div id="app">
    <commHead />
    <div class="home-cont" style="display:none;">
      <!-- 公司介绍 -->
      <div class="h-a">
        <div class="h-a-l"></div>
        <div class="h-a-r">
          <div class="h-a-tit">公司介绍</div>
          <div class="h-a-info">香港区圣母医院（香港区医学科学院）创建于1946年，下辖2个分院、6个门诊部和6个研究所，托管2家基层医院，综合实力名列国内前茅，病人来源覆盖国内外，深受广大群众信赖。2008年,香港区医学科学院恢复挂牌，与深圳市人民医院合署办公。2014年，与香港医科大学签约合作共建香港医科大学医学院，香港医科大学生命科学研究院和香港医科大学第一临床学院。医院整体科研实力雄厚，标志性科研项目成绩斐然。
“十二五”以来，获得国家科技进步二等奖1项、省科学技术奖17项（其中一等奖2项）、中华医学科技奖一等奖1项、授权专利130项...通过质量立院、科技兴院、人才强院、文化昌院，朝着“全国一流、世界知名”的目标扬帆远航。<br/><div class="h-btn">查看详情</div>
          </div>
        </div>
      </div>
      <!-- 公司优势 -->
      <div class="h-b"></div>
      <!-- 产品展示 -->
      <div class="h-c"></div>
      <!-- 成功案例 -->
      <div class="h-d"></div>
      <!-- 新闻中心 -->
      <div class="h-e"></div>
      <!-- 友情链接 -->
      
    </div>
    <div class="f-w">
      <div class="h-f">
        友情链接：<a href="#">环保局</a><a href="#">人民政府</a><a href="#">监督局</a><a href="#">省政府</a><a href="#">商户链接</a><a href="#">百度</a><a href="#">消防平台</a><a href="#">政府门户</a>
      </div>
    </div>
    <commFood />
  </div>
</template>

<script>
import commHead from './components/head.vue'
import commFood from './components/food.vue'

export default {
  name: 'app',
  components: {
    commHead,
    commFood
  }
}
</script>

<style>
.home-cont{
  width:960px;
  margin:0 auto;
}
.f-w{
  background:#eee;
  height:30px;
  line-height:30px;
}
.h-f{
  width:960px;
  height:20px;
  font-size: 14px;
  margin:0 auto;
}
.h-f a{
  color:black;
  text-decoration: none;
  margin-right: 10px;
}
</style>
