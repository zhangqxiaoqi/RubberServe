import request from '@/utils/request';

/**
 * 保存
 * @param {*} data
 */
export function saveProduce(data) {
  return request('/api/pro/save', { method: 'POST', data: data });
}
/**
 * 获取详情
 * @param {*} ID
 */
export function getDetail(ID) {
  console.log('ID');
  console.log(ID);
  return request('/api/pro/getDetail', { method: 'GET', params: { ID: ID } });
}
