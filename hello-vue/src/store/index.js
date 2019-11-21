import Vue from 'vue';
import Vuex from 'vuex';
import {
  ADDTODO, ADDTODO2, CHANGEMSG, CHECKTODOLIST, CHECKTODOLIST2
} from './mutationsType';
import {queryTodoListData} from '../service/todoService';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    list: [], // 选软数据，返回给view层的东西
    list2: [],
    msg: 'hello',

  },
  mutations: {
    [CHANGEMSG](state, payload) {
      state.msg = payload;
    },
    /* 第一个参数是state,第二个参数state[属性]的值等于什么 */
    [CHECKTODOLIST](state, data) {
      /* 函数执行赋值操作 */
      state.list = data.data;
    },
    [ADDTODO](state, payload) {
      console.log(payload);
      state.list.push(payload);
    },
    [ADDTODO2](state, payload) {
      console.log(payload);
      state.list2.push(payload);
    },
    [CHECKTODOLIST2](state, payload) {
      state.list2 = payload.data;
    }
  },
  actions: {
    /* 到此为止,VUEX的数据修改已经完成 */
    /* 数据的来源 dispatch=> params => :info */
    async [CHECKTODOLIST]({commit}, info) {
      const { data } = await queryTodoListData(info.url);
      commit(CHECKTODOLIST, data);
    },
    async [ADDTODO]({commit}, payload) {
      commit(ADDTODO, payload);
    },
    async [ADDTODO2]({commit}, payload) {
      commit(ADDTODO2, payload);
    },
    async [CHECKTODOLIST2]({commit}, payload) {
      const {data} = await queryTodoListData(payload.url);
      commit(CHECKTODOLIST2, data);
    },
    [CHANGEMSG]({commit}, payload) {
      commit(CHANGEMSG, payload);
    }

  }


});
