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
    const newsList = await this.model('rubber_news')
      .order('CREATE_TIME DESC')
      .where({ TYPE: 0 })
      .page(this.get('page'))
      .countSelect();
    const html = pagination(newsList, {}, option);
    this.assign({ newsList });
    this.assign('pagination', html);
    return this.display();
  }
  async getNewsAction() {
    const list = await this.model('rubber_news')
      .order('CREATE_TIME DESC')
      .page(this.get('page'))
      .countSelect();
    this.assign({ list });
    return this.json({ code: 200, list });
  }
  async saveAction() {
    const data = this.post();
    // 如果没有ID，则是新增
    if (think.isEmpty(data.ID)) {
      const res = await this.model('rubber_news').add(data);
      if (res) {
        return this.json({ code: 200, msg: '新增成功' });
      } else {
        return this.json({ code: -1, msg: '新增失败' });
      }
    } else {
      // 更新
      const res = await this.model('rubber_news').update(data);
      if (res) {
        return this.json({ code: 200, msg: '修改成功' });
      } else {
        return this.json({ code: 200, msg: '修改失败' });
      }
    }
  }
};
