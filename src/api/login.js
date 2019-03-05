import request from 'src/util/request';

export function loginByUsername(username, password) {
    let formData = new FormData();
    formData.append('account', username);
    formData.append('password', password);
    return request({
        url: 'http://47.101.200.155:9999/user/findUser',
        method: 'post',
        data: formData
    });
}

// export function logout() {
//     return request({
//         url: '/login/logout',
//         method: 'post'
//     });
// }

// export function getUserInfo(token) {
//     return request({
//         url: '/user/info',
//         method: 'get',
//         params: { token }
//     });
// };