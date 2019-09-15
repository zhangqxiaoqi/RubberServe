import request from '@/utils/request';

/**
 * 保存
 * @param {*} data
 */
export function saveNews(data) {
  return request('/api/news/save', { method: 'POST', data: data });
}
/**
 * 获取详情
 * @param {*} ID
 */
export function getNewDetail(ID) {
  console.log('ID');
  console.log(ID);
  return request('/api/news/getDetail', { method: 'GET', params: { ID: ID } });
}
