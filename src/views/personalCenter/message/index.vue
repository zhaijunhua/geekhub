<template>
	<div id="userMsg">
		<div class="headMsg">
			<!-- <p class="title">消息</p> -->
			<h3>消息</h3>
			<p class="category" @click='showRightCon'>
				<span>点赞</span>
				<span>评论</span>
				<span>通知</span>
			</p>
		</div>

		<div class="content">
			<div v-if="showItem[0]">
				<like></like>
			</div>
			<div v-if="showItem[1]">
				<comment></comment>
			</div>
			<div v-if="showItem[2]">
				<inform></inform>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
#userMsg{
	h3{
	    color: rgb(65, 139, 212);
	    margin: 13px 0 0 0;
	}
	.headMsg{
	    border-bottom: 1px solid rgb(191, 191, 191);
		.title{
			font-size: 24px;
			color: #408cd2;
			padding-top: 15px;
			letter-spacing: 12px;
		}
		.category{
			width: 50%;
			height: 22px;
			display:flex;
			justify-content: space-around;
			margin-left: 50%;
			font-size: 11px;
			line-height:22px;
			color: #5383b2;
			line-height: 17px;
			span{
				&:hover{
					cursor: pointer;
				} 
			}
			span:nth-child(1){
				font-weight: bold;
			}
		}
	}
	.content{
		width: 100%;
		padding: 0 47px;
		box-sizing: border-box;
	}
}
</style>

<script>
import like from './like/index.vue';
import comment from './comment/index.vue';
import inform from './inform/index.vue';

export default {
    name: 'userMsg',
    data: () => ({
        showItem: [true, false, false]
    }),
    components: {
        like,
        inform,
        comment
    },
    methods: {
        showRightCon: function() {
            var items = document.querySelector('.category').children;
            var that = this;
            var t;
            var j = 0;
            Object.keys(items).forEach(function(i, val, arr) {
                items[i].addEventListener('click', function() {
                    t = j;
                    j = i;
                    that.showItem[t] = false;
                    that.showItem[j] = true;
                    items[t].style.fontWeight = 'normal';
                    items[j].style.fontWeight = 'bold';
                    that.$forceUpdate();
                }, false);
            });
        }
    }
};
</script>