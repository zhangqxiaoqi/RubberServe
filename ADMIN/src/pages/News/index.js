import React, { Component } from 'react';
import { Button, Card, Input } from 'antd';
import { connect } from 'dva';
import SimpleList from '@/components/SimpleList';

import styles from './style.less';

@connect(({ news }) => news)
class Page extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '公司名称',
        dataIndex: 'factoryName',
        key: 'factoryName',
        width: 200,
      },
      {
        title: '注册码',
        dataIndex: 'registerCode',
        key: 'registerCode',
        width: 200,
      },
      {
        title: '反馈内容',
        dataIndex: 'content',
        key: 'content',
        showTooltip: true,
      },
      {
        title: '反馈时间',
        dataIndex: 'createTime',
        key: 'createTime',
        width: 200,
      },
      {
        title: '操作',
        width: 120,
        kery: 'id',
        render: (text, record) => (
          <div>
            <Button type="link" size="small">
              编辑
            </Button>
            <Button type="link" size="small">
              删除
            </Button>
          </div>
        ),
      },
    ];
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'news/fetch',
    });
  }
  controls = () => {
    const searchControl = { label: '内容', control: <Input /> };
    return [searchControl];
  };
  render() {
    const { text } = this.props;
    return (
      <SimpleList
        namespace="news"
        rowKey="id"
        fetchUrl="getNews"
        controls={this.controls()}
        columns={this.columns}
        {...this.props}
      ></SimpleList>
    );
  }
}

export default Page;
