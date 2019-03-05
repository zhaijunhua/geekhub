<template>
    <div class="write-blog">
        <write/>
        <!-- <test/> -->
    </div>
</template>
<style lang="scss" scoped>
.write-blog{
    width: 100%;
    background: #f7f7f7;
}
</style>
<script>
import write from './write/index.vue';
export default {
    name: 'writeBlog',
    components: {
        write
    },
    data() {
        return {};
    }
};
</script>
