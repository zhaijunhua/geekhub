<template>
    <div class="blogArticle">
        <left-content/>
        <main-content/>
    </div>
</template>
<script>
import leftContent from './leftContent/index.vue';
import mainContent from './mainArticle/index.vue';
import blogger from './leftContent/blogger/blogger.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'articlePage',
    data() {
        return {
            idMessage: {}
        };
    },
    components: {
        'left-content': leftContent,
        'main-content': mainContent,
        blogger

    },
    // created() {
    //     this.$store.dispatch('getvalue', this.param);
    // },
    mounted() {
        this.getId();
        this.getdata();
    },
    computed: {
        ...mapGetters(['getIdMessage'])
    },
    methods: {
        getId() {
            this.idMessage.blogId = this.$route.query.articleId;
            this.idMessage.userId = this.$route.query.userId;
            this.$store.commit('SET_VALUE', this.idMessage);
        },
        getdata() {
            console.log('vuex获取到的值' + JSON.stringify(this.idMessage));
        }
    }
};
</script>
<style lang="scss" scoped>
.blogArticle{
    width: 80%;
    position: relative;
    top: 20px;
    margin: 0 auto;
     display: flex;
    flex-flow: row;
}
</style>
