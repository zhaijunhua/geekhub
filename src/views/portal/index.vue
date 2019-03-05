<template>
    <div id="portal">
        <topbar></topbar>
        <swipper></swipper>
        <div class="center-con">
            <leftbar></leftbar>
            <mobileLeftBar></mobileLeftBar>
            <articles></articles>
            <rightbar></rightbar>
        </div>
    </div>
</template>

<script>
// import logo from '../common/logo.vue';
import topbar from '../common/topbar/index.vue';
import swipper from './swipper/index.vue';
import leftbar from './leftbar/index.vue';
import mobileLeftBar from './mobileLeftBar/index.vue';
import rightbar from './rightbar/index.vue';
import articles from './articles/index.vue';
import homePage from '../../config/menu/portal/homePage.js';

export default {
    name: '',
    data: () => ({
        homeTopNavMenu: homePage.homeTopNavMenu
    }),
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    components: {
        topbar,
        swipper,
        leftbar,
        rightbar,
        articles,
        mobileLeftBar
    },
    methods: {
        // handleScroll() {
        //     // alert('fs');
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     var offsetTop = document.querySelector('#menusLeft').offsetTop;
        //     if (offsetTop - scrollTop < 78 && offsetTop !== 0) {
        //         // alert('a');
        //         document.querySelector('#menusLeft').setAttribute('class', 'fixed');
        //         document.querySelector('#sidenav').setAttribute('class', 'fixed');
        //         document.querySelector('#sidenav').style.top = '75px';
        //         document.querySelector('#articles').style.paddingLeft = '120px';
        //     } else {
        //         // document.querySelector('#menusLeft').setAttribute('class', '');
        //         // document.querySelector('#sidenav').setAttribute('class', '');
        //         // document.querySelector('#articles').style.paddingLeft = '0';
        //         // document.querySelector('#sidenav').style.top = '396px';
        //     }
        // }
        // handleScroll() {
        //     console.log('fjlakdfl');
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     var winHei = window.innerHeight;
        //     console.log(winHei);
        //     var windowHeight = scrollTop + winHei;
        //     var sideHeight = document.querySelector('#menusLeft').style.height;
        //     if (windowHeight > sideHeight) {
        //         document.querySelector('#menusLeft').style.position = 'fixed';
        //         document.querySelector('#menusLeft').style.top = -(sideHeight - winHei);
        //     } else {
        //         document.querySelector('#menusLeft').style.position = 'static';
        //     }
        // }
    }
};
</script>

<style lang="scss" scoped>
@import "../../dep/portal/iconfont.css";
@media screen and (max-width: 970px) {
    #mobileLeftBar {
        display: block;
        font-size: 34px;
        position: absolute;
        margin-left: -34px;
    }
    #sidenav{
        display: none;
    }
}
@media screen and (min-width: 970px) {
    #mobileLeftBar {
        display: none;
        font-size: 34px;
    }
    #sidenav{
        display: block;
    }
}
#portal{
    background: #f7f7f7;
    margin: 0 auto;
    .center-con{
        width: 80%;
        max-width: 970px;
        margin: 19px auto;
        display:flex;
        justify-content: space-between;
    }
}
.fixed{
    position: fixed;
    top: 75px;
}
</style>