const actions = {
    setFollow({commit}) {
        commit('SET_FOLLOW');
    },
    cancelFollow({commit}) {
        commit('CANCEL_FOLLOW');
    }
};

export default actions;