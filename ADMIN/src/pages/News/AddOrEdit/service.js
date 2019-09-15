import request from '@/utils/request';

export function saveNews(data) {
  return request('/api/news/save', { method: 'POST', data: data });
}
