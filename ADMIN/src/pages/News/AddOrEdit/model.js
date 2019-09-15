import { saveNews } from './service';
const moment = require('moment');
import { message } from 'antd';

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
      type: 0,
    },
  },

  effects: {
    *saveNews(_, { call, put, select }) {
      const { formData } = yield select(state => state.newsAddOrEdit);
      const result = yield saveNews({
        TITLE_CN: formData.title_cn,
        TITLE_EN: formData.title_en,
        COVER: formData.cover,
        CONTENT_CN: formData.content_cn,
        CONTENT_EN: formData.content_en,
        TYPE: formData.type,
        CREATE_TIME: moment().format('YYYY-MM-DD HH:mm:ss'),
      });
      if (result.code === 200) {
        message.success('提交成功');
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
};
