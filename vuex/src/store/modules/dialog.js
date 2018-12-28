// 模块中的数据
const state = {
    num: 1000
}
// 派生数据 会被缓存
const getters = {
    // 格式化事件 yyyy-mm-dd hh:mm:ss
    data(state) {
        // 实例date
        let date = new Date();
        let year = date.getFullYear(), // 得到年份
            month = ((date.getMonth() + 1).toString().padStart(2,'0')), // 得到月份
            day = date.getDate().toString().padStart(2, '0'),// 日
            hour = date.getHours().toString().padStart(2, '0'),// 小时
            min = date.getMinutes().toString().padStart(2, '0'),// 分钟
            sec = date.getSeconds().toString().padStart(2, '0');// 秒数
        return `${year}-${month}-${day}  ${hour}:${min}:${sec}`
    }, 
}

// 模块中同步的改变
const mutations = {
    changeNum(state, {payload}) {
        state.num = payload == '+' ? state.num + 1 : state.num - 1;
    }
}

// 模块中的异步改变
const actions = {
    changeNumAsync({commit}, action) {
        // action中可以返回promise，当异步操作完成之后通知组件
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('changeNum', action)
                resolve();
            }, 1000);
        })
    }
}

// 抛出值
export default {
    // 命名空间 抛出
    nameapaced: true,
    state,
    getters,
    mutations,
    actions
}