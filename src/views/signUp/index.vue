<template>
    <div>
        <topbar></topbar>
        <div class="mid">
            <div class="left_geek_studio">
                <img src="~images/geek_studio.png" alt="">
            </div>
            <div class="register_box" v-loading="loading">
                <div class="register">注 册</div>
                <div class="form-container">
                    <el-radio-group v-model="labelPosition" size="small">
                    </el-radio-group>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="64px" :label-position="labelPosition" size="mini">
                    <el-form-item label="用户名" prop="name">
                        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="邮箱">
                        <el-input v-model="ruleForm.email" autocomplete="off" class="email"></el-input>
                    </el-form-item>
                    <!-- <el-form></el-form> -->
                    <el-form-item prop="vCode" label="验证码">
                        <el-input v-model="ruleForm.vCode" autocomplete="off" class="verification-code" maxlength="6"></el-input>
                        <el-button type="primary" size="mini" @click="sendVcode('ruleForm')" :disabled="isDisable">{{mailBoxText}}</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')" size="medium" class="submit" :loading="loading">提 交</el-button>
                        <el-button size="medium" @click="resetForm('ruleForm')" class="reset">重置</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import topbar from '../common/topbar/index';
// import CryptoJS from 'crypto-js';
export default {
    data() {
        var validateUser = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }
            callback();
        };
        var validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入邮箱地址'));
            }
            callback();
        };
        var validateVcode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            }
            callback();
        };
        return {
            labelPosition: 'left',
            ruleForm: {
                name: '',
                pass: '',
                email: '',
                vCode: ''
            },
            loading: false,
            mailBoxText: '验证邮箱',
            isDisable: false,
            count: 60,
            rules: {
                name: [
                    { validator: validateUser, trigger: 'blur' },
                    { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
                    // 中文、英文、数字包括下划线
                    { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/, message: '用户名为系统禁止的标识!', trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                vCode: [
                    { validator: validateVcode, trigger: 'blur' }
                ]
            }
        };
    },
    components: {
        topbar
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.register();
                } else {
                    this.$alert('请检查输入的信息是否正确！', '错误', {
                        confirmButttonText: '确定'
                    });
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        sendVcode(formName) {
            this.$refs[formName].validateField('name', () => {
                this.$refs[formName].validateField('email', () => {
                    this.$refs[formName].validateField('pass', isSendRequset => {
                        if (isSendRequset === '') {
                            // 用户名,密码,邮箱无误,可以发送请求
                            this.sendVcodeRequset();
                        }
                    });
                });
            });
        },
        sendVcodeRequset() {
            let url = 'http://47.101.200.155:9999/page/user/userRegistStepOne';
            let formData = new FormData();
            // let encryptName = window.encodeURIComponent(this.ruleForm.name);
            // let encryptPassword = CryptoJS.MD5((CryptoJS.SHA1(this.ruleForm.pass).toString())).toString();
            formData.append('name', this.ruleForm.name);
            formData.append('email', this.ruleForm.email);
            formData.append('password', this.ruleForm.pass);
            // let data = {
            //     username: this.ruleForm.name,
            //     email: this.ruleForm.email,
            //     password: this.ruleForm.pass
            // };
            // this.$store.dispatch('register', data).then(() => {
            //     console.log('register');
            // }).catch(error => {
            //     console.log(error);
            // });
            axios({
                method: 'post',
                url: url,
                data: formData
            }).then(res => {
                console.log('我已经发送了邮箱了');
                console.log(res.data);
                if (res.data.code === 200006 || res.data.code === 200008 || res.data.code === 200003 || res.data.code === 200009 || res.data.code === 200007 || res.data.code === 200010) {
                    this.$alert(res.data.msg, '错误', {
                        confirmButttonText: '确定'
                    });
                } else if (res.data.code === 100001) {
                    alert('邮箱获取成功');
                } else {
                    this.$alert('其他未知错误,请联系管理员', '错误', {
                        confirmButttonText: '确定'
                    });
                }
            }).catch(error => {
                console.log('出错误了');
                console.log(error);
            });
            this.isDisable = true;
            this.setTime();
        },
        setTime() {
            if (this.count === 0) {
                this.mailBoxText = '验证邮箱';
                this.isDisable = false;
                this.count = 60;
            } else {
                this.isDisable = true;
                this.mailBoxText = this.count + 's';
                this.count--;
                setTimeout(() => {
                    this.setTime();
                }, 1000);
            }
        },
        register() {
            this.loading = true;
            let url = 'http://47.101.200.155:9999/page/user/userRegistStepTwo';
            let formData2 = new FormData();
            formData2.append('vCode', this.ruleForm.vCode);
            axios({
                method: 'post',
                url: url,
                data: formData2,
                withCredentials: true
            }).then(res => {
                this.loading = false;
                console.log(res);
                if (res.data.code === 200006 || res.data.code === 200011) {
                    this.$alert(res.data.msg, '错误', {
                        confirmButttonText: '确定'
                    });
                } else if (res.data.code === 100001) {
                    alert('注册成功');
                    this.$router.push({ path: '/sign_in' });
                } else {
                    this.$alert('其他未知错误,请联系管理员', '错误', {
                        confirmButttonText: '确定'
                    });
                }
            }).catch(error => {
                console.log(error);
            });
        }
    }
};
</script>

<style style lang="scss" scoped>
    $color: #2567a3;
    .mid {
        position: relative;
        margin: 165px auto auto auto;
        width: 466 + 371px;
        height: 318px;
        box-shadow: 0px 0px 8px 6px rgba(227, 227, 227, 1);
        overflow: hidden;
        .left_geek_studio {
        position: relative;
        float: left;
        width: 371px;
        height: 318px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .register_box {
            position: relative;
            float: left;
            width: 466px;
            height: 318px;
            overflow: hidden;
            .register {
                position: relative;
                margin: 14px auto 5px auto;
                padding: 0 0 0 55px;
                width: 200px;
                font-size: 24px;
                text-align: center;
                color: $color;
            }
            .form-container {
                position: relative;
                margin: 0 auto;
                width: 276px;
                .verification-code {
                    width: 127px;
                }
                .reset {
                    position: relative;
                    float: right;
                    margin-right: 0;
                }
                .reset ::after {
                    clear: both;
                    overflow: hidden;
                }
                .submit {
                    width: 100px;
                }
            }
        }
        .no-account {
            position: relative;
            margin: 5px 0 auto 257px;
            font-size: 12px;
            color: #2567a3;
        }
    }
</style>
