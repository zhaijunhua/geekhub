<template>
    <div>
        <h3>个人信息</h3>
        <el-row :gutter="20" class="person_self">
            <el-col :span="12"><el-row><el-col :span="8" class="items">姓名：</el-col><el-col :span="16" class='valus'>{{name}}</el-col></el-row></el-col>
            <el-col :span="12"><el-row><el-col :span="8" class="items">邮箱：</el-col><el-col :span="16" class='valus'>{{e_mail}}</el-col></el-row></el-col>
        </el-row>
        <el-row :gutter="20" class="person_self">
            <el-col :span="12"><el-row><el-col :span="8" class="items">用户名：</el-col><el-col :span="16" class='valus'>{{userName}}</el-col></el-row></el-col>
            <el-col :span="12"><el-row><el-col :span="8" class="items">毕业去向：</el-col><el-col :span="16" class='valus'>{{graduate}}</el-col></el-row></el-col>
        </el-row>
        <el-row :gutter="20" class="person_self">
            <el-col :span="12"><el-row><el-col :span="8" class="items">QQ：</el-col><el-col :span="16" class='valus'>{{QQ}}</el-col></el-row></el-col>
            <el-col :span="12"><el-row><el-col :span="8" class="items">职业：</el-col><el-col :span="16" class='valus'>{{profession}}</el-col></el-row></el-col>
        </el-row>
        <h3>浏览量总图</h3>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column
                prop="label"
                label=""
                width="180">
            </el-table-column>
            <el-table-column
                prop="blog"
                label="博客"
                width="180">
            </el-table-column>
            <el-table-column
                prop="resource"
                label="资源">
            </el-table-column>
        </el-table>
        <el-row class="Img">
            <el-col :span="20"><div class="img"><img src="" alt=""></div></el-col>
            <el-col :span="4">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <el-button size="medium">周</el-button>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-button size="medium">月</el-button>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-button size="medium">季</el-button>    
                </el-menu-item>
                <el-menu-item index="4">
                    <el-button size="medium">年</el-button>     
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function() {
            return {
                name: '张三',
                e_mail: '823683733@qq.com',
                userName: '李四',
                graduate: 'bat',
                QQ: '823683733',
                profession: '程序猿',
                tableData: [
                    {
                        label: '点赞量',
                        bloge: '10000',
                        resource: '-'
                    },
                    {
                        label: '评论量',
                        bloge: '',
                        resource: '-'
                    },
                    {
                        label: '浏览/下载量',
                        bloge: '10000',
                        resource: '10000'
                    }
                ]
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
.items{
    color: rgb(38, 92, 136);
    font-weight: bold;
}
.valus{
    text-align: center;
    color: rgb(118,144,171);
}
.person_self{
    margin: 17px;
    padding: 3px 20px
}
.el-table{
    color: rgb(109, 143, 170);
    background: rgb(233, 254, 255)
}
.Img{
    margin-top: 15px;
}
.img{
    width: 100%;
}
</style>