<template>
  <div class="bread-w">
    <div class="bread-lt">{{nav.a}}</div>
    <div class="bread-rt">{{nav.b }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  mounted(){

  },
  methods:{
    
  },
  props:['nav']
}
</script>

<style scoped>
  .bread-w{
    height: 30px;
    line-height:30px;
    border-bottom: 1px solid #eee;
    margin-bottom:15px;
  }
  .bread-w::after{
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
</style>
