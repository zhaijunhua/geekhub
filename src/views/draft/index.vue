<template>
    <div id="draft">
        <topbar />
        <div class="container">
           <myDraft /> 
        </div>
    </div>
</template>
<script>
import myDraft from './myDraft/index.vue';
import topbar from '../common/topbar/index';

export default {
    name: '',
    data: () => ({}),
    components: {
        topbar,
        myDraft
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
    h1{
        color: rgb(82, 140, 204)
    }
    .container {
        width: 80%;
        max-width: 970px;
        margin:75px auto;
    }
</style>
