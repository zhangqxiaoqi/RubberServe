import { parse, stringify } from 'qs';
import { routerRedux } from 'dva/router';
import { delay } from 'dva/saga';
import { message } from 'antd';
import l from 'lodash';
import router from 'umi/router';

import { queryCurrent, queryMenus, logoutToken } from '@/services/user';

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
    submitting: false,
    account: '',
    password: '',
    // remember: false,
  },
  effects: {
    *logout(_, { put, call }) {
      yield put({
        type: 'user/save',
        payload: { currentUser: {} },
      });
      localStorage.setItem('user', '');
      router.push('/login');
    },

    *login(_, { put, call, all, select }) {
      const { account, password } = yield select(state => state.login);

      if (!account) {
        message.warning('请输入账号');
        return;
      }

      if (!password) {
        message.warning('请输入密码');
        return;
      }

      yield put({ type: 'updateSubmitting', payload: true });
      yield delay(1000);
      const { code } = yield call(queryCurrent, account, password);
      if (code !== 200) {
        yield put({ type: 'updateSubmitting', payload: false });
        message.error(msg);
        return;
      }
      yield put({
        type: 'user/save',
        payload: { currentUser: account },
      });
      localStorage.setItem('user', account);
      router.push('/');
      // yield put({ type: 'updateSubmitting', payload: false });

      // yield all([put(routerRedux.replace(redirect || '/'))]);
    },
  },
  reducers: {
    updateSubmitting(state, { payload: submitting }) {
      return { ...state, submitting };
    },

    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export default Model;
