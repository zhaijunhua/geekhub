const actions = {
    likeIt({commit}) {
        commit('SET_LIKE');
    },
    cancel({commit}) {
        commit('CANCEL_LIKE');
    }
};

export default actions;