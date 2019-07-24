import { getText } from './service';
import { modelMerge } from '../../utils/utils';

export default modelMerge({
  namespace: 'news',
  state: {
    text: 'loading...',
  },

  effects: {
    *fetch(_, { call, put }) {
      const { text } = yield call(getText);
      yield put({
        type: 'save',
        payload: {
          text,
        },
      });
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
