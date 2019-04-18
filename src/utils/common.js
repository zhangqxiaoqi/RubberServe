
module.exports = class {
  success(message) {
    return {code: 0, message: message || '成功!'};
  }
  error(message) {
    return {code: 0, message: message || '失败!'};
  }
  ColumnTitle(lan) { // 栏目标题
    if (lan === 'CN') {
      return {
        aboutUS: '关于我们',
        productCenter: '产品中心',
        seeMore: '查看更过'

      };
    } else {
      return {
        aboutUS: 'About Us',
        productCenter: 'Product Center',
        seeMore: 'See More'
      };
    }
  }
}
;
