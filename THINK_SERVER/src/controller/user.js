// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async loginAction() {
    const data = this.post();
    const count = await this.model('rubber_user')
      .where(`USER_NAME='${data.account}' and PWD='${data.password}'`)
      .count();
    return this.json(
      count
        ? { code: 200, msg: '成功' }
        : { code: -200, msg: '帐号密码不正确!' }
    );
  }
};
