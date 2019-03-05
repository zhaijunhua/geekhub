// import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state = {
    userName: '',
    userId: '',
    islike: 0,
    likeNumber: 10
    //  0：未点赞，1：已点赞
};

const giveLike = {
    namespaced: true,
    state,
    mutations,
    actions
};
export default giveLike;