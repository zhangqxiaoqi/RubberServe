import { getDetail, saveAbout } from './service';
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'about',
  state: {
    text: 'loading...',
    formData: {
      TYPE: 0, //0 主页，1 关于我们， 2 资质荣誉，3 企业文化，4 设备 ， 5 联系我们
      CONTENT_CN: '', //中文内容
      CONTENT_EN: '', //英文内容
    },
  },

  effects: {
    *getDetail({ payload }, { call, put }) {
      const { data, ok } = yield call(getDetail, payload.TYPE);
      if (ok) {
        yield put({
          type: 'save',
          payload: {
            formData: {
              TYPE: data.TYPE,
              CONTENT_CN: data.CONTENT_CN,
              CONTENT_EN: data.CONTENT_EN,
            },
          },
        });
      }
    },
    *saveAbout({ payload }, { call, put, select }) {
      const { formData } = yield select(state => state.about);
      const { ok } = yield call(saveAbout, formData);
      if (ok) {
        message.success('提交成功');
        router.push('/');
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
