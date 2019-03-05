/**
 * @file 异步组件定义 用于webpack构建懒加载
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
// 404页面
export const error = resolve => require(['./views/error/index.vue'], resolve);
// 首页组件
export const homeContent = resolve => require(['./views/portal/index.vue'], resolve);

// 登录注册组件
// export const enterContent = resolve => require(['./views/enter/index.vue'], resolve);

// 文章详情组件
// export const detailsContent = resolve => require(['./views/details/index.vue'], resolve);
// 登录
export const signIn = resolve => require(['./views/signIn/index.vue'], resolve);
// 注册
export const signUp = resolve => require(['./views/signUp/index.vue'], resolve);
// 重置密码
export const reset = resolve => require(['./views/reset/index.vue'], resolve);
// 博客
export const article = resolve => require(['./views/blogContent/index.vue'], resolve);
// 写博客
export const write = resolve => require(['./views/writeBlog/index.vue'], resolve);
// 个人中心
export const personalCenter = resolve => require(['./views/personalCenter/index.vue'], resolve);

export const person = resolve => require(['./views/personalCenter/personItems/person/index.vue'], resolve);
export const myBlogs = resolve => require(['./views/personalCenter/personItems/myBlogs/index.vue'], resolve);
export const apply = resolve => require(['./views/personalCenter/personItems/apply/index.vue'], resolve);
export const information = resolve => require(['./views/personalCenter/personItems/information/index.vue'], resolve);
export const myDraft = resolve => require(['./views/personalCenter/personItems/myDraft/index.vue'], resolve);
export const myResource = resolve => require(['./views/personalCenter/personItems/myResource/index.vue'], resolve);
export const changePassword = resolve => require(['./views/personalCenter/personItems/changePassword/index.vue'], resolve);
export const changeEmail = resolve => require(['./views/personalCenter/personItems/changeEmail/index.vue'], resolve);
// 他人的个人中心
export const others = resolve => require(['./views/othersCenter/index.vue'], resolve);
// 首页组件
export const download = resolve => require(['./views/download/index.vue'], resolve);
// 下载涉及组件
export const recentUpload = resolve => require(['./views/download/recentUpload/index.vue'], resolve);
export const mostDownload = resolve => require(['./views/download/mostDownload/index.vue'], resolve);
// 上传资源
export const upload = resolve => require(['./views/upload/index.vue'], resolve);
export const innerDownload = resolve => require(['./views/innerDownload/index.vue'], resolve);
export const draft = resolve => require(['./views/draft/index.vue'], resolve);