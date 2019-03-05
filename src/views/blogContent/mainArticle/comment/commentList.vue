<template>
    <div class="comment-list">
        <ul>
            <li>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
                <template v-for="(items,commentId,index) in comments">
                <div class="content"  
                :key="items.commentId" 
                @mouseover="hover(commentId,index)" 
                @mouseout="showUpdate = -1">
                    <div class="portrait">
                        <img src="items.userIconUrl" alt="用户头像"/>
                        <p class="name">{{items.userNickname}}</p>

                    </div>
                    <div class="commentWord">
                        <p>{{items.commentContent}}</p>
                        <p class="rescomment" 
                            v-for="replyContent in items.childComments" 
                            :key="replyContent.commentId"
                            v-if="items.commentId == replyContent.commentBelongCommentId" @click="replyothers(commentId,replyContent.commentUserId,replyContent.commentBelongCommentId)">
                            <span>{{replyContent.replyUserNickname}} 回复 {{replyContent.userNickname}}：</span>
                            <span>{{replyContent.commentContent}}</span>
                        </p>
                        <div class="replyBox" v-show="cindex==commentId&&isShow">
                            <el-form>
                                    <p>你回复:{{items.userNickname}}</p>        
                                    <el-input class="replyInput"
                                    type="textarea" 
                                    v-model="inputreply" 
                                    :autosize="{minRows:1,maxRows:2}"
                                    placeholder="发表我的评论"></el-input>
                                <el-button class="submit" type="primary" size="mini" @click="cancelReply">取消</el-button>
                            </el-form>
                        </div>
                    </div>
                    <div class="reply" >
                        <el-button type="primary"  size="mini"  @click="replyIt(commentId,items.commentUserId)">&nbsp;回复</el-button>
                        <el-button type="primary"  
                        size="mini" 
                        @click="reportComment(commentId)" 
                        class="willReport">&nbsp;举报</el-button>
                    </div>
                    <span class="reported" v-show="cindex==commentId&&isReported">已举报</span>
                </div>
                </template>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.comment-list{
    width: 88%;
    position: relative;
    top:40px;
    margin: 0 auto;
    height: 100%;
    ul{
        position: relative;
        margin-bottom: 100px;
        li{
            position: relative;
            padding-top: 20px;
            .content{
                position: relative;
                display: flex;
                height: 100%;
                .portrait{
                    width: 115px;
                    height: 120px;
                    position: relative;
                    top: 5px;
                    img{
                        border-radius: 50%;
                        border: 1px solid #dadde0;
                        position: relative;
                        left: 28px;
                    }
                    p{
                        width: 58px;
                        text-align: center;
                        position: relative;
                        left: 25px;
                        color: #406c91;
                        font-size: 12px;
                    }
                }
                .commentWord{
                    flex: 1;
                    color: #b3b3b3;
                    position: relative;
                    padding-top: 16px;
                    border-top: 1px solid #dedede;
                    p{
                        margin-left: 30px;
                        span{
                            padding-left: 20px;
                        color: #406c91;
                        font-size: 12px;
                    }
                    }
                    .replyBox{
                        position: relative;
                        margin-top: 20px;
                        .el-form{
                            position: relative;
                            .el-textarea{
                                width: 300px;
                            }
                            .el-button{
                                width: 45px;
                                text-align: center;
                            }
                        }
                    }
                }
                .reply{
                    position: relative;
                    width: 160px;
                    padding-top: 8px;
                    border-top: 1px solid #dedede;
                    .el-button{
                        width: 64px;
                        text-align: center;
                        letter-spacing: 2px;
                        display: inline-block;
                    }
                }
            }
        }
    }
    
}

</style>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'commentList',
    data() {
        return {
            inputreply: '', // 回复评论
            showUpdate: -1, // 控制按钮显示隐藏
            isShow: false,
            replyShow: true,
            cindex: -1,
            page: 0, // 最初加载的评论
            busy: false,
            comments: [], // 评论内容
            isReported: false,
            commentType: 1, // 设置该评论的类型为子评论
            commentId: '',
            blogId: '',
            commentUserId: ''
        };
    },
    created() {
        // this.commentData = this.commentData.comment.data;
        this.getUser();
    },
    computed: {
        ...mapGetters({idMessage: 'idMessage'})
    },
    watch: {
        idMessage() {
            this.logId = this.idMessage.blogId;
            console.log('jdksf  ' + this.blogId);
        }
    },
    mounted() {
    },
    methods: {
        getUser() {
            fetch('http://47.101.200.155:9999/page/user/getUser', {
                method: 'POST',
                cache: 'default',
                mode: 'cors',
                credentials: 'include'
            })
                .then((response) => response.json())
                .then((response) => {
                    this.commentUserId = response.data.userId;
                });
        },
        hover(index) {
            this.showUpdate = index;
        },
        // 回复消息
        replyIt(commentId, commentUserId) { // 点击回复弹出回复框，点击取消回复框消失
            this.isShow = !this.isShow;
            this.cindex = commentId;
            if (this.isShow) {
                this.cindex = commentId;
            } else {
                let commentReplyCommentId = this.comments[commentId].commentId;
                let commentReplyUserId = this.comments[commentId].commentUserId;
                console.log(this.comments[commentId].commentId + 'id' + this.comments[commentId].commentUserId);
                let url = 'http://47.101.200.155:9999/page/comment/addComment';
                if (this.inputreply === '') {
                    alert('评论内容不能为空');
                } else {
                    let data = {
                        commentUserId: this.commentUserId, // this.user当前用户
                        commentType: 1,
                        themeId: 1, // this.blogId
                        commentContent: this.inputreply,
                        commentStatus: 1,
                        commentBelongCommentId: commentReplyCommentId,
                        commentReplyUserId: commentReplyUserId
                    };
                    console.log(data);
                    if (data) {
                        let datasArray = [];
                        Object.keys(data).forEach(key => datasArray.push(key + '=' + data[key]));
                        if (url.search(/\?/) === -1) {
                            url += '?' + datasArray.join('&');
                        } else {
                            url += '&' + datasArray.join('&');
                        }
                    }
                    fetch(url, {
                        method: 'POST',
                        cache: 'default',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify(data)
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            console.log('json' + JSON.stringify(response));
                            this.loadMore();
                        })
                        .catch(error => console.error('Error:', error));
                }
                this.inputreply = '';
                // this.commentlist();
            }
        },
        // 取消回复
        cancelReply() {
            this.isShow = !this.isShow;
            this.inputreply = '';
            this.replyShow = !this.replyShow;
        },
        replyothers(commentId, replyUserId, fatherCommentId) {
            // 回复不是父评论的评论（子评论）
            // let commentReplyCommentId = this.comments[commentId].commentId;
            console.log('当前用户id' + this.commentUserId);
            console.log('最外层父评论id' + commentId);
            console.log('所回复的人的id' + replyUserId);
            console.log('父评论id' + fatherCommentId);
            this.isShow = !this.isShow;
            this.cindex = commentId;
            if (this.isShow) {
                this.cindex = commentId;
            } else {
                let url = 'http://47.101.200.155:9999/page/comment/addComment';
                if (this.inputreply === '') {
                    alert('评论内容不能为空');
                } else {
                    let data = {
                        commentUserId: this.commentUserId, // this.user当前用户
                        commentType: 1,
                        themeId: 1, // this.blogId
                        commentContent: this.inputreply,
                        commentStatus: 1,
                        commentBelongCommentId: fatherCommentId,
                        commentReplyUserId: replyUserId
                    };
                    console.log(data);
                    if (data) {
                        let datasArray = [];
                        Object.keys(data).forEach(key => datasArray.push(key + '=' + data[key]));
                        if (url.search(/\?/) === -1) {
                            url += '?' + datasArray.join('&');
                        } else {
                            url += '&' + datasArray.join('&');
                        }
                    }
                    fetch(url, {
                        method: 'POST',
                        cache: 'default',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: JSON.stringify(data)
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            console.log('json' + JSON.stringify(response));
                            this.loadMore();
                        })
                        .catch(error => console.error('Error:', error));
                }
                this.inputreply = '';
                // this.commentlist();
            }
        },
        // 获取评论信息
        commentlist(url, params) {
            if (params) {
                let paramsArray = [];
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&');
                } else {
                    url += '&' + paramsArray.join('&');
                }
            }
            fetch(url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.code === 100001) {
                        console.log('json' + JSON.stringify(json.data));
                        this.comments = this.comments.concat(json.data); // 连接
                        if (json.data.length === 0) { // 当但会数据小于10，最后一页，停止获取,此插件不能兼容移动端（缺）
                            this.busy = true;
                        } else {
                            this.busy = false;
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getData(flag) {
            let url = 'http://120.79.94.90:8080/page/comment/selectComment';
            this.commentlist(url, {page: this.page, commentType: 1, themeId: 1});
        },
        // 当属性滚动的时候
        loadMore() {
            console.log('loadmore');
            this.busy = true; // 将无限滚动给禁用
            setTimeout(() => { // 发送请求有时间间隔第一个滚动时间结束后才发送第二个请求
                this.page++;
                this.getData(true);
                console.log('hello');
            }, 500);
        },
        // 举报评论
        reportComment(commentId) {
            this.isReported = !this.isReported;
            this.cindex = commentId;
            var url = 'http://47.107.80.17:8080/page/report/addReport';
            var data = {
                reportUserId: 12,
                reportType: 1,
                reportThemeId: this.comments[commentId].commentId
            };
            if (data) {
                let reportArray = [];
                Object.keys(data).forEach(key => reportArray.push(key + '=' + data[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + reportArray.join('&');
                } else {
                    url += '&' + reportArray.join('&');
                }
            }
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            })
                .then((response) => response.text())
                .then((response) => {
                    console.log('responseData', response);
                    console.log('hahah');
                })
                .catch((error) => {
                    console.error('error', error);
                    console.log(error);
                });
        }
    }
};
</script>