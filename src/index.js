/**
 * @file vue组件挂载、路由配置、以及全局模块的引入
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
import Vue from 'vue';
import router from './route/index';
import store from './store/store';
import ElementUI from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll';
import axios from 'axios';
import qs from 'qs';
// element-ui样式引入
import 'element-ui/lib/theme-chalk/index.css';
// import 全局配置样式
import './resources/css/common.css';
// markdown插件
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
import marked from 'marked';
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code, true).value;
        } else {
            return hljs.highlightAuto(code).value;
        }
    }
});

let vm = new Vue({
    el: '#geekhub',
    router,
    store
});
Vue.use(ElementUI);
Vue.use({vm});
Vue.use(mavonEditor);
Vue.use(infiniteScroll);

// 切换 vue-resource
Vue.prototype.$http = axios;
axios.defaults.withCredentials = true;// axios跨域cookies
Vue.prototype.qs = qs;
// 解析markdown
Vue.prototype.marked = marked;