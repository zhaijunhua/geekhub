<template>
    <div class="mainArticle">
        <div class="myArticle">
            <whole-article/>
        </div>
        <div class="myComment">
            <comment/>
        </div>
    </div>
</template>
<script>
import wholeArticle from './wholeArticle/index.vue';
import comment from './comment/index.vue';
export default {
    name: 'mainContent',
    components: {
        'whole-article': wholeArticle,
        'comment': comment
    }
};
</script>
<style lang="scss" scoped>
.mainArticle{
    flex: 1;
    margin-left: 22px;
    background: #ffffff;
    height: auto;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
    margin-bottom: 50px;
    border-radius: 0.2em;
    .myArticle{
        position: relative;
    }
    .myComment{
        position: relative;
        padding-top: 20px;
    }
}
</style>
