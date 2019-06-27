
const Common = {
  success(message) {
    return {code: 0, message: message || '成功!'};
  },
  error(message) {
    return {code: 0, message: message || '失败!'};
  },
  ColumnTitle(lan) { // 栏目标题
    if (lan === 'CN') {
      return {
        aboutUS: '关于我们',
        productCenter: '产品中心',
        seeMore: '查看更过',
        home: '首页',
        news: '新闻动态',
        device: '生产设备',
        contact: '联系我们'
      };
    } else {
      return {
        aboutUS: 'About Us',
        productCenter: 'Product Center',
        seeMore: 'See More',
        home: 'HOME',
        news: 'NEWS',
        device: 'DEVICE',
        contact: 'CONTACT'
      };
    }
  }
}
;
export {Common};
