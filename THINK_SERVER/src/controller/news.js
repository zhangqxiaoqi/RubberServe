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
      .order('ID DESC')
      .where({ TYPE: 0 })
      .page(this.get('page'))
      .countSelect();
    const html = pagination(newsList, {}, option);
    this.assign({ newsList });
    this.assign('pagination', html);
    return this.display();
  }
  async homeAction() {
    const newsList = await this.model('rubber_news')
      .order('ID DESC')
      .limit(3)
      .select();
    return newsList;
  }
  async getNewsAction() {
    const list = await this.model('rubber_news')
      .order('ID DESC')
      .page(this.get('page'))
      .countSelect();
    this.assign({ list });
    return this.json({ code: 200, list });
  }
  /**
   *保存
   */
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
      const res = await this.model('rubber_news')
        .where({ ID: data.ID })
        .update(data);
      if (res) {
        return this.json({ code: 200, msg: '修改成功' });
      } else {
        return this.json({ code: -1, msg: '修改失败' });
      }
    }
  }
  /**
   * 删除
   */
  async delAction() {
    if (this.get('ID')) {
      const res = await this.model('rubber_news')
        .where({ ID: this.get('ID') })
        .delete();
      if (res) {
        return this.json({ code: 200, msg: '删除成功' });
      } else {
        return this.json({ code: -1, msg: '删除失败' });
      }
    } else {
      return this.json({ code: -1, msg: '没有获取相应ID' });
    }
  }
  /**
   *获取详情
   */
  async getDetailAction() {
    if (this.get('ID')) {
      const res = await this.model('rubber_news')
        .where({ ID: this.get('ID') })
        .find();
      return this.json({ code: 200, msg: '', data: res });
    } else {
      return this.json({ code: -1, msg: '没有获取相应ID' });
    }
  }
};
