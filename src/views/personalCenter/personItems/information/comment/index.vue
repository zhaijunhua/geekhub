<template>
    <div id="comments">
        <div class="comment" v-for='item in lists'>
            <div class="userlogo">
                <img :src="item.userlogo">
            </div>
            <div class="comment-right">
                <div class="hint">
                    <p class="left">
                        <span>{{item.username}}</span>
                        <span class="normal">评论了我的文章</span>
                        <span>{{item.title}}</span>
                    </p>
                    <span class="reply">回复</span>
                </div>
                <div class="content">{{item.con}}</div>
                <div class="notes">
                    <span class="createTime">{{item.createTime}}</span>   
                    <span class="date">{{item.date}}</span>   
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

#comments{
    input[type='button']:hover{
        cursor: pointer;
    }
    input[type='submit']:hover{
        cursor: pointer;
    }
    color:#929eaa;

    .comment{
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        box-shadow: 0 0 6px #ccc;
        margin: 27px auto;
        padding: 0 10px;
        .userlogo{
            width: 120px;
            img{
                width: 66px;
                height: 66px;
                border: 1px solid #eee;
                padding: 24px;
                display: block;
                box-sizing: border-box;
                border-radius: 33px;
                margin: 12px 29px 25px 20px;
            }
        }
        .comment-right{
            padding-top: 13px;
            .hint{
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                color: #5383b2;
                font-weight: bold;
                line-height: 24px;
                .normal{
                    font-weight: normal;
                }
                .reply{
                    font-size: 14px;
                    padding:0 10px;
                }
            }
            div.content{
                padding-right: 50px;
                line-height: 22px;
                font-size: 11px;
                color: #888888;
            }
            .notes{
                height: 25px;
                line-height: 22px;
                text-align: right;
                color:#8c97a1;
                font-size:12px;
                padding-right: 40px;
                span{
                    padding-left: 10px;
                }
            }
        }
    }
}

</style>

<script>
// import $ from 'jquery';
export default {
    name: 'comments',
    data: () => ({
        lists: [
            {
                title: '文章内容',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                date: '18:44:33',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            },
            {
                title: '文章内容',
                con: '内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容',
                username: '我是作者',
                userlogo: 'https://b-ssl.duitang.com/uploads/item/201604/06/20160406130800_4miua.jpeg',
                createTime: '2018-10-01',
                pageviews: 10001,
                comments: 2100,
                stars: 10086
            }
        ]
    }),
    mounted() {},
    methods: {}
};
</script>