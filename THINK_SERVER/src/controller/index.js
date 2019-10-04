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
      productCenterDes:
        '唯星成立于2005年，秉承"整合数字资源,技术驱动营销"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互联网商业转型各个阶段提供全方位应用支撑。11',
      productImages: proList,
      newsList
    });
    return this.display();
  }

  // 切换语言
  async switchLanguageAction() {
    const lan = this.post('lan');
    await this.session('language', lan);
    return this.json(Common.success());
  }
};
