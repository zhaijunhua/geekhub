<template>
    <div id="swiper">
        <el-carousel :interval="2000" height="268px">
            <el-carousel-item v-for="item in lists" :key='item.id'>
              <!-- <h3>{{ item.img }}</h3> -->
                <img :src="item.img">
            </el-carousel-item>
        </el-carousel>
        <div id="secondMenu">
            <ul>
                <li v-for="item in items" :key="item.id" class="oneli">
                    <span @mouseover="showToggle(item)" @mouseout="showToggle(item)">{{item.name}}<p>→</p></span>
                    <ul v-show="item.isSubShow" class="secondul">
                        <li v-for="subItem in item.subItems" :key="item.subItems.id" class="innerli">
                            <p>{{subItem.name}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
	    </div>
	</div>    
</template>
<script>
export default {
    data() {
        return {
            lists: [
                {
                    id: '1',
                    img: 'https://img2.mukewang.com/5bc93ff20001514606150389.jpg'
                },
                {
                    id: '2',
                    img: 'https://img2.mukewang.com/5bc93ff20001514606150389.jpg'
                },
                {
                    id: '3',
                    img: 'https://img2.mukewang.com/5bc93ff20001514606150389.jpg'
                },
                {
                    id: '4',
                    img: 'https://img2.mukewang.com/5bc93ff20001514606150389.jpg'
                }
            ],
            items: [
                {
                    id: '1',
                    name: '前端',
                    isSubShow: false,
                    subItems: [
                        {
                            id: '1',
                            name: 'HTML'
                        },
                        {
                            id: '2',
                            name: 'javaScript'
                        },
                        {
                            id: '3',
                            name: 'VUE'
                        }
                    ]
                },
                {
                    id: '2',
                    name: '后台',
                    isSubShow: false,
                    subItems: [
                        {
                            id: '1',
                            name: 'java'
                        },
                        {
                            id: '2',
                            name: 'springboot'
                        },
                        {
                            id: '3',
                            name: 'ok'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        showToggle: function(item) {
            item.isSubShow = !item.isSubShow;
        }
    }
};
</script>
<style lang="scss" scoped>
    #swiper{
        width: 885px;
        margin-bottom: 20px;
        position: relative;
	img{
		width: 100%;
        max-height: 320px;
	}
    .el-carousel__item:nth-child(2n) {
        background-color: rgba(0,0,0,.2);
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: rgba(0,0,0,.2);
    }
    #secondMenu{
        height: 266px;
        // background-color: pink;
        position: absolute;
        top: 0px;
        z-index: 2;
    }
    .oneli{
        width: 864px;
        height: 40px;
        display: flex;
        flex-direction: row; 
        span{
            width: 192px;
            height: 40px;
            background-color: #4B4F53;
            display: block;
            color: white;
            line-height: 40px;
            text-align: center;
            &:hover{
                background-color: #2B2D2F;
            }
            p{
                display: inline;
                float: right;
                margin-right: 5px;
                color: white;
            }
        }
        .secondul{
            background-color:  rgba(224,243,245,.85);;
            width: 450px;
            height: 40px;
            .innerli{
                padding-left: 8px;
                padding-right: 8px;
                border-right: 1px solid grey;
                float: left;
                cursor: pointer;
                margin-top: 10px;
                p{ 
                    height: 18px;
                    min-width: 32px;
                    margin-left: 1px;
                    text-align: center;
                    color: #17558D;
                }
                &:last-child {
                    border: none;
                }
            }
        }
    }
    }
</style>

