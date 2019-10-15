import { saveProduce, getDetail } from './service';
const moment = require('moment');
import { message } from 'antd';
import router from 'umi/router';

export default {
  namespace: 'proAddOrEdit',
  state: {
    text: 'loading...',
    loading: false,
    fileList: [],
    formData: {
      title_en: '', //英文标题
      title_cn: '', //中文标题
      content_cn: '', //中文内容
      content_en: '', //英文内容
      imgs: '', //封面
      id: null,
    },
  },

  effects: {
    *saveProduce(_, { call, put, select }) {
      const { formData, fileList } = yield select(state => state.proAddOrEdit);

      if (!formData.title_cn || !formData.title_cn.length) {
        message.error('请输入中文标题！');
        return;
      }
      if (!formData.title_en || !formData.title_en.length) {
        message.error('请输入英文标题！');
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
      if (!fileList.length) {
        message.error('请上传图片');
        return;
      }
      const imgs = [];
      fileList.forEach(item => {
        if (item.thumbUrl) {
          imgs.push({
            uid: item.uid,
            name: item.name,
            status: 'done',
            url: item.response.data.url,
          });
        } else {
          imgs.push(item);
        }
      });
      console.log('imgs', imgs);
      const result = yield call(saveProduce, {
        ID: formData.id,
        TITLE_CN: formData.title_cn,
        TITLE_EN: formData.title_en,
        IMGS: JSON.stringify(imgs),
        CONTENT_CN: formData.content_cn,
        CONTENT_EN: formData.content_en,
      });
      if (result.code === 200) {
        message.success('提交成功');
        router.push('/pro');
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
            imgs: data.IMGS, //封面
            id: data.ID,
          },
          fileList: JSON.parse(data.IMGS),
        },
      });
    },
    *clearPro(_, { call, put, select }) {
      yield put({
        type: 'save',
        payload: {
          formData: {
            title_en: '', //英文标题
            title_cn: '', //中文标题
            content_cn: '', //中文内容
            content_en: '', //英文内容
            imgs: '', //封面
            id: null,
          },
          fileList: [],
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
