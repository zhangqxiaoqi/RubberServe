import { Common } from '../utils/common.js';

const Base = require('./base.js');
module.exports = class extends Base {
  async indexAction() {
    const user = await this.model('rubber_user')
      .where({ USER_NAME: 'admin' })
      .find();
    // const companyInfo = await this.model('company_info').find();
    const proList = await this.controller('pro').homeAction();
    const newsList = await this.controller('news').homeAction();

    this.assign({
      user: user,
      productImages: proList,
      newsList
    });
    return this.display();
  }
  // 切换菜单
  async changeMenuTypeAction() {
    const type = this.post('type');
    await this.session('menuType', type);
    return this.json(Common.success());
  }

  // 切换语言
  async switchLanguageAction() {
    const lan = this.post('lan');
    await this.session('language', lan);
    return this.json(Common.success());
  }
};
