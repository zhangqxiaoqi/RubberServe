import { newsDel } from './service';
import { modelMerge } from '../../utils/utils';
import { message } from 'antd';

export default modelMerge({
  namespace: 'news',
  state: {
    text: 'loading...',
  },

  effects: {
    *del({ payload }, { call, put }) {
      const { ok } = yield call(newsDel, payload.ID);
      if (ok) {
        message.success('删除成功！');
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
});
