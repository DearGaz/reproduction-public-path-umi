/*引入全部，并作为usersService对象 */
import { getTestData } from './service';
/*全局model,所有页面都可以引用 */
export default {
  /*全局唯一名字 */
  namespace: 'simple',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {},
  },

  /*dva 的 effects 是通过 generator 组织的。Generator 返回的是迭代器，通过 yield 关键字实现暂停功能。
        这是一个典型的 dva effect，通过 yield 把异步逻辑通过同步的方式组织起来。*/
  effects: {
    /*put
                用于触发 action
                call
                用于调用异步逻辑，支持 promise
                select
                用于从 state 里获取数据*/
    *fetch({ payload }, { call, put }) {
      const result = yield call(getTestData, { num: 12 });
      if (result && result.result) {
        yield put({ type: 'save', payload: { data: result.data } });
      }
    },
  },

  /*reducer 是一个函数，接受 state 和 action，返回老的或新的 state 。即：(state, action) => state*/
  reducers: {
    save(state, action) {
      /*三个点(扩展运算符)的用法之一：展开各属性，同类属性，后面的值会覆盖前面的 */
      return { ...state, ...action.payload };
    },
  },
};
