<template>
    <div class="draft-box">
            <h1>我的草稿</h1>
        <hr>
        <draftContent />
    </div>
</template>
<script>
import draftContent from './draftContent/index.vue';
export default {
    name: '',
    data: () => ({}),
    components: {
        draftContent
    }
};
</script>
<style lang="scss" scoped>
    h1 {
        color: rgb(82, 140, 204)
    }
    .draft-box {
        width: 80%;
        max-width: 970px;
        margin:75px auto;
        padding: 20px;
        -webkit-box-shadow:0 0 10px grey;
        -moz-box-shadow:0 0 10px grey;
        box-shadow:0 0 10px grey;
    }
</style>

