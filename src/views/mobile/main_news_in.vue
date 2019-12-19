<template>
    <div id="wrap">
        <commMenu />
        <div class="cen-cot">
            <div class="cot-tit-w">
                <div class="cot-tit-wa cut">标题标题标题标题标题</div>
                <div class="cot-tit-wb cut">2019-10-11</div>
            </div>
            <div class="cot-in">
                城市被乌云笼罩，长江大桥在衬托下耸立孤零城市被乌云笼罩，长江大桥在衬托下耸立孤零城市被乌云笼罩，长江大桥在衬托下耸立孤零城市被乌云笼罩，长江大桥在衬托下耸立孤零城市被乌云笼罩，长江大桥在衬托下耸立孤零城市被乌云笼罩，长江大桥在衬托下耸立孤零
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
        overflow: hidden;
    }
    .cen-cot{
        padding:0 15px;
        overflow: hidden;
    }
    .cot-tit-w{
        margin-top:20px;
        overflow:hidden;
    }
    .cot-tit-wa{
        font-size:14px;
        color:#333;
        text-align: center;
    }
    .cut{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    .cot-tit-wb{
        margin-top:5px;
        text-align: right;
        font-size:12px;
        color:#999;
    }
    .cot-in{
        margin-top:10px;
        line-height:24px;
        font-size:12px;
        text-align: justify;
        color:#757575;
    }
</style>