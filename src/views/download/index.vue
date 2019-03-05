<template>
    <div id="navigation">
        <topbar></topbar>
        <div class="navigation">
            <navmenu></navmenu>
            <search></search>
            <router-link to="/download/recentUpload">最近上传</router-link>
            <router-link to="/download/mostDownload"> 最多下载</router-link>
            <div id="hr"></div>
            <transition name="fade" mode="out-in">
            <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import recentUpload from './recentUpload/index';
import mostDownload from './mostDownload/index';
import search from './search/index';
import navmenu from './menu/index';// 引入
import topbar from '../common/topbar/index';
export default {
    components: {// 注册
        recentUpload,
        mostDownload,
        search,
        navmenu,
        topbar
    },
    data() {
        return {
        };
    }
};
</script>

<style lang="scss" scoped> 
.navigation{
    width: 80%;
    max-width: 970px;
    margin:75px auto;
}
a {
    display:inline-block;
    margin-right: 30px;
    color:#32577C;
}
#hr {
    width: 867px;
    margin-bottom: 28px;
    height: 1px;
    background-color: #B1C3D3;
    margin-top: 10px;
}
.router-link-active{
    color: #3257D7;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .3s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .3s;
}
// 列表显示间隔22px;
</style>
