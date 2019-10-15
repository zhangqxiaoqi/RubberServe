// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const info = await this.model('rubber_info')
      .where({ TYPE: 1 })
      .find();
    console.log(info);
    this.assign({ info: info });
    return this.display();
  }
  async getDetailAction() {
    const info = await this.model('rubber_info')
      .where({ TYPE: this.get('TYPE') })
      .find();
    return this.json({ code: 200, data: info });
  }
  /**
   *保存
   */
  async saveAboutAction() {
    const data = this.post();
    const res = await this.model('rubber_info')
      .where({ TYPE: data.TYPE })
      .update(data);
    if (res) {
      return this.json({ code: 200, msg: '操作成功' });
    } else {
      return this.json({ code: -1, msg: '操作失败' });
    }
  }
};
