<template>
    <div class="leftBox">
        <personMessage />
    </div>
</template>
<script>
import personMessage from './personMessage/index.vue';
export default {
    components: {
        personMessage
    }
};
</script>
<style lang="scss" scoped>
    .leftBox {
        height: auto;
        width: 225px;
        float: left;
        padding: 2px;
    }
    .leftBox::after {
        clear: both;
    }
</style>

