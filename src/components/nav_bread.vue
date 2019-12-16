<template>
  <div class="bread-w">
    <div class="bread-lt">公司介绍</div>
    <div class="bread-rt">公司介绍>商务合作</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .bread-w{
    height: 30px;
    line-height:30px;
    border-bottom: 1px solid #ccc;
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
