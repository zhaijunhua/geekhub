<template>
    <div id="mainLeft">
        <div class="photo"><img src="" alt=""></div>
        <p>{{name}}</p>
        <p>博客专家</p>
        <el-row>
            <el-col :span="12"><div class="focusOn"></div> 关注:{{attention}}</el-col>
            <el-col :span="12"><div class="fans"></div> 粉丝:{{fans}}</el-col>
        </el-row>
        <el-menu :default-active="activeItem" class="el-menu-vertical-demo" router="true">
            <el-menu-item index="./person"><div class="bottom">个人中心</div></el-menu-item>
            <el-menu-item index="./myBlogs"><div class="bottom">我的博客</div></el-menu-item>
            <el-menu-item index="./myResource"><div class="bottom">我的资源</div></el-menu-item>
            <el-menu-item index="./apply"><div class="bottom">权限申请</div></el-menu-item>
            <el-menu-item index="./information"><div class="bottom">消息</div></el-menu-item>
            <el-menu-item index="./myDraft"><div class="bottom">我的草稿</div></el-menu-item>
            <el-submenu index="7" class="person7">
                <template slot="title">账户设置</template>
                <el-menu-item index="./changePassword">修改密码</el-menu-item>
                <el-menu-item index="./changeEmail">更改绑定邮箱</el-menu-item>
            </el-submenu>
        </el-menu>    
    </div>
</template>

<script>
    export default {
        name: '',
        data: function() {
            return {
                name: '这是一个长名字',
                attention: 200,
                fans: 200,
                activeItem: '1',
                show: false
            };
        }
    };
</script>

<style scoped>

#mainLeft{
    text-align: center;
}
.photo{
    width:95px;
    height:95px;
    margin: 22px auto;
    border: 1px solid rgb(241, 242, 244);
    text-align: center;
    line-height: 200px;
    font-weight: bold;
    font-size: 24px;
    background: rgb(254, 254, 254);
    border-radius: 50%;
}
.focusOn{
    background: url('../../../../resources/images/personalCenter/focusOn.png') no-repeat -10px -6px;
    width: 14px;
    height: 16px;
    margin: 0;
    display: inline-block;
}
.fans{
    background: url('../../../../resources/images/personalCenter/fans.png') no-repeat -10px -6px;
    width: 18px;
    height: 16px;
    margin: 0;
    display: inline-block;
}
.el-menu-item.is-active{
    background-color: rgb(82, 188, 240);
}
.el-menu-item.is-active{
    color: white
}
.el-menu-item{
    color: rgb(63, 107, 144);
    margin-top: 5px;
}
.person7{
    overflow: hidden;
    margin: 50px 0;
}
.bottom{  
    height: 100%;
    border-bottom: 2px solid rgb(199, 199, 199);
}
.person7 .el-menu-item,
.bottom{
    font-weight: 600;
}
</style>