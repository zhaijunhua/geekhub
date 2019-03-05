<template>
    <div class="rightBox">
        <div class="title">
            <h1>我的博客</h1>
            <rank />
        </div>
        <hr>
        <blogCatalog />
    </div>
</template>
<script>
import rank from './rank/index.vue';
import blogCatalog from './blogCatalog/index.vue';
export default {
    components: {
        rank,
        blogCatalog
    }
};
</script>
<style lang="scss" scoped>
    h1 {
        color: #194772;
    }
    .rightBox {
        height: auto;
        width: 730px;
        padding: 15px 45px;
        float: right;
        -webkit-box-shadow:0 0 10px grey;
        -moz-box-shadow:0 0 10px grey;
        box-shadow:0 0 10px grey;
    }
    .rightBox::after {
        clear: both;
    }
    .title {
        display: flex;
        justify-content: space-between;
    }
</style>


