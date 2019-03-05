<template>
    <div class="rank">
        <span v-for="item in list" :key="item.id">{{ item.content }}</span>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [{
                id: 1,
                content: '按时间排序'
            }, {
                id: 2,
                content: '按浏览量排序'
            }, {
                id: 3,
                content: '按点赞数排序'
            }]
        };
    }
};
</script>
<style lang="scss" scoped>
    .rank {
        color: #5383b2;
        position: relative;
        top: 60px;
    }
    span {
        margin-left:30px;
    }
</style>
