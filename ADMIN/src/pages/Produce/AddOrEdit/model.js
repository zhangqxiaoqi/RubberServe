import { saveProduce, getDetail } from './service';
const moment = require('moment');
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'produceAddOrEdit',
  state: {
    text: 'loading...',
    loading: false,
    formData: {
      title_en: '', //英文标题
      title_cn: '', //中文标题
      content_cn: '', //中文内容
      content_en: '', //英文内容
      digest_cn: '', //中文内容纯文本
      digest_en: '', //英文内容纯文本
      cover: '', //封面
      id: null,
    },
  },

  effects: {
    *saveProduce(_, { call, put, select }) {
      const { formData } = yield select(state => state.produceAddOrEdit);

      if (!formData.title_cn || !formData.title_cn.length) {
        message.error('请输入中文标题！');
        return;
      }
      if (!formData.title_en || !formData.title_en.length) {
        message.error('请输入英文标题！');
        return;
      }
      if (!formData.cover || !formData.cover.length) {
        message.error('请上传封面！');
        return;
      }
      if (!formData.content_cn || !formData.content_cn.length) {
        message.error('请输入中文内容！');
        return;
      }
      if (!formData.content_en || !formData.content_en.length) {
        message.error('请输入英文内容！');
        return;
      }
      const result = yield call(saveProduce, {
        ID: formData.id,
        TITLE_CN: formData.title_cn,
        TITLE_EN: formData.title_en,
        COVER: formData.cover,
        CONTENT_CN: formData.content_cn,
        CONTENT_EN: formData.content_en,
        DIGEST_CN: formData.digest_cn,
        DIGEST_EN: formData.digest_en,
      });
      if (result.code === 200) {
        message.success('提交成功');
        router.push('/produce');
      }
    },
    *getDetail({ payload }, { call, put, select }) {
      const { data } = yield call(getDetail, payload.ID);
      yield put({
        type: 'save',
        payload: {
          formData: {
            title_en: data.TITLE_EN, //英文标题
            title_cn: data.TITLE_CN, //中文标题
            content_cn: data.CONTENT_CN, //中文内容
            content_en: data.CONTENT_EN, //英文内容
            cover: data.COVER, //封面
            id: data.ID,
          },
        },
      });
    },
    *clearProduce(_, { call, put, select }) {
      yield put({
        type: 'save',
        payload: {
          formData: {
            title_en: '', //英文标题
            title_cn: '', //中文标题
            content_cn: '', //中文内容
            content_en: '', //英文内容
            cover: '', //封面
            id: null,
          },
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
};
