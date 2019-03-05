<template>
    <div id="sidenav">
        <ul id='menusLeft'>
            <div  v-for='val in sideBarMenu' :key="val">
                <li :class="sideBarMenu.indexOf(val) % 2? 'even' : 'odd' " @click="filterType($event)">
                    <router-link to='/index'>{{val}}</router-link> 
                 </li>				
            </div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../dep/portal/iconfont.css";

#sidenav{
    // position: fixed;
    width: 120px;
    .sidebarhide{
        position: absolute;
        top: 10px; 
        left: 10px;
        color: #24b2fe;
    }
    ul{
        // position: fixed;
        width: 120px;
        display: flex;
        flex-direction: column;
        line-height: 51px;
        border-top: 4px solid #24b2fe;
        border-bottom: 4px solid #24b2fe;
        box-shadow: 0 0 8px #c2c2c2;
        li{
            text-align: center;
            transition: All 0.4s ease-in-out;
            -webkit-transition: All 0.4s ease-in-out;
            -moz-transition: All 0.4s ease-in-out;
            -o-transition: All 0.4s ease-in-out;
            a{
                font-size:16px;
                color: #194772;
            }
            &:hover{
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
            }
        }
    }
}
.odd{
    background: #ddf4ff;
}
.even{
    background: #f7f7f7;
}
</style>

<script>
// import $ from 'jquery';
import homePage from '../../../config/menu/portal/homePage.js';
export default {
    name: 'sidenav',
    data: () => ({
        sideBarMenu: homePage.sideBarMenu,
        isCollapse: true
    }),
    mounted() {
        this.getLabels();
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        getLabels: function() {
            var url = 'http://120.79.94.90:8080/page/lable/lable_parent';
            var that = this;
            // fetch请求
            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    that.sideBarMenu = data.data;
                })
                .catch((error) => {
                    throw error;
                });
        },
        filterType: function(e) {
            // var lable_child = e.target.childNodes[0].data;
            let formData = new FormData();
            formData.append('lable_child', e.target.childNodes[0].data);
            var url = 'http://120.79.94.90:8080/page/lable/lable_child_blogs';
            // var that = this;
            // fetch请求
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.data);
                })
                .catch((error) => {
                    throw error;
                });
        }
        // handleScroll() {
        //     var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //     var offsetTop = document.querySelector('#menusLeft').offsetTop;
        //     var offsetHei = document.querySelector('#menusLeft').style.height;
        //     console.log(offsetHei);
        //     if (scrollTop > (offsetTop + 270) || scrollTop > (offsetTop + 240)) {
        //         document.querySelector('#menusLeft').setAttribute('class', 'fixed');
        //         document.querySelector('#menusLeft').style.top = '78px';
        //     } else {
        //         document.querySelector('#menusLeft').removeAttribute('class');
        //     }
        // }
    }
};
</script>