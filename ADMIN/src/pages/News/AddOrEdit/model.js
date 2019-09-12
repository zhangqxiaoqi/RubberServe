import { getText } from './service';

export default {
  namespace: 'newsAddOrEdit',
  state: {
    text: 'loading...',
    loading: false,
    formData: {
      title_en: '', //英文标题
      title_cn: '', //中文标题
      content_cn: '', //中文内容
      content_en: '', //英文内容
      cover: '', //封面
    },
  },

  effects: {
    *saveNews(_, { call, put, select }) {
      const { formData } = yield select(state => state.newsAddOrEdit);
      console.log(formData);
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
};
