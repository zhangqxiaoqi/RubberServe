const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    const user = await this.model('rubber_user').where({USER_NAME: 'admin'}).find();
    console.log(user);
    this.assign({
      user: user,
      productCenterDes: '唯星成立于2005年，秉承"整合数字资源,技术驱动营销"的理念，专注于数字营销技术、产品、资源、服务的创新与整合，为传统企业互联网商业转型各个阶段提供全方位应用支撑。11',
      productImages: [{id: '1', productName: '宾馆酒店铺地材料', url: 'static/images/inp1.jpg'}, {id: '1', productName: '宾馆酒店铺地材料', url: 'static/images/inp1.jpg'}, {id: '1', productName: '宾馆酒店铺地材料', url: 'static/images/inp1.jpg'}]
    });
    return this.display();
  }
};
