import mutations from './mutations.js';
import actions from './actions.js';
const state = {
    bloggerName: '',
    follower: '',
    fansNumber: 20,
    isFollow: 0 // 0代表未关注
};

const follow = {
    namespaced: true,
    state,
    mutations,
    actions
};
export default follow;