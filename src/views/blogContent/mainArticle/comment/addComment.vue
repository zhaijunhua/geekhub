<template>
    <div class="discuss">
        <h2>评论</h2>
        <div class="input-word">
            <div class="portrait">
                <img src="~images/article/portrait.png" alt="用户名"/>
                <p class="name"> 这是一个很长的用户名</p>
            </div>
            <div class="text">
                <p>A</p>
                <el-form label-width="80px" v-model="form">        
                        <el-input class="text"
                        type="textarea" 
                        v-model="form.inputComment" 
                        :autosize="{minRows:4,maxRows:5}"
                        placeholder="发表我的评论"></el-input>
                        <el-button @click="addComment" size="medium">发表评论</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'disciss',
    data() {
        return {
            form: {
                inputComment: ''
            },
            commentUserId: ''
        };
    },
    mounted() {
        this.getUser();
    },
    computed: {
        ...mapGetters({idMessage: 'idMessage'})
    },
    watch: {
        idMessage() {
            this.blogId = this.idMessage.blogId;
        }
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
                    console.log('json' + JSON.stringify(response));
                    this.commentUserId = response.data.userId;
                    // console.log('当前用户id' + this.commentUserId);
                });
        },
        addComment() {
            let url = 'http://47.101.200.155:9999/page/comment/addComment';
            if (this.inputComment === '') {
                alert('评论内容不能为空');
            }
            let data = {
                commentType: 1,
                themeId: 1, // this.blogId
                commentContent: this.form.inputComment,
                commentStatus: 0,
                commentUserId: this.commentUserId, // this.user当前用户
                commentReplyCommentId: '',
                commentReplyUserId: ''
            };
            // console.log(data);
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
                }
            })
                .then((response) => response.text())
                .then((response) => {
                    console.log('json' + JSON.stringify(response));
                })
                .catch(error => console.error('Error:', error));
        }
    }
};
</script>
<style lang="scss" scoped>
.discuss{
    position: relative;
    top: 0;
    width: 88%;
    margin: 10px auto;
    img{
        border-radius: 50%;
        border: 1px solid #dadde0;
        position: relative;
        top: 5px;
        left: 28px;
    }
    .input-word{
        width: 100%;
        border-top: 1px solid #bfbfc0;
        display: flex;
        flex-flow: row;
        position: relative;
        padding-top:15px;
        .portrait{
            width: 120px;
            .name{  
                position: relative;
                left: 10px;
                top: 2px;
                text-align: center;
                width: 90px;
                color: #406c91;
                font-size: 14px;
            }
        }
        .text{
            flex: 1;
            
            p{
                background-color: #b4dbff;
                color: #637280;
                font-size: 14px;
                font-family: '微软雅黑';
                line-height: 28px;
                border-radius: 0.2em 0.2em 0 0;
                border: 1px solid #99ddfc;
            }
            .el-textarea{
                margin-left: 0px;
                border-radius: 0 0 4px 4px;
                min-height: 89px;
                .text>>>.el-textarea__inner{
                    border-color: #99ddfc;
                    border-radius: 0 0 4px 4px!important;
                    font-size: 30px!important;
                }
                .el-textarea__inner:hover{
                    border-color: #99ddfc!important;
                }
            }
            .el-button{
                border: 1px solid #99ddfc;
                color: #406c91;
                margin-right: 0px;
                position: relative;
                top: 13px;
                left: 512px;
            }
            
        }
    }
}
</style>