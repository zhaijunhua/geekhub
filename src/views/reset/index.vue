<template>
    <div>
        <topbar></topbar>
        <div class="container">
            <div class="mid">
                <div class="left_geek_studio">
                    <img src="~images/geek_studio.png" alt="">
                </div>
                <div class="reset_box" v-loading="loading">
                    <div class="reset">找回密码</div>
                    <div class="form-container">
                        <el-radio-group v-model="labelPosition" size="small">
                        </el-radio-group>
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="64px" :label-position="labelPosition" size="medium">
                        <el-form-item prop="email" label="邮箱">
                            <el-input v-model="ruleForm.email" autocomplete="off" class="email"></el-input>
                        </el-form-item>
                        <el-form-item prop="vCode" label="验证码">
                            <el-input v-model="ruleForm.vCode" autocomplete="off" class="verification-code"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
                            <el-button class="send-vcode" @click="sendVcode('ruleForm')" :disabled="isDisable">{{VcodeText}}</el-button>
                        </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import topbar from '../common/topbar/index';
export default {
    data() {
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
                email: '',
                vCode: ''
            },
            loading: '',
            VcodeText: '发送验证码',
            isDisable: false,
            count: 60,
            rules: {
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
            // 提交表单
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 提交成功
                    this.resetPassword();
                } else {
                    // 提交失败,窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理
                    this.$alert('请检查输入的信息是否正确！', '错误', {
                        confirmButttonText: '确定'
                    });
                    return false;
                }
            });
        },
        sendVcode(formName) {
            this.$refs[formName].validateField('email', isSendRequset => {
                if (isSendRequset === '') {
                    // 邮箱格式无误,可以发送请求
                    this.sendVcodeRequset();
                }
            });
        },
        setTime() {
            // 60秒倒计时器
            if (this.count === 0) {
                this.VcodeText = '发送验证码';
                this.isDisable = false;
                this.count = 60;
            } else {
                this.isDisable = true;
                this.VcodeText = '重新发送(' + this.count + 's)';
                this.count--;
                setTimeout(() => {
                    this.setTime();
                }, 1000);
            }
        },
        resetPassword() {
            // 发送请求
            let url = 'http://x96vvc9tgt.51http.tech/user/RetrievePassword?userMail=' + this.ruleForm.email + '&code=' + this.ruleForm.vCode;
            axios({
                method: 'post',
                url: url
            }).then(res => {
                console.log(res.data);
                if (res.data.code === 400004 || 200003 || 300001) {
                    this.$alert(res.data.msg, '错误', {
                        confirmButttonText: '确定'
                    });
                } else if (res.data.code === 100001) {
                    // 重置密码成功
                    alert('成功');
                } else {
                    this.$alert('其他未知错误,请联系管理员!', '错误', {
                        confirmButttonText: '确定'
                    });
                }
            }).catch(error => {
                console.log(error);
                this.$alert('请检查网络后再试!', '网络错误', {
                    confirmButttonText: '确定'
                });
            });
        },
        sendVcodeRequset() {
            let url = 'http://x96vvc9tgt.51http.tech/user/userMailSend?userMail=' + this.ruleForm.email;
            this.isDisable = true;
            this.setTime();
            axios({
                method: 'post',
                url: url
            }).then(res => {
                console.log(res);
                if (res.data.code === 400004 || res.data.code === 200003) {
                    this.$alert(res.data.msg, '错误', {
                        confirmButttonText: '确定'
                    });
                } else if (res.data.code === 100001) {
                    // 发送验证码成功
                    alert('发送验证码成功');
                } else {
                    this.$alert('其他未知错误,请联系管理员', '错误', {
                        confirmButttonText: '确定'
                    });
                }
            }).catch(error => {
                console.log(error);
                this.$alert('请检查网络后再试!', '网络错误', {
                    confirmButttonText: '确定'
                });
            });
        }
    }
};
</script>

<style <style lang="scss" scoped>
    $color: #2567a3;
    .container {
        .mid {
            position: relative;
            margin: 165px auto auto auto;
            width: 466 + 371px;
            height: 318px;
            box-shadow: 0px 0px 8px 6px rgba(227, 227, 227, 1);
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
            .reset_box {
                position: relative;
                float: left;
                width: 466px;
                height: 318px;
                overflow: hidden;
                background: #fff;
                .reset {
                    position: relative;
                    margin: 40px auto 0 auto;
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
                    .send-vcode {
                        overflow: hidden;
                        margin-left: 20px;
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            }
            .no-account {
                position: relative;
                margin: 15px 0 auto 140px;
                font-size: 12px;
                color: #2567a3;
                // font-family: Microsoft YaHei;
            }
        }
    }
</style>
