<template>
    <div>
        <h3>权限申请</h3>
        <div class="table">
            <el-row class="tableNav">
                <el-col :span="6"><span>权限</span></el-col>
                <el-col :span="12" class="middle"><span>说明</span></el-col>
                <el-col :span="6"><span>备注</span></el-col>
            </el-row>
            <el-row class="tablebody">
                <el-col :span="6"><span>{{tableData[0].jurisdiction}}</span></el-col>
                <el-col :span="12" class="middle"><span>{{tableData[0].explain}}</span></el-col>
                <el-col :span="6"><span><li class="el-icon-check"></li></span></el-col>   
            </el-row>
            <el-row class="tablebody">
                <el-col :span="6"><span>{{tableData[1].jurisdiction}}</span></el-col>
                <el-col :span="12" class="middle"><span>{{tableData[1].explain}}</span></el-col>
                <el-col :span="6"><span><li class="el-icon-check"></li></span></el-col>
            </el-row>
            <el-row class="tablebody">
                <el-col :span="6"><span>{{tableData[2].jurisdiction}}</span></el-col>
                <el-col :span="12" class="middle"><span>{{tableData[2].explain}}</span></el-col>
                <el-col :span="6"><span><li class="el-icon-check"></li></span></el-col>
            </el-row>
            <div class="explain">
            <h6>说明</h6>
            获取内部权限后，可一次获取以上所有普通权限，并且可以浏览下载内部资源，内部权限仅对Geet工作室内部人员所有
            </div>
        </div>
        <div class="container">
            <el-input class="yard" placeholder="输入邀请码，获取内部权限" v-model="input" size="small" clearable></el-input>
            <el-button class="btn" size="small">submit</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function() {
            return {
                tableData: [
                    {
                        jurisdiction: '游客',
                        explain: '1、公共文章阅读；2、文章点赞功能'
                    }, {
                        jurisdiction: '普通用户',
                        explain: '1、登陆注册权限；2、公开资源下载；3、公开文章评论'
                    }, {
                        jurisdiction: '内部人员',
                        explain: '1、文章发布；2、资源上传'
                    }
                ],
                remark1: true,
                input: ''
            };
        },
        methods: {
            tableNav: function() {
                return 'background-color: blue';
            }
        }
    };
</script>

<style scoped>
    h3{
        color: rgb(65, 139, 212);
        margin: 13px 0 0 0;
        border-bottom: 1px solid rgb(191, 191, 191);
        padding-bottom: 15px;
    }
    .table{
        margin:20px 20px 0 20px
    }
    .tableNav{
        background: rgb(181, 219, 255);
        color:white;
        border-left:1px solid rgb(149, 173, 221);
        border-right:1px solid rgb(149, 173, 221);
        padding: 10px 0;
    }
    .tablebody{
        border-left: 1px solid rgb(149, 173, 221);
        border-right: 1px solid rgb(149, 173, 221);
        border-bottom: 1px solid rgb(149, 173, 221)
    } 
    .tableNav,
    .tablebody{
        text-align: center;
    }
    .tablebody .el-col{
        padding: 10px 0;
    }
    .tablebody .middle{
        border-left: 1px solid rgb(149, 173, 221);
        border-right: 1px solid rgb(149, 173, 221); 
    }
    .explain{
        color: rgb(136, 161, 181);
        font-size: 10px;
        padding: 10px 3px;
    }
    .explain h6{
        color: rgb(80, 147, 215);
        margin: 0
    }
    .yard{
        width: 200px;
    }
    .container{
        margin: 50px 100px
    }
    /* .btn{
        border-color: blue
    } */
</style>