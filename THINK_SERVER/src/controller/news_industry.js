// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const info = await this.model('rubber_info').where({TYPE: 2}).find();
    this.assign({info: info});
    return this.display();
  }
};
