import React, { Component } from 'react';
import { Button, Card } from 'antd';
import { connect } from 'dva';

import styles from './style.less';

@connect(({ baseInfo }) => baseInfo)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'baseInfo/fetch',
    // });
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <Card title="基本信息" style={{ marginBottom: 10 }}>
          <div></div>
        </Card>
        <Card title="产品中心" style={{ marginBottom: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="设备中心" style={{ marginBottom: 10 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="关于我们" style={{ marginBottom: 10 }}>
          <div className="link-box">公司简介</div>
          <div className="link-box">资质荣誉</div>
          <div className="link-box">企业文化</div>
        </Card>
        <Card title="联系我们" style={{ marginBottom: 10 }}>
          <div className="link-box">联系方式</div>
          <div className="link-box">在线留言</div>
        </Card>
      </div>
    );
  }
}

export default Page;
