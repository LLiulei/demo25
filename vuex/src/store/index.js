import Vue from 'vue'
import vuex from 'vuex'
// 挂载vuex方法
Vue.use(vuex)

// 引入操作文件
import dialog from './modules/dialog';
// 引入某个store对象

// 生成实例
export default new vuex.Store({
    // modules方法
    modules: {
        dialog
    },
    state: {
        // 共有的数据
    }
})