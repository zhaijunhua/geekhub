<template>
    <div class="comment">
        <add-comment/>
        <comment-list/>
    </div>
</template>
<script>
import addComment from './addComment.vue';
import commentList from './commentList.vue';
export default {
    name: 'comment',
    components: {
        'add-comment': addComment,
        'comment-list': commentList
    }
};
</script>
