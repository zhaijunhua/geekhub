<template>
    <div class="authorMessage">
        <div :class="isFixed ? 'fixed' :''">
            <blogger/>
            <blogger-blog/>  
        </div>
    </div>
</template>
<script>
import blogger from './blogger/blogger.vue';
import bloggerBlog from './bloggerBlog/index.vue';
export default {
    name: 'leftContent',
    components: {
        blogger,
        'blogger-blog': bloggerBlog
    },
    data() {
        return {
            isFixed: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 200) {
                this.isFixed = true;
            } else {
                this.isFixed = false;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.authorMessage{
    width: 21%;
}
.fixed{
            position: fixed;
            width:17%;
            top: 2px;
        }
</style>
