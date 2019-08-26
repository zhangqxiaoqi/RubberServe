// import {Common} from '../utils/common.js';
const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const newsList = await this.model('rubber_news').where({TYPE: 0}).select();
    console.log('新闻' + newsList.length);
    this.assign({newsList});
    return this.display();
  }
};
