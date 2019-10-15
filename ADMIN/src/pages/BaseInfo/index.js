import React, { Component } from 'react';
import { Button, Card } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';

import styles from './style.less';

@connect(({ baseInfo }) => baseInfo)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'baseInfo/fetch',
    // });
  }
  handleAboutPage = type => {
    router.push(`/about?TYPE=${type}`);
  };
  render() {
    const { text } = this.props;
    return (
      <div>
        {/* <Card title="基本信息" style={{ marginBottom: 10 }}>
          <div></div>
        </Card> */}
        <Card title="关于我们" style={{ marginBottom: 10 }}>
          <div className="link-box" onClick={() => this.handleAboutPage(1)}>
            公司简介
          </div>
          <div className="link-box" onClick={() => this.handleAboutPage(2)}>
            资质荣誉
          </div>
          <div className="link-box" onClick={() => this.handleAboutPage(3)}>
            企业文化
          </div>
        </Card>
        {/* <Card title="联系我们" style={{ marginBottom: 10 }}>
          <div className="link-box">联系方式</div>
          <div className="link-box">在线留言</div>
        </Card> */}
      </div>
    );
  }
}

export default Page;
