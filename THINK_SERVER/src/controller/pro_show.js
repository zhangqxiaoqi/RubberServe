// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const info = await this.model('rubber_pro')
      .where({ ID: this.get('ID') })
      .find();
    this.assign({ info });
    return this.display();
  }
};
