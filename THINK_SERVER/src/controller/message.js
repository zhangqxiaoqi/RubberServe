// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async getMessageAction() {
    const list = await this.model('rubber_message')
      .order('ID DESC')
      .page(this.get('page'))
      .countSelect();
    this.assign({ list });
    return this.json({ code: 200, list });
  }
  async saveAction() {
    const data = this.post();
    const res = await this.model('rubber_message').add(data);
    if (res) {
      return this.json({ code: 200, msg: '新增成功' });
    } else {
      return this.json({ code: -1, msg: '新增失败' });
    }
  }
};
