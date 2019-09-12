import React, { Component } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'dva';
import SimpleList from '@/components/SimpleList';
import router from 'umi/router';

import styles from './style.less';

@connect(({ news }) => news)
class Page extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '中文标题',
        dataIndex: 'TITLE_CN',
        key: 'TITLE_CN',
        width: 200,
      },
      {
        title: '英文标题',
        dataIndex: 'TITLE_EN',
        key: 'TITLE_EN',
        width: 200,
      },
      {
        title: '类型',
        dataIndex: 'TYPE',
        key: 'TYPE',
        width: 200,
        render: (text, record) => <div>{text === 0 ? '公司新闻' : '行业新闻'}</div>,
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
      type: 'news/getNews',
    });
  }

  controls = () => {
    const searchControl = { label: '内容', control: <Input /> };
    return [searchControl];
  };
  handleRedirectAdd = () => {
    router.push('/news/addoredit');
  };
  render() {
    return (
      <SimpleList
        namespace="news"
        rowKey="ID"
        fetchUrl="news/getNews"
        controls={this.controls()}
        columns={this.columns}
        {...this.props}
      >
        <>
          <Button type="primary" onClick={this.handleRedirectAdd}>
            新增
          </Button>
        </>
      </SimpleList>
    );
  }
}

export default Page;
