const ResultModel = require('../utils/common.js');
module.exports = class extends think.Controller {
  async __before() {
    // 获取公司基础信息
    const companyInfo = await this.model('company_info').find();

    // 初始化session，用于标示当前的语言版本，默认cn
    if (!await this.session('language')) {
      await this.session('language', 'CN');
    }
    const locale = await this.session('language');
    const columnTitle = new ResultModel().ColumnTitle(locale);
    this.assign({companyInfo, locale, columnTitle});
  }
};
