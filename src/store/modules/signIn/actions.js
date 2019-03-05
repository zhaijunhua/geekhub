// import requestTest from '../../../util/utils';
// import { setToken } from 'src/util/auth';
// import { loginByUsername } from 'src/api/login';
// const handleError = () => {
//     // handle err
// };
// const actions = {
//     axiosTodos({commit}) {
//         requestTest.getAllTodos().then(data => {
//             commit('fillTodos', data);
//         }).catch(err => {
//             handleError(err);
//         });
//     },
//     LoginByUsername({ commit }, userInfo) {
//         const username = userInfo.username.trim();
//         return new Promise((resolve, reject) => {
//             loginByUsername(username, userInfo.password).then(response => {
//                 const data = response.data;
//                 console.log(data);
//                 commit('SET_TOKEN', data.token);
//                 setToken(response.data.token);
//                 resolve();
//             }).catch(error => {
//                 reject(error);
//             });
//         });
//     }
// };
// export default actions;