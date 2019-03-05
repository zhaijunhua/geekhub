const getblogger = {
    state: {
        idMessage: {}
    },
    mutations: {
        'SET_VALUE'(state, res) {
            state.idMessage = res;
        }
    },
    actions: {
        getIdMessage: ({commit}, res) => {
            commit('SET_VALUE', res);
            console.log('success');
        }
    },
    getters: {
        idMessage: (state) => state.idMessage
    }
};

export default getblogger;