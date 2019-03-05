// export const likeNumber = state => state.likeNumber;
// export const islike = state => state.islike;
const getters = {
    likeNumber(state) {
        return state.likeNumber;
    },
    islike(state) {
        return state.islike;
    }
}

export default getters;