/**
 * @file store全局状态组织入口
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import portal from './modules/portal/index';
import giveLike from './modules/giveLike/index';
import follow from './modules/follow/index';
import user from './modules/signIn/index';
import getblogger from './modules/getblogger/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portal: portal,
        giveLike: giveLike,
        follow: follow,
        signIn: user,
        getblogger: getblogger
    }
});