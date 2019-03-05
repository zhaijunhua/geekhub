<template>
<div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
    <div class="blogBox" v-for = 'item of list' :key="item.list">
        <div class="header">
            <h2>{{ item.blogTitle }}</h2>
            <div class="edit">{{ item.edit }}</div>
        </div>
        <div class="blogContent">
            <span>{{ item.blogContent }}</span>
        </div>
        <div class="details">
            <div class="left">
                <span>{{ item.author }}</span>
            </div>
            <div class="right">
                <span>{{ item.time }}</span>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
var count = 0;
export default {
    data() {
        return {
            list: [{
                id: '1',
                blogTitle: '还未编辑标题',
                blogContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容..........',
                author: '我是作者',
                time: '2018/01/01',
                edit: '继续编辑'
            }, {
                id: '2',
                blogTitle: '还未编辑标题',
                blogContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容........',
                author: '我是作者',
                time: '2018/01/01'
            }, {
                id: '3',
                blogTitle: '还未编辑标题',
                blogContent: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容........',
                author: '我是作者',
                time: '2018/01/01'
            }],
            busy: false
        };
    },
    methods: {
        loadMore() {
            this.busy = true;
            setTimeout(() => {
                for (var i = 0, j = 3; i < j; i++) {
                    this.list.push({name: count++});
                }
                this.busy = false;
            }, 1000);
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../../dep/download/iconfont.css";
    h2{
        color: rgb(148, 158, 169);
    }
    .left {
        color: rgb(36, 71, 111)
    }
    .right {
        color: rgb(148, 158, 169)
    }
    .blogContent {
        color: rgb(162, 173, 184)
    }
    .blogBox {
        padding: 10px 25px;
        margin-bottom: 25px;
        -webkit-box-shadow:0 0 10px grey;
        -moz-box-shadow:0 0 10px grey;
        box-shadow:0 0 10px grey;
        .header {
            display: flex;
            justify-content: space-between;
            .edit {
                cursor: pointer;
                color: rgb(93,
                 148, 208)
            }
        }
    }
    .details {
        display: flex;
        justify-content: space-between;
    }
    span {
        margin-right: 30px;
    }
    .blogContent {
        margin-bottom: 20px;
    }
</style>