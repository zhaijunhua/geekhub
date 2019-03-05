<template>
    <div id="blogs">
            <div class="blog" v-for='item in lists' :key='lists.id'>
                <div class="title">{{item.title}}</div>
                <div class="con">{{item.con}}</div>
                <div class="notes">
                    <div class="left">
                        <span class="author">
                            <span class="writer"></span>
                            <span class="username">{{item.username}}</span>
                        </span>
                        <span class="createTime">{{item.createTime}}</span>
                    </div>
                    <div class="right">
                        <div class="pageviews">
                            <span>{{item.pageviews}}</span>
                            <span class="read"></span>
                        </div>
                        <div class="comments">
                            <span>{{item.comments}}</span>
                            <span class="commentsLogo"></span>
                        </div>
                        <div class="stars">
                            <span>{{item.stars}}</span>
                            <span class="like"></span>
                        </div>
                    </div>
                </div>
        </div>                 
    </div>
</template>

<script>
export default {
    name: 'blogs',
    data: () => ({
        data: [],
        busy: false,
        lists: [
            {
                id: '1',
                title: '文章题目',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://coding.net/static/project_icon/scenery-5.png',
                createTime: '2018-10-01',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            },
            {
                id: '2',
                title: '文章题目',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://coding.net/static/project_icon/scenery-5.png',
                createTime: '2018-10-01',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            },
            {
                id: '3',
                title: '文章题目',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://coding.net/static/project_icon/scenery-5.png',
                createTime: '2018-10-01',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            },
            {
                id: '4',
                title: '文章题目',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://coding.net/static/project_icon/scenery-5.png',
                createTime: '2018-10-01',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            }
        ]
    })
};
</script>

<style lang="scss" scoped>
@import "../../../../../dep/iconfont/iconfont.css";
#blogs{
    color:#929eaa;
    .blog{
        margin: 20px 16px;
        padding: 10px 61px 12px 38px;
        box-shadow: 0 0 6px #ccc;
        .title{
            font-size:20px;
        }
        .con{
            font-size:14px;
            line-height: 18px;
            padding: 18px 0;
        }
        .notes{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            line-height: 24px;
            .left{
                display: flex;
                align-items: cneter;
            }
            .right{
                display: flex;
                align-items: center;
                div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-left: 8px;
                    span{
                        display: block;
                        margin-left: 8px;
                    }
                    span:nth-child(2){
                        width: 20px;
                        height: 20px;
                    }
                }
            }
            .author{
                display: flex;
                justify-content: space-between;
                align-items: center;
                color:rgb(27, 70, 113);
                .username{
                    margin: 0 5px;
                }
            }
            .writer{
                width: 15px;
                height: 20px;
                background: url('../../../../../resources/images/personalCenter/writer.png') no-repeat;
            }
            .read{
                background: url('../../../../../resources/images/personalCenter/read.png') no-repeat;
            }
            .commentsLogo{
                background: url('../../../../../resources/images/personalCenter/comment.png') no-repeat;
            }
            .like{
                background: url('../../../../../resources/images/personalCenter/like.png') no-repeat;
            }
        }
    }
}

</style>