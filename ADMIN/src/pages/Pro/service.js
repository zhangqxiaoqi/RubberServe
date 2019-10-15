import request from '@/utils/request';

/**
 *新闻珊瑚
 * @param {*} ID
 */
export function proDel(ID) {
  return request('/api/pro/del', { params: { ID } });
}
