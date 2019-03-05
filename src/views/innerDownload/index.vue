<template>
    <div id="innerDownload">
        <topbar></topbar>
        <div class="box">
            <router-link to="">博客</router-link>
            <router-link to=""> 下载资源</router-link>
            <div id="hr"></div>
            <inner-resource />
        </div>
    </div>
</template>
<script>
import innerResource from './innerResource/index';
import topbar from '../common/topbar/index';
export default {
    components: {
        innerResource,
        topbar
    },
    data() {
        return {
        };
    }
};
</script>
<style lang="scss" scoped>
.box {
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
</style>

