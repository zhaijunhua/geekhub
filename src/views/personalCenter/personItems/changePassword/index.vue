<template>
    <div>
        <h3>修改密码</h3>
        <div class="container">
            <el-radio-group v-model="labelPosition" size="small">
            </el-radio-group>
            <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="输入旧密码:" prop="oldPass">
                <el-input type="password" v-model="ruleForm2.oldPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="输入新密码:" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码:" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">确定</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        var validateOldPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入原密码'));
            }
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            } else if (value === this.ruleForm2.oldPass) {
                callback(new Error('不能和原密码一样'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入新密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            labelPosition: 'left',
            ruleForm2: {
                oldPass: '',
                pass: '',
                checkPass: ''
            },
            rules2: {
                oldPass: [
                    { validator: validateOldPass, trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                    this.checkPassword3();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        checkPassword3() {
            const url = 'http://47.101.200.155:9999/page/user/changePW';
            axios({
                method: 'post',
                url: url
            }).then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
        }
    }
};
</script>

<style scoped>
h3{
    color: rgb(65, 139, 212);
    margin: 13px 0 0 0;
    border-bottom: 1px solid rgb(191, 191, 191);
    padding-bottom: 15px;
}
.container {
    margin-top: 126px;
    width: 486px;
}
/* .change{
    text-align: center;
    margin: 100px 100px;
}
.change .el-row{
    margin: 10px 0;
    color: rgb(39, 92, 136)
}
.change .el-row input{
    background: rgb(220, 220, 220);
    padding: 0;
    border: 0;
    height: 25px;
    width: 300px;
}
.change .el-button{
    margin-top: 20px;
    border-color: rgb(154, 220, 252);
    height: 25px;
    padding: 6px 15px
} */
</style>