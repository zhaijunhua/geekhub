<template>
    <div id="isLogin">
        <span @click='toWriteBlog'>写博客</span>
        <span @click='toUpload'>传资源</span>
        <el-dropdown>
              <span class="el-dropdown-link">
                <img src="https://coding.net/static/project_icon/scenery-5.png">
                <i></i>
              </span>
              <el-dropdown-menu slot="dropdown" class='dropdown'>
                    <el-dropdown-item>
                        <router-link to='/personalCenter'>个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link to='/article'>我的博客</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <router-link to='/'>权限申请</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item>消息</el-dropdown-item>
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item @click.native='exitlogin'>
                        退出登录
                    </el-dropdown-item>
              </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<style lang="scss" scoped>
#isLogin{
    display: flex;
    span{
        line-height: 58px;
        padding: 0 5px;
        color: #5383b2;
        img{
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin-top: 10px;
        }
        &:hover{
            cursor: pointer;
        }
    }
    ul{
        position: relative;
        margin-top: 78px;
    }
}
.el-dropdown-menu{
    width: 10%;
    right:10%;

    .el-dropdown-menu__item{
        a{
            color: #606266;
        }
    }
}
</style>

<script>
// import registerBox from '../../register/registerBox';
// import events from '../../../../assets/eventsBus';
import events from 'src/assets/eventBus.js';
export default {
    name: 'isLogin',
    data: () => ({}),
    mounted() {
        console.log(events);
    },
    components: {
        // registerBox
    },
    methods: {
        toWriteBlog: function() {
            this.$router.push('./write');
        },
        toUpload: function() {
            // this.$router.push('./')
        },
        exitlogin: function() {
            fetch('http://47.101.200.155:9999/page/user/getUser', {
                method: 'POST',
                credentials: 'include'
            })
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    if (data.code === 100001) {
                        events.$emit('exit', 'false');
                    }
                })
                .catch((error) => {
                    throw error;
                });
        }
    }
};
</script>