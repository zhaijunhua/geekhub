<template>
    <div>
        <h3>修改密码</h3>
        <form class="change">
            <el-row>
                <el-col :span="8">输入新邮箱：</el-col>
                <el-col :span="16"><input type="password"></el-col>
            </el-row> 
            <el-row>
                <el-col :span="8">输入验证码：</el-col>
                <el-col :span="8"><input type="password"></el-col>
                <el-col :span="8"><el-button size="mini">点击获取验证码</el-button></el-col>
            </el-row>
            <el-button size="mini" class="sure">确定</el-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function() {
            return {
                newEmail: ''
            };
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
.change{
    text-align: center;
    margin: 100px 100px;
}
.change .el-row{
    margin: 10px 0;
    color: rgb(39, 92, 136)
}
.change .el-row input{
    background: rgb(220, 220, 220);
    padding: 0;
    border: 0;
    height: 25px;
    width: 100%;
}
.change .el-button{
    border-color: rgb(154, 220, 252);
}
.sure{
    margin-top: 20px;
}
</style>