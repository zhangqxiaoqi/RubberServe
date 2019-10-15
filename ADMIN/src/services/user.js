import request from '@/utils/request';

export async function queryCurrent(account, password) {
  return request.post('/api/user/login', { data: { account, password } });
}
