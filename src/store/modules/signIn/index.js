// import { getToken, setToken } from 'src/util/auth';
import { loginByUsername } from 'src/api/login';
import { register } from 'src/api/register';

const user = {
    state: {
        user: '',
        status: '',
        code: '',
        // token: getToken(),
        name: '',
        avatar: '',
        introduction: '',
        roles: [],
        setting: {
            articlePlatform: []
        }
    },

    mutations: {
        SET_CODE: (state, code) => {
            state.code = code;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_INTRODUCTION: (state, introduction) => {
            state.introduction = introduction;
        },
        SET_SETTING: (state, setting) => {
            state.setting = setting;
        },
        SET_STATUS: (state, status) => {
            state.status = status;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        }
    },

    actions: {
        // 用户名登录
        LoginByUsername({ commit }, userInfo) {
            const username = userInfo.username.trim();
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    const data = response.data;
                    console.log(data);
                    // console.log(data);
                    // commit('SET_TOKEN', data.token);
                    // setToken(data.token);
                    // resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },
        register({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                register(userInfo.username, userInfo.email, userInfo.password).then(response => {
                    console.log(response);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};
// const SignIn = {
//     user
// };
export default user;