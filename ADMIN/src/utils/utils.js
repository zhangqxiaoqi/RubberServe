/* eslint-disable no-underscore-dangle */
import { router } from 'umi';
import request from '@/utils/request';
import modelExtend from 'dva-model-extend';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = path => reg.test(path);

const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
const isDev = process.env.NODE_ENV === 'development';
const filterFirstRouter = breadcrumb => {
  const routes = breadcrumb.routes.filter(item => item.path !== '/');
  return { ...breadcrumb, routes };
};
const getAlarmList = (fetchUrl, params) => request(`/yapi/${fetchUrl}`, { ...params });
// 基础列表model
const baseListModel = {
  state: {
    _showExpend: false, // 显示高级
    _loading: false, // 列表加载
    _pagination: {
      // 分页参数
      showQuickJumper: true,
      current: 1,
      pageSize: 10,
      total: 0,
    },
    _dataList: [],
  },
  effects: {
    *_fetch({ payload }, { call, put, select }) {
      yield put({
        type: '_save',
        payload: { _loading: true },
      });
      const { searchInfo, _pagination } = yield select(state => state[payload.namespace]);
      const { Data, ok } = yield call(getAlarmList, payload.fetchUrl, {
        ...searchInfo,
        ...{ pageIndex: _pagination.current, pageSize: _pagination.pageSize },
      });
      if (!ok) {
        return;
      }
      yield put({
        type: '_save',
        payload: {
          _dataList: Data.restList,
          _pagination: { ..._pagination, ...{ total: Data.restCount } },
          _loading: false,
        },
      });
    },
  },
  reducers: {
    _save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};

const modelMerge = model => {
  return modelExtend(baseListModel, model);
};
export {
  isAntDesignProOrDev,
  isAntDesignPro,
  isUrl,
  filterFirstRouter,
  baseListModel,
  isDev,
  modelMerge,
};
