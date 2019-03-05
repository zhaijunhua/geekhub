<template>
    <div id="personCenter">
        <el-header>
                <topbar></topbar>      
        </el-header>
        <el-main>
            <el-row type="flex" justify="space-between">
                <el-col :span="6" class="personLeft"><mainLeft></mainLeft></el-col>
                <el-col :span="17" class="pesonRight"><router-view></router-view></el-col>
            </el-row>
        </el-main>      
    </div>
</template>
<script>
    import mainLeft from './personItems/mainLeft/index.vue';
    import topbar from '../common/topbar/index.vue';
    export default {
        name: '',
        data: () => {
            return {
                title: 1
            };
        },
        components: {
            mainLeft,
            topbar
        }
    };
</script>

<style scoped>
.el-header{
    padding: 0;
}
.el-main{
    width: 80%;
    max-width: 970px;
    margin: 0 auto
}
.personLeft,
.pesonRight{
    box-shadow: 0px 1px 4px #888888;
}
.pesonRight{
    padding: 0 10px;
}
</style>