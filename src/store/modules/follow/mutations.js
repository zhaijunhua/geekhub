const mutations = {
    'SET_FOLLOW'(state) {
        state.fansNumber = state.fansNumber + 1;
        state.isFollow = 1;
    },
    'CANCEL_FOLLOW'(state) {
        state.fansNumber = state.fansNumber - 1;
        state.isFollow = 0;
    }
};

export default mutations;