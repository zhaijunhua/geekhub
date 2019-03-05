<template>
    <div>
        <topbar />
        <div id="portal">
            <leftBox />
            <rightBox />
        </div>
    </div>
    
</template>

<script>
import leftBox from './leftBox/index.vue';
import rightBox from './rightBox/index.vue';
import topbar from '../common/topbar/index.vue';
export default {
    name: '',
    data: () => ({}),
    components: {
        leftBox,
        rightBox,
        topbar
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
    #container {
        width: 1070px;
    }
    #portal {
        width: 90%;
        max-width: 1080px;
        margin:75px auto;
        height: auto;
        padding: 5px;
    }
</style>
