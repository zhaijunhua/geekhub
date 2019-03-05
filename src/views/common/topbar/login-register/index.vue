<template>
	<div id="register">
		<span @click='tologin'>登录</span>
		<span>|</span>
		<span @click='toRegister'>注册</span>
	</div>
</template>

<style lang="scss" scoped>
#register{
	display: flex;
	flex-direction: row-reverse;
	span{
		line-height: 58px;
		padding: 0 5px;
		font-size: 18px;
		color: #5383b2;
		&:hover{
			cursor: pointer;
		}
	}
}
</style>

<script>
// import registerBox from '../../register/registerBox';

export default {
    name: 'register',
    data: () => ({}),
    components: {
        // registerBox
    },
    methods: {
        tologin: function() {
            this.$router.push('./sign_in');
        },
        toRegister: function() {
            this.$router.push('./sign_up');
        }
    }
};
</script>