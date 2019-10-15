import request from '@/utils/request';

/**
 *新闻珊瑚
 * @param {*} ID
 */
export function produceDel(ID) {
  return request('/api/produce/del', { params: { ID } });
}
