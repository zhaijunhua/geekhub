const mutations = {
    'SET_LIKE'(state) {
        state.likeNumber = state.likeNumber + 1;
        state.islike = 1;
        console.log(state.likeNumber);
        console.log(state.islike);
    },
    'CANCEL_LIKE'(state) {
        state.likeNumber = state.likeNumber - 1;
        state.islike = 0;
    }
};

export default mutations;