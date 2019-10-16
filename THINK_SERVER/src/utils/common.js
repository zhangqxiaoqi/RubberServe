const Common = {
  success(message) {
    return { code: 0, message: message || '成功!' };
  },
  error(message) {
    return { code: 0, message: message || '失败!' };
  },
  ColumnTitle(lan) {
    // 栏目标题
    if (lan === 'CN') {
      return {
        aboutUS: '关于我们',
        productCenter: '产品中心',
        seeMore: '查看更多',
        home: '首页',
        news: '新闻动态',
        newsCenter: '新闻中心',
        companyNew: '公司新闻',
        tradeNews: '行业新闻',
        device: '生产设备',
        contact: '联系我们',
        companyProfile: '公司简介',
        cultureculture: '资质荣誉',
        culture: '企业文化',
        contactWay: '联系方式',
        onlineMessage: '在线留言',
        phone: '电话',
        email: '邮箱',
        address: '地址',
        postcode: '邮编',
        name: '姓名',
        leave_meg: '留言',
        submit: '提交',
        reset: '重置',
        product_detail: '产品详细'
      };
    } else {
      return {
        aboutUS: 'About Us',
        productCenter: 'Product Center',
        seeMore: 'See More',
        home: 'HOME',
        news: 'NEWS',
        companyNew: 'Company News',
        tradeNews: 'Trade News',
        device: 'DEVICE',
        contact: 'CONTACT',
        companyProfile: 'Company Profile',
        cultureculture: 'Culture Culture',
        honor: 'Honor',
        culture: 'Enterprise Culture',
        contactWay: 'Contact Way',
        onlineMessage: 'Online Message',
        phone: 'CALL',
        email: 'EMAIL',
        address: 'ADDRESS',
        postcode: 'POSTCODE',
        name: 'NAME',
        leave_meg: 'LEAVE MESSAGE',
        submit: 'SUBMIT',
        reset: 'RESET',
        product_detail: 'PRODUCT DETAIL',
        newsCenter: 'NEWS CENTER'
      };
    }
  }
};
export { Common };
