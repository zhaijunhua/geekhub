<template>
	<div id="mobileLeftBar">
		<div class="sidebarhide" @click='showBar'>
			<i class="iconfont icon-menu-two"></i>
		</div>
		<div class="navLogos" v-if = 'isCollapse'>
			<li>
				<i class="iconfont icon-followed"></i>
				<span>关注</span>
			</li>
			<li>
				<i class="iconfont icon-qianduankaifa"></i>
				<span>前端</span>
			</li>
			<li>
				<i class="iconfont icon-python"></i>
				<span>Python</span>
			</li>
			<li>
				<i class="iconfont icon-houtai"></i>
				<span>后台</span>
			</li>
			<li>
				<i class="iconfont icon-andriod"></i>
				<span>Android</span>
			</li>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#mobileLeftBar{
	width: 60px;
	margin-left: -60px;
	background:#ddf4ff;
	i{
		&:hover{
			cursor: pointer;
		}
	}
	.sidebarhide{
		text-align: center;
	    padding: 10px;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.navLogos{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		li{
			list-style: none;
			padding: 5px 10px;
			span{
				font-size: 12px;
				display: block;
			}
		}
	}
}

</style>

<script>
// import $ from 'jquery';
import homePage from '../../../config/menu/portal/homePage.js';
export default {
    name: 'sidenav',
    data: () => ({
        sideBarMenu: homePage.sideBarMenu,
        isCollapse: false
    }),
    mounted() {
        console.log(this.sideBarMenu);
        // this.showBar();
    },
    methods: {
        showBar: function() {
            this.isCollapse = !this.isCollapse;
            // var mobileLogos = document.querySelector('.navLogos');
            // mobileLogos.style.transformOrigin = 'center top 0px';
            // console.log(mobileLogos);
        }
    }
};
</script>