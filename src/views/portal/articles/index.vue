<template>
    <div id="articles">
        <div class="search">
            <input type="text" name="" class="iconfont icon-sousuo" v-model='searchText' :placeholder="icon">
            <input type="submit" name="" value="搜索">
        </div>

        <div class="search-result">
            <p style="text-align: left;" v-if="searchText">the result of <span style="color:red" id="searchText" >{{searchText}}</span> is:({{result.length}})</p>
            <ol>
                <li v-for="item in result" v-bind:key="item.id" @click='toArticle(item.id, item.user_id)'>
                    <span v-html='item.title' class="search_title"></span>
                    <span v-html='item.con' class="search_con"></span>
                </li>
            </ol>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="40">
             <div class="article" v-for='item in articleLists' v-bind:key='item.blogs_id'>
                 <div @click='toArticle(item.blogs_id, item.blogs_user_id)'>
                    <div class="title">{{item.blogs_title}}</div>
                    <div class="con">{{item.blogs_content}}</div>
                    <div class="notes">
                        <div class="left">
                            <span class="author" @click.stop='toUserInfo'>
                                <img :src="item.user_icon_url" class="authorlogo">
                                <span class="username">{{item.user_name}}</span>
                            </span>
                            <span class="createTime">{{item.blogs_create_time}}</span>
                        </div>
                        <div class="right">
                            <div class="pageviews">
                                <span>{{item.blogs_read_num}}</span>
                                <span class="views"></span>
                            </div>
                            <div class="comments">
                                <span>{{item.blogs_comment_num}}</span>
                                <span class="commentsLogo"></span>
                            </div>
                            <div class="stars">
                                <span>{{item.blogs_islike_num}}</span>
                                <span class="starts"></span>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>             
        </div>
        <!-- <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
         <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
          <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
           <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
         <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
          <div class="test" style="width:'300px';height:'400px';background:'red'"></div>
           <div class="test" style="width:'300px';height:'400px';background:'red'"></div> -->
    </div>
</template>

<script>
// import user from '../../../store/modules/signIn/index.js';
export default {
    name: 'articles',
    data: () => ({
        icon: '搜索本站\ue62c',
        data: [],
        busy: false,
        articleLists: [],
        searchText: '',
        timer: null,
        result: [],
        page: 1,
        sortType: 1
    }),
    mounted() {
        this.getNormal();
        // console.log(user);
    },
    methods: {
        handleParams: function(params, url) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
            return url;
        },
        toArticle: function(articleId, userId) {
            this.$router.push({
                path: '/article',
                query: {
                    articleId: articleId,
                    userId: userId
                }
            });
        },
        loadMore: function() {
            this.busy = true;
            setTimeout(() => {
                this.page++;
                this.getNormal();
            }, 1000);
        },
        toUserInfo: function(e) {
            e.preventDefault();
            this.$router.push('./otherCenter');
        },
        getNormal: function() {
            var params = {
                userId: 1,
                page: this.page,
                sortType: this.sortType
            };
            var url = 'http://120.79.94.90:8080/page/blogs/getBlogs';
            var paramsUrl = this.handleParams(params, url);
            var that = this;
            fetch(paramsUrl, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.data.result.length === 0) {
                        that.busy = true;
                    } else {
                        that.busy = false;
                    }
                    that.articleLists = that.articleLists.concat(data.data.result);
                })
                .catch((error) => {
                    throw error;
                });
        },
        generReg(val) {
            return new RegExp(`(.*)(${val.split('').join(')(.*)(')})(.*)`, 'i');
        }
    },
    watch: {
        searchText(val) {
            var searchbox = document.querySelector('.search-result');
            searchbox.style.display = 'block';
            if (val) {
                clearTimeout(this.timer);
                this.result = [];
                this.timer = setTimeout(() => {
                    Object.keys(this.articleLists).filter(x => {
                        let bool = this.generReg(val).test(this.articleLists[x].blogs_content);
                        let boolch = this.generReg(val).test(this.articleLists[x].blogs_title);
                        if (bool || boolch) {
                            this.result.push({con: this.articleLists[x].blogs_content, id: this.articleLists[x].blogs_id, title: this.articleLists[x].blogs_title, user_id: this.articleLists[x].blogs_user_id});
                        }
                        return bool || boolch;
                    });
                }, 200);
            }
        }
    }
};
</script>


<style lang="scss" scoped>
@import "../../../dep/download/iconfont.css";
.test{
    width: 200px;
    height: 200px;
    background: #16aeec;
    margin: 5px;
}
i{
    display: inline-block;
    color: red;
    padding: 0 4px;
}
.search_title>>> label{
    color: red;
}
.search-result span >>> label{
    display: inline-block;
    color: red;
    padding: 0 4px;
}
#articles{
    position:relative;
    // padding-left: 120px;
    input[type='button']:hover{
        cursor: pointer;
    }
    input[type='submit']:hover{
        cursor: pointer;
    }
    color:#929eaa;
    .search{
        position: relative;
        display:flex;
        margin: 0 16px;
        font-size:16px;
        color: #c0c1c1;
        box-shadow: 0 0 6px #ccc;
        input[type='text']{
            width: 100%;    
            padding: 0 10px;
            border: none;   
            color: #c0c1c1; 
            outline: none;
            border: none;
        }
        // 给placeholder设置样式
        input[type='text']::-webkit-input-placeholder{
            text-align: center; 
            color:#c0c1c1;
        }
        input[type='submit']{
            height: 50px;
            line-height:50px;
            color:#fff;
            font-size: 16px;
            padding: 0 25px;
            background: -webkit-gradient(linear, 0 0,0 100%,from(#16aeec),to(#6ec2f1));
            background: -moz-linear-gradient(top, #16aeec,#6ec2f1);
            border: none;
            outline:none;
        }
    }
    .search-result{
        width: 95%;
        display:none;
        margin:0px 16px;;
        text-align: center;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0 0 17px #ccc;
        p{
            line-height: 32px;
            padding: 5px 20px;
        }
        ol{
            margin: 0;
            padding: 0;
            text-align: left;
            list-style: none;
            li{
                display: flex;
                line-height: 28px;
                padding:8px 40px;
                box-sizing: border-box;
                span{
                    display: block;
                    padding: 0 10px;
                }
                &:hover{
                    cursor: pointer;
                    background: #f7f7f7;
                }
                .search_title{
                    font-size: 13px;
                }
                .search_con{
                    font-size: 11px;
                    width: 300px;
                    text-overflow: ellipsis;
                   -o-text-overflow: ellipsis;
                   -webkit-text-overflow: ellipsis;
                   -moz-text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
    .article{
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
                color:#194772;
                .authorlogo{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    border-radius: 11px;
                }
                .username{
                    margin: 0 5px;
                }
            }
            .views{
                background: url('../../../resources/images/common/view.png') no-repeat;
            }
            .commentsLogo{
                background: url('../../../resources/images/common/comment.png') no-repeat;
            }
            .starts{
                background: url('../../../resources/images/common/like.png') no-repeat;
            }
        }
    }
    .article:hover{
        cursor: pointer;
    }
}
#red{
    color: red;
}

</style>