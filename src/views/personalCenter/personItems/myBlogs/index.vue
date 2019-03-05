<template>
    <div id="myBlogs">
        <div class="blogsNav">
            <h3>我的博客</h3>
            <el-row type="flex" justify="end">
            <el-col :span="3"><el-button type="text"  class="healderNav">按时间排序</el-button><i class="el-icon-caret-bottom"></i></el-col>
            <el-col :span="3"><el-button type="text"  class="healderNav">按浏览量排序</el-button></el-col>
            <el-col :span="3"><el-button type="text"  class="healderNav">按下载排序</el-button></el-col>
        </el-row>
        </div>
        <blogs></blogs>
    </div>
</template>

<script>
import blogs from './Blogs/index.vue';
export default {
    name: 'myBlogs',
    components: {
        blogs
    }
};
</script>

<style scoped>
h3{
    color: rgb(65, 139, 212);
    margin: 13px 0 0 0; 
}
.blogsNav{
    border-bottom: 1px solid rgb(191, 191, 191);
}
.healderNav{
    font-size: 7px;
    color: rgb(126, 160, 197);
    padding: 0;
}
</style>