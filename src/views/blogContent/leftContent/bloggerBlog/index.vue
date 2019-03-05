<template>
    <div class="his-article">
        <div>
            <el-tag><span>他的文章</span></el-tag>
        </div>
        <div class="list">
                    <div class="list-content" v-for="items in articleList.slice(0,4)" :key="items.id">
                            <div @click="goArticle">
                                <ul>
                                    <li><p class="title">{{items.blogName}}</p></li>
                                    <li class="iconpic">
                                        <span class="viewPage">
                                            {{items.pageview}}
                                            <span class="eyes"><i class="iconfont icon-browse_fill-copy"></i></span>
                                        </span> 
                                        <span class="like">
                                            {{items.like}}
                                            <span class="starts"><i class="iconfont icon-shoucangxuanzhong-copy"></i></span>
                                        </span>
                                    </li>
                                </ul>
                        </div>
                    </div>
        </div>
        <div class="moreArticle">
            <el-button class="more" size="mini">更多>>></el-button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'bloggerBlog',
    data() {
        return {
            articleList: [
                {blogName: '论一个人的自我修养', pageview: '100', like: '100'},
                {blogName: '论一个人的自我修养', pageview: '100', like: '100'},
                {blogName: '论一个人的自我修养,如何处理问题', pageview: '100', like: '100'},
                {blogName: '如何学习好es6,node.js', pageview: '100', like: '100'}
            ],
            userId: ''
        };
    },
    mounted() {
        // this.articles();
        this.getArticle();
    },
    computed: {
        ...mapGetters({idMessage: 'idMessage'})
    },
    watch: {
        idMessage() {
            this.userId = this.idMessage.userId;
            console.log('用户id' + this.userId);
        }
    },
    methods: {
        goArticle() {
            this.$router.push('./article');
        },
        // articles() {
        //     fetch('https://api.github.com/users')
        //         .then((response) => {
        //             return response.json();
        //         })
        //         .then((data) => {
        //             console.log(data);
        //             this.articles = data;
        //             // this.$set(this.bloggerMessage, data);
        //             // return this.bloggerMessage;
        //             console.log(this.bloggerMessage.result);
        //         })
        //         .catch(error => console.log(error));
        // }
        getArticle() {
            let url = 'http://120.79.94.90:8080/page/blogs/getBlogsNearly';
            let param = {
                userId: this.userId
            };
            if (param) {
                let id = []; // 正则连接
                Object.keys(param).forEach(key => id.push(key + '=' + param[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + id.join('&');
                } else {
                    url += '&' + id.join('&');
                }
            }
            // let PL_content = this.form.cate;
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(param)
            })
                .then((response) => response.text())
                .then((responseData) => {
                    if (responseData.code === 100001) {
                        console.log('submit success');
                    }
                    console.log(JSON.stringify(responseData));
                })
                .catch((error) => {
                    console.error('error', error);
                    console.log(error);
                });
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../../../dep/articleicon/iconfont.css";
.his-article{
    background-color: #ffffff;
    position: relative;
    top:20px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    .el-tag{
        width: 100%;
        height: 48px;
        border-radius: 0;
        background: -webkit-linear-gradient(left, #3baddd, #6bbefa); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #3baddd, #6bbefa); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #3baddd, #6bbefa); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #3baddd, #6bbefa); /* 标准的语法（必须放在最后）*/
        order: none;
        font-size: 16px;
        color: #ffffff;
        font-family: '微软雅黑';
        text-align: center;
        border-radius: 3px 3px 0 0;
        span{
            line-height: 48px;
        }

    }
    .list{
        .list-content{
            .title{
                width: 88%;;
                margin: 0 auto;
                font-size: 16px;
                color: #637280;
                font-weight: bold;
                padding-top: 12px;
                font-family: 'Microsoft YaHei';
            }
            span{
                color: #8c97a1;
                font-size: 12px;
                font-family: '微软雅黑';
                line-height: 14px;
                padding-left: 14px;
            }
            .iconpic{
                padding-top: 8px;
                .eyes{
                    padding-left: 2px;
                }
                .starts{
                    padding-left: 2px;
                }
            }
        }

    }
    .moreArticle{
        position: relative;
        width: 100%;
        padding-top:35px;
        .more{
            border: 2px solid #99ddfc;
            color: #73879f;
            font-size: 12px;
            height: 28px;
            text-align: center;
            position: relative;
            left: 128px;
            bottom: 15px;
        }
    }
}
</style>