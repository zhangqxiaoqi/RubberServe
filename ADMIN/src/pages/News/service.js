import request from '@/utils/request';

/**
 *新闻珊瑚
 * @param {*} ID
 */
export function newsDel(ID) {
  return request('/api/news/del', { params: { ID } });
}
