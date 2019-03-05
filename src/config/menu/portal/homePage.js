/**
 * @file 关于Angela首页菜单配置
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
export default {
    homeTopNavMenu: [{
        key: 'homePage',
        label: '首页',
        route: '/'
    }, {
        key: 'blog',
        label: '博客',
        route: '',
        childrens: [{
            key: 'webFront',
            label: '前端',
            route: ''
        }]
    }, {
        key: 'download',
        label: '下载',
        route: '/'
    }, {
        key: 'content',
        label: '内容',
        route: '/'
    }]
    // sideBarMenu: [{
    //     key: 'recommend',
    //     label: '站内导航',
    //     route: '/',
    //     index: '1'
    // }, {
    //     key: 'recommend',
    //     label: '推荐',
    //     route: '/',
    //     index: '2'
    // }, {
    //     key: 'focus',
    //     label: '关注',
    //     route: '/',
    //     index: '3'
    // }, {
    //     key: 'web',
    //     label: '前端',
    //     route: '/',
    //     index: '4'
    // }, {
    //     key: 'Python',
    //     label: 'Python',
    //     route: '/',
    //     index: '5'
    // }, {
    //     key: 'backStage',
    //     label: '后台',
    //     route: '/',
    //     index: '6'
    // }, {
    //     key: 'Andriod',
    //     label: 'Andriod',
    //     route: '/',
    //     index: '7'
    // }, {
    //     key: 'new',
    //     label: '技术新风向',
    //     route: '/',
    //     index: '8'
    // }, {
    //     key: 'other',
    //     label: '其他',
    //     route: '/',
    //     index: '9'
    // }, {
    //     key: 'other',
    //     label: '其他',
    //     route: '/',
    //     index: '10'
    // }, {
    //     key: 'other',
    //     label: '其他',
    //     route: '/',
    //     index: '11'
    // }]
};