<template>
    <div id="rightbar">
        <div id="recommends">
            <div class="breads">好文推荐</div>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="goodbusy" infinite-scroll-distance="50">
            <div class="recommend" v-for='item in showGoodslists' v-bind:key='item.id'>
                <div class="pic"><img :src="item.pic"></div>
                <div class="title">{{item.blogs_title}}</div>
            </div>
            <div class="goodspread spread" @click="spread($event, 'good')">展开</div>
            </div>
        </div>
        <div id="specialists">
            <div class="breads">博客专家</div>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="specialbusy" infinite-scroll-distance="50">
            <div class="specialist" v-for='item in showspecialists' v-bind:key='item.id'>
                <div class="pic"><img :src="item.pic"></div>
                <div class="title">
                    <p>{{item.blogs_title}}</p>
                    <p>{{specialists.length}}篇</p>
                </div>
            </div>
            <div class="specialistspread spread" @click="spread($event, 'special')">展开</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../dep/iconfont/iconfont.css";

#rightbar{
    #recommends{
        width: 206px;
        color:#929eaa;
        border-raduis: 5px;
        box-shadow: 0 0 8px #c2c2c2;
        .breads{
            height: 50px;
            line-height:50px;
            color:#fff;
            font-size: 16px;
            text-align: center;
            background: -webkit-gradient(linear, 0 0,0 100%,from(#16aeec),to(#6ec2f1));
            background: -moz-linear-gradient(top, #16aeec,#6ec2f1);
        }
        .recommend{
            display:flex;
            padding: 14px 17px 0 11px;
            .pic{
                img{
                    width: 90px;
                    height: 54px;
                    padding-right: 11px;
                }
            }
            .title{
                font-size: 11px;
                line-height: 22px;
            }
        }
    }
    #specialists{
        width: 206px;
        margin: 20px auto;
        color:#929eaa;
        // border-raduis: 5px;
        box-shadow: 0 0 8px #c2c2c2;
        .breads{
            height: 50px;
            line-height:50px;
            color:#fff;
            font-size: 16px;
            text-align: center;
            background: -webkit-gradient(linear, 0 0,0 100%,from(#16aeec),to(#6ec2f1));
            background: -moz-linear-gradient(top, #16aeec,#6ec2f1);
        }
        .specialist{
            display:flex;
            padding: 14px 17px 0 11px;
            justify-content: space-between;
            .pic{
                img{
                    width: 90px;
                    height: 54px;
                    padding-right: 11px;
                }
            }
            .title{
                font-size: 11px;
                line-height: 22px;
                p:nth-child(2){
                    text-align: right;
                }
            }
        }
    }
    .spread{
        height: 50px;
        line-height:50px;
        font-size: 16px;
        text-align: center;
        transition: All 0.4s ease-in-out;
        -webkit-transition: All 0.4s ease-in-out;
        -moz-transition: All 0.4s ease-in-out;
        -o-transition: All 0.4s ease-in-out;
        &:hover{
            cursor: pointer;
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -o-transform: scale(1.2);
            -ms-transform: scale(1.2);
        }
    }
}
.fixed{
    position: fixed;
}
</style>

<script>
// import $ from 'jquery';
// import fetchGet from '../../../../src/util/get';
// import {get} from '../../../../src/util/fetchData';
export default {
    name: 'hots',
    data: () => ({
        page: 1,
        sortType: 2,
        goodpage: 1,
        spcialpage: 1,
        isGoodsSpread: false,
        isSpread: false,
        goodbusy: false,
        specialbusy: false,
        specialists: [],
        showspecialists: [],
        Goodslists: [],
        showGoodslists: []
    }),
    mounted() {
        this.getGoods();
        this.getSpecialists();
    },
    methods: {
        handleParams: function(params, url) {
            let paramsArray = [];
            // 拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            } else {
                url += '&' + paramsArray.join('&');
            }
            return url;
        },
        getGoods: function() {
            var params = {
                userId: 1,
                page: this.page,
                sortType: this.sortType
            };
            var url = 'http://120.79.94.90:8080/page/blogs/getBlogs';
            var paramsUrl = this.handleParams(params, url);
            var that = this;
            // fetch请求
            fetch(paramsUrl, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.data.result.length === 0) {
                        this.goodbusy = true;
                    } else {
                        this.goodbusy = false;
                    }
                    that.Goodslists = data.data.result;
                    that.showGoodslists = that.Goodslists.slice(0, 2);
                })
                .catch((error) => {
                    throw error;
                });
        },
        getSpecialists: function() {
            var params = {
                userId: 1,
                page: this.page,
                sortType: 3
            };
            var url = 'http://120.79.94.90:8080/page/blogs/getBlogs';
            var paramsUrl = this.handleParams(params, url);
            var that = this;
            // fetch请求
            fetch(paramsUrl, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.data.result.length === 0) {
                        this.specialbusy = true;
                    } else {
                        this.specialbusy = false;
                    }
                    that.specialists = data.data.result;
                    that.showspecialists = that.specialists.slice(0, 2);
                })
                .catch((error) => {
                    throw error;
                });
        },
        spread: function(e, type) {
            if (type === 'good') {
                this.goodspread = !this.goodspread;
                if (this.goodspread) {
                    this.showGoodslists = this.Goodslists.slice(0, 2);
                    e.target.innerHTML = '展开';
                } else {
                    this.showGoodslists = this.Goodslists;
                    e.target.innerHTML = '收起';
                }
            } else {
                this.specialspread = !this.specialspread;
                if (this.specialspread) {
                    this.showspecialists = this.specialists.slice(0, 2);
                    e.target.innerHTML = '展开';
                } else {
                    this.showspecialists = this.specialists;
                    e.target.innerHTML = '收起';
                }
            }
        },
        loadMore: function() {
            this.busy = true; // 将无限滚动给禁用
            setTimeout(() => { // 发送请求有时间间隔第一个滚动时间结束后才发送第二个请求
                this.goodpage++;
                // this.getData(true);
            }, 500);
        }
    }
};
</script>