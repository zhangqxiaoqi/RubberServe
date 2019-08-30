// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const companyInfo = await this.model('company_info').find();
    const info = await this.model('rubber_info').where({TYPE: 5}).find();
    this.assign({info});
    this.assign({companyInfo});
    return this.display();
  }
};
