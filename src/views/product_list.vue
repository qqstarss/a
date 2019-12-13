<template>
    <div id="mainW">
        <div class="main-lt">
            <commMenu />
        </div>
        <div class="main-rt">
            <commNavBread />
            <div class="main-info">
                
            </div>
        </div>
    </div>
</template>

<script>
import commMenu from './components/menu.vue'
import commNavBread from './components/nav-bread.vue' 

export default {
  name: 'main',
  components: {
    commMenu,
    commNavBread
  }
}
</script>

<style scoped>
    #mainW{
        width:960px;
        overflow: hidden;
    }
    #mainW::after{
        content: '';
        overflow: hidden;
        clear: both;
    }
    .main-lt,.main-rt{
        float: left;
    }
    .main-lt{
       width:100px;
       overflow: hidden; 
    }
    .main-rt{
        width:845px;
        overflow: hidden; 
        margin-left:15px;
    }
</style>
