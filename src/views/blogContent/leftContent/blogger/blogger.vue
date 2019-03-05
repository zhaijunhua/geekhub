<template>
    <div class="bloggerMessage">
        <el-card class="clearfix">
            <div class="message">
                <div @click="goTheCenter">
                    <img class="portrait" src="userIconUrl" alt="加载失败"/>
                </div>
                <p class="userName" @click="goTheCenter">{{bloggerMessage.userNickname}}</p>
                <span>&bull;{{bloggerMessage.userProfessions}}</span>
            </div>
            <el-button class="attention" @click="followIt" v-text="followIcon" plain>关注</el-button>
            <div class="concern">
                <ul>
                    <li class="follwer"><i class="iconfont icon-friendaddfill-copy"></i>关注: {{bloggerMessage.userAttentionNum}}</li>
                    <li class="fans"><i class="iconfont icon-peoplefill-copy"></i>粉丝: {{bloggerMessage.userFansNum}}</li>
                </ul>
            </div>
        </el-card>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../../dep/articleicon/iconfont.css";
.bloggerMessage{
    background-color: #ffffff;
    text-align: center;
    .message{
        position: relative;
        margin: 0px auto;
        padding-top: 10px;
        img{
            width: 94px;
            height: 94px;;
            border-radius: 50%;
            border: 1px solid #dadde0;
        }
        .userName{
            padding-top: 8px;
            color: #194772;
            font-size: 16px;
            font-family: '微软雅黑';
            margin: 0 auto;
            width: 80%;
            text-align: center;
        }
        span{
            color: #194772;
            font-size: 12px;

        }
    }
    .attention{
        width: 94px;
        height: 36px;
        border: 2px solid #33b1dd;
        letter-spacing: 6px;
        color: #194772;
        font-size: 14px;
        line-height: 14px;
        vertical-align: middle;
        text-align: center;
        position: relative;
        margin-top: 12px;
    }
    .concern{
        position: relative;
        top: 10px;
        margin-bottom: -10px;
        ul{
            li{ 
                line-height: 50px;
                font-size: 12px;
                color: #61707e;
                display: inline-block;
            }
            .fans{
                padding-left: 10px;
            }
        }
    }
    
}
    
</style>
<script>
import {mapState, mapActions, mapMutations, mapGetters} from 'vuex';
export default {
    name: 'blogger',
    data() {
        return {
            bloggerMessage: [],
            followIcon: '关注',
            blogId: '',
            userId: ''
        };
    },
    computed: {
        ...mapState('follow', {
            isFollow: state => state.isFollow,
            fansNumber: state => state.fansNumber
        }),
        ...mapGetters({idMessage: 'idMessage'})
    },
    mounted() {
        // this.message();
        // this.getUser();
        this.blogOwner();
    },
    watch: {
        // 获取用户ID和文章id;
        idMessage() {
            this.blogId = this.idMessage.blogId;
            this.userId = this.idMessage.userId;
        }
    },
    methods: {
        goTheCenter: function() {
            this.$router.push({
                path: '/otherCenter'
                // query: {
                //    userId: 1
                // }
            });
        },
        // getUser() {
        //     fetch('http://47.101.200.155:9999/user/getUser', {
        //         method: 'post',
        //         cache: 'default',
        //         mode: 'cors',
        //         credentials: 'include'
        //     })
        //         .then((response) => response.json())
        //         .then((response) => {
        //             console.log('json' + JSON.stringify(response));
        //             this.commentUserId = response.data.userId;
        //             console.log('当前用户id' + this.commentUserId);
        //         });
        // },
        ...mapMutations('follow', ['SET_FOLLOW', 'CANCEL-FOLLOW']),
        ...mapActions('follow', ['setFollow', 'cancelFollow']),
        followIt: function() {
            if (this.isFollow === 0) {
                this.setFollow();
                this.followIcon = '已关注';
                console.log('fansNumber' + this.fansNumber);
                this.isReported = !this.isReported;
                var url = 'http://120.79.94.90:8080/page/follow/addFollow';
                var data = {
                    followerId: 1,
                    followUserId: 1
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
                        // console.log('responseData', response);
                        // console.log('hahah');
                    })
                    .catch((error) => {
                        console.error('error', error);
                        console.log(error);
                    });
            } else {
                this.cancelFollow();
                this.followIcon = '关注';
                // console.log('fansNumber' + this.fansNumber);
            }
        },
        blogOwner: function() {
            let url = 'http://47.101.200.155:9999/page/user/getOneUser';
            let param = {
                userId: 1
            };
            console.log('1111111');
            if (param) {
                let paramArray = [];
                Object.keys(param).forEach(key => paramArray.push(key + '=' + param[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + paramArray.join('&');
                } else {
                    url += '&' + paramArray.join('&');
                }
            }
            fetch(url, {
                methods: 'get'
            })
                .then((response) => response.json())
                .then((response) => {
                    if (response.code === 100001) {
                        this.bloggerMessage = response.data;
                        // console.log('用户信息' + JSON.stringify(this.bloggerMessage));
                    }
                })
                .catch((error) => {
                    console.log('error' + error);
                });
        }

    }
};
</script>