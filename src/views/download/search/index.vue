<template>
    <div id="search">
            <input type="text" name=""  class="iconfont icon-sousuo" :placeholder="icon">
            <input type="button" name="" value="搜索" @click="search">
    </div>
</template>
<script>
export default {
    data() {
        return {
            icon: '搜索本站\ue62c'
        };
    }
};
</script>
<style lang="scss" scoped>
@import "../../../dep/download/iconfont.css";
#search{
        position: relative;
        width: 865px;
        // margin: 0 auto;
        margin-bottom: 40px;
        input[type='text']{
            height: 50px;
            width: 745px;    
            padding: 0 10px;
            border: none;   
            color: #c0c1c1; 
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            border: none;
            outline: none;
            font-size: 16px;
        }
        // 给placeholder设置样式
        input[type='text']::-webkit-input-placeholder{
            text-align: center; 
            color:#c0c1c1;
        }
        input[type='button']{
            height: 50px;
            width: 120px;
            line-height:50px;
            color:#fff;
            font-size: 16px;
            padding: 0 15px;
            background: -webkit-gradient(linear, 0 0,0 100%,from(#16aeec),to(#6ec2f1));
            background: -moz-linear-gradient(top, #16aeec,#6ec2f1);
            border: none;
            outline: none;
            position: absolute; // 保证在同一行；
        }
    }
</style>

