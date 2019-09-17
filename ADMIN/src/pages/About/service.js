import request from '@/utils/request';

export function getDetail(TYPE) {
  return request('/api/about/getDetail', { params: { TYPE: TYPE } });
}
export function saveAbout(data) {
  return request('/api/about/saveAbout', { method: 'POST', data: data });
}
