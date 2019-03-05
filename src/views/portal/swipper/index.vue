<template>
	<div id="swiper">
          <el-carousel :interval="2000" arrow="always" height="300px">
            <el-carousel-item v-for="item in lists" :key="item.id">
              <!-- <h3>{{ item.img }}</h3> -->
              <img :src="item.img">
            </el-carousel-item>
          </el-carousel>
	</div>
</template>

<style lang="scss" scoped>
#swiper{
    width: 80%;
    max-width: 970px;
    margin: 0 auto;
    padding-top: 75px;
	img{
		width: 100%;
		height: auto;
    max-height: 320px;
	}
  .el-carousel__item:nth-child(2n) {
    background-color: rgba(0,0,0,.2);
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: rgba(0,0,0,.2);
  }
}
</style>

<script>
export default {
    name: 'swiper',
    data: () => ({
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
        ]
    })
};
</script>