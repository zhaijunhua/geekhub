<template>
    <div class="write">
        <div class="title">
            <p>写博客</p>
        </div>
        <div class="content">
                <div class="blogTitle">
                        
                            <div class="left"><span>文章标题:</span></div>
                            <div class="center"><el-input size="medium" v-model="blogTitle"></el-input></div>
                            <div class="right"><el-button size="medium" @click="dialogVisible = true">发布</el-button></div>
                        
                        <!--弹出层-->
                            <el-dialog
                                :visible.sync="dialogVisible"
                                width="46%"
                                :before-close="handleClose"
                                center>
                                <el-form size="mini">
                                    <el-form-item label="文章标题">
                                        <el-input v-model="blogTitle" autocomplete="off">{{blogTitle}}</el-input>
                                    </el-form-item>
                                    <el-form-item label="文章分类">
                                        <el-select v-model="form.cate" placeholder="请选择" @focus="getLabel">
                                            <el-option
                                            v-for="(item,index) in category"
                                            :label="item"
                                            :key="cateId(index)"
                                            :value="item">
                                            </el-option>
                                        </el-select>
                                        <el-select v-model="lang" placeholder="请选择" @focus="child_Label">
                                            <el-option
                                            v-for="item in language"
                                            :key="item.id"
                                            :label="item.label"
                                            :value="item"
                                            @click="child_Label">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-checkbox-group v-model="private">
                                            <el-checkbox label="私密资源(选择此项后仅为内部人员可见)"></el-checkbox><br/>
                                        </el-checkbox-group>
                                         <el-checkbox-group v-model="draft">
                                            <el-checkbox label="存为草稿"></el-checkbox><br/>
                                        </el-checkbox-group>
                                    </el-form-item>
                                    <el-form-item>
                                        <span>文章描述</span>
                                        <el-input type="textarea" 
                                        placeholder="描述不支持HTML标签等代码形式的文字，详细描述可获得我们推荐，限50字内" 
                                        rows="8" 
                                        maxlength="50" 
                                        size="mini"                    
                                        v-model="description">
                                        </el-input>
                                    </el-form-item>
                                </el-form>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="submitBlog">发布</el-button>
                                    <el-button @click="dialogVisible = false">取 消</el-button>    
                                </span>
                            </el-dialog>
                </div>
                <div class="edit">
                     <mavon-editor 
                     v-model="context" 
                     :ishljs="false" 
                     :toolbars="toolbars" 
                     class="a" 
                     ref=md 
                     @imgAdd="$imgAdd"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.write{
    width: 63%;
    margin: 0 auto;
    position: relative;
    padding-bottom: 10px;
    top: 20px;
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    .title{
        background: -webkit-linear-gradient(left, #3da9db, #99cfff); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #3da9db, #99cfff); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #3da9db, #99cfff); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #1184b9 , #99cfff); /* 标准的语法 */
        height: 50px;
        color: #fefefe;
        font-size: 22px;
        line-height: 50px;
        font-weight: bold;
        font-family: '微软雅黑';
        padding-left: 15px;
    }
    .content{

        width: 100%;
        position: relative;
        padding-bottom: 40px;
        .blogTitle{
            width: 97%;
            margin: 0 auto;
            position: relative;
            top: 10px;
            display: flex;
            .left{
                width: 100px;
                span{
                    font-size: 18px;
                    color: #194772;
                    vertical-align: center;
                    line-height: 36px;
                }
            }
            .center {
                flex: 1;
                .el-input{
                    // border-color:  #929eaa;
                    margin-left: 15px;
                    height: 36px;
                    border: none;
                    // background-color: #edecec;
                }
            }
            .right{
                margin-left: 56px;
                width: 120px;
                .el-button {
                    width: 94px;
                    letter-spacing: 4px;
                }
            }
            .el-dialog{
                .el-form {
                    width: 56%;
                    margin: 0 auto;
                    .el-form-item__label{
                        color: #929eaa;
                    }
                    .el-select{
                    width: 90px;
                    // border-color: red;
                    }
                    .el-input {
                        width: 194px;
                        // border: 1px solid #acb5be;
                        border-radius: 4px;
                    }
                    .el-textarea {
                        width: 240px;
                        // border:1px solid #acb5be;
                        border-radius: 4px;
                    }
                    span{
                        vertical-align: top;
                    }

                }
                .el-button{
                    border: 2px solid #99ddfc;
                    color: #194772;
                    font-size: 14px;
                    width: 90px;
                }
            }
        }
        .a{
            width: 97%;
            margin:0 auto;
            height: 600px;
        }
        .edit {
            position: relative;
            top: 30px;
        }
    }
}
</style>
<script>
// import qiniu from 'qiniu-js';
export default {
    name: 'write',
    props: {
        value: String,
        model: {
            type: [String, Object]
        }
    },
    data() {
        return {
            blogTitle: '', // 文章标题
            dialogVisible: false, // 设置弹出层不可见
            dialogFormVisible: false,
            radioVisible: false,
            context: '', // 输入的内容
            lang: '', // 编程语言类型
            radio: '', // 选项的值
            // 获取大标签分类
            category: [], // 博客标签
            language: [], // 这个分类关于子标签
            checkList: [],
            private: '', // 是否存为私密资源
            isPrivate: 0, // 判断是否为私有资源，是-1，不是-0，默认为0
            draft: '', // 判断是否保存为草稿
            form: {
                blogTitle: '', // 博客名称
                cate: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            description: '', // 博客描述内容
            // markdown插件的显示工具
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式
                preview: true // 预览
            },
            // 保存图片的相关值
            imgFile: {
                token: '', // 图片上传到七牛的token值
                filename: '',
                file: '',
                domain: '',
                imgUrl: ''
            } // 图片上传
        };
    },
    computed: {
    },
    mounted() {
        // this.getLabel(); // 自动执行获取标签
        // this.getUser(); // 获取当前用户信息
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        // 获取当前用户
        // getUser() {
        //     fetch('http://47.101.200.155:9999/user/getUser', {
        //         method: 'POST',
        //         cache: 'default',
        //         mode: 'cors',
        //         credentials: 'include'
        //     })
        //         .then((response) => response.json())
        //         .then((response) => {
        //             console.log('json' + JSON.stringify(response));
        //             this.commentUserId = response.data.userId;
        //             console.log('当前用户id' + this.commentUserId);
        //         });
        // },
        // // 上传图片到七牛网
        $imgAdd(pos, $file) {
            let url = 'http://120.79.94.90:8080/page/QiniuUpToken';
            this.imgFile.file = $file;
            let fileName = $file.name; // 获取图片名称
            this.imgFile.filename = fileName;
            // 上传的本地文件绝对路径
            // var suffix = file.name; // 后缀名
            let data = { // 传参
                suffix: fileName
            };
            if (data) {
                let imgArray = []; // 正则连接
                Object.keys(data).forEach(key => imgArray.push(key + '=' + data[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + imgArray.join('&');
                } else {
                    url += '&' + imgArray.join('&');
                }
            }
            // 先从自己的服务端拿到token
            fetch(url, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((json) => {
                    // console.log()
                    this.imgFile.token = json.data.token;
                    this.imgFile.domain = json.data.domain;
                    console.log(this.imgFile);
                    let config = {
                        useCdnDomain: true
                        // region: qiniu.region.z0
                    };
                    let param = new FormData(); // 创建form对象
                    param.append('file', this.imgFile.file);
                    param.append('token', this.imgFile.token);
                    param.append('config', config);
                    console.log(param);
                    fetch('http://up-z0.qiniu.com/', {
                        method: 'POST',
                        cache: 'default',
                        mode: 'cors',
                        header: {
                            'Content-Type': 'multipart/form-data'
                        },
                        body: param
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            this.imgFile.imgUrl = this.imgFile.domain + '/' + response.key;
                            console.log(this.imgFile.imgUrl); // 输出图片的七牛最终地址
                            console.log(response);
                            this.$refs.md.$img2Url(pos, 'http://' + this.imgFile.imgUrl);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // 获取上传资源的分类标签
        getLabel() {
            fetch('http://120.79.94.90:8080/page/lable/lable_parent')
                .then(response => response.json())
                .then((getLable) => {
                    console.log(getLable.data);
                    this.category = getLable.data;
                })
                .catch((error) => {
                    console.log('error' + error);
                });
        },
        // 给获取的标签设置ID，value值
        cateId(index) {
            return index;
        },
        // 获取子标签的值
        child_Label() {
            let url = 'http://120.79.94.90:8080/page/lable/getLable_child_parent';
            let label = {
                PL_content: this.form.cate
            };
            if (label) {
                let labelArray = []; // 正则连接
                Object.keys(label).forEach(key => labelArray.push(key + '=' + label[key]));
                if (url.search(/\?/) === -1) {
                    url += '?' + labelArray.join('&');
                } else {
                    url += '&' + labelArray.join('&');
                }
            }
            // let PL_content = this.form.cate;
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(label)
            })
                .then((response) => response.json())
                .then((childlabel) => {
                    if (childlabel.code === 100001) {
                        this.language = childlabel.data;
                        console.log(JSON.stringify(this.language));
                    }
                })
                .catch((error) => {
                    console.error('error', error);
                    console.log(error);
                });
        },
        // 书写博客内容的上传
        submitBlog() {
            let limitPrivate = this.private;
            console.log('是否为私有资源' + limitPrivate);
            // 判断是否为私有资源
            if (limitPrivate) {
                this.isPrivate = 1;
            } else {
                this.isPrivate = 0;
            }
            let isDraft = this.draft;
            // 判断是否为草稿true为是，false 为直接发布博客
            if (isDraft) {
                let url = 'http://120.79.94.90:8080/blogs/insetOneBlog';
                let contentData = {
                    blogsTitle: this.blogTitle,
                    blogsContent: this.context,
                    blogsParentLable: this.form.cate,
                    blogsChildrenLable: this.lang,
                    blogsPermission: this.isPrivate,
                    blogsDescription: this.description
                };
                console.log('这里是保存为草稿' + JSON.stringify(contentData));
                fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(contentData)
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if (responseData.code === 100001) {
                            console.log('submit success');
                        }
                    })
                    .catch((error) => {
                        console.error('error', error);
                        console.log(error);
                    });
            } else {
                let url = 'http://120.79.94.90:8080/blogs/insetOneBlog';
                let contentData = {
                    blogsTitle: this.blogTitle,
                    blogsContent: this.context,
                    blogsParentLable: this.form.cate,
                    blogsChildrenLable: this.lang,
                    blogsPermission: this.isPrivate,
                    blogsDescription: this.description
                };
                console.log('这里是正式的资源发布' + JSON.stringify(contentData));
                fetch(url, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(contentData)
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if (responseData.code === 100001) {
                            console.log('submit success');
                        }
                    })
                    .catch((error) => {
                        console.error('error', error);
                        console.log(error);
                    });
            }
            this.dialogVisible = false;
        }
        // getUser() {
        //     fetch('http://47.101.200.155:9999/user/getUser', {
        //         method: 'POST',
        //         cache: 'default',
        //         mode: 'cors',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded'
        //         }
        //     })
        //         .then((response) => response.text())
        //         .then((response) => {
        //             console.log('json' + JSON.stringify(response));
        //             this.commentUserId = response.data.commentUserId;
        //             })
        // },
    }
};
</script>
