// import {Common} from '../utils/common.js';
const Base = require('./base.js');
const pagination = require('../utils/pagination');
module.exports = class extends Base {
  async indexAction() {
    const option = {
      desc: false, // show description
      pageNum: 1,
      url: '', // page url, when not set, it will auto generated
      class: 'page', // pagenation extra class
      text: {
        next: 'Next',
        prev: 'Prev',
        total: 'count: __COUNT__ , pages: __PAGE__'
      }
    };
    const list = await this.model('rubber_product').order('ID DESC').page(this.get('page')).countSelect();
    const html = pagination(list, {}, option);
    this.assign({list});
    this.assign('pagination', html);
    return this.display();
  }
};
