// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const newsInfo = await this.model('rubber_news').where({ID: this.get('ID')}).find();
    this.assign({newsInfo});
    return this.display();
  }
};
