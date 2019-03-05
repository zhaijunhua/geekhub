<template>
	<div id="topnav">
		<ul id="menus">
			<!-- <li><i class="logoIcon icon-yunfuwuqi iconStyle"></i></li> -->
            <li class="logo">
                <img src="../../../../resources/images/common/logo.png">
            </li>
            <li class="menu"> <router-link to='/index'>博客</router-link>  </li>
            <li class="menu"> <router-link to='/download/mostDownload'>下载</router-link></li>
            <li class="menu"> <router-link to='/parent'>内部资源</router-link></li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
.active{
	border-bottom: 4px solid #5383b2;
}
#topnav{
	width: 50%;
	height:58px;
    .logo{
        display: flex;
        align-items: center;
        img{
            width: 98px;
        }
    }
    .logoIcon {
        font-family: "iconfont" !important;
        font-style: normal;
        font-size: 30px;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
	ul{
        position: relative;
		display: flex;
        height: 58px;
		justify-content: space-between;
		border: none;
		line-height: 58px;
		li:nth-child(n+2){
            padding: 0 15px;
			a{
				color: #5383b2;
			}
            &:hover{
                cursor: pointer; 
                background: #84a6c8;
                a{
                    color: #fff;
                }
            }
		}

	}
}
</style>

<script>
import $ from 'jquery';
export default {
    name: 'topnav',
    data: () => ({}),
    mounted() {
        this.menuActive();
    },
    methods: {
        menuActive: function() {
            var urlstr = location.href;
            var urlstatus = false;
            $('#menus a').each(function() {
                if ((urlstr + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') !== '') {
                    $(this).parent().addClass('active');
                    urlstatus = true;
                } else {
                    $(this).parent().removeClass('active');
                }
            });
            if (!urlstatus) { $('#menus li').eq(1).addClass('active'); }
        }
    }
};
</script>