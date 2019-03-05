import request from 'src/util/request';

export function register(username, email, password) {
    let formData = new FormData();
    formData.append('name', username);
    formData.append('email', email);
    formData.append('password', password);
    return request({
        url: 'http://47.101.200.155:9999/user/findUser',
        method: 'post',
        data: formData
    });
}