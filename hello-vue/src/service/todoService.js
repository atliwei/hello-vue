import axios from 'axios';

/* 封装请求的函数 */
export const queryTodoListData = url => axios.get(url);
