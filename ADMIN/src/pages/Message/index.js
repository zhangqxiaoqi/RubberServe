import React, { Component } from 'react';
import { Button, Input, Popconfirm } from 'antd';
import { connect } from 'dva';
import SimpleList from '@/components/SimpleList';
import router from 'umi/router';

import styles from './style.less';

@connect(({ message }) => message)
class Page extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'NAME',
        key: 'NAME',
        width: 200,
      },
      {
        title: '电话',
        dataIndex: 'PHONE',
        key: 'PHONE',
        width: 200,
      },
      {
        title: '地址',
        dataIndex: 'ADDRESS',
        key: 'ADDRESS',
        width: 200,
        showTooltip: true,
      },
      {
        title: '邮箱',
        dataIndex: 'EMAIL',
        key: 'EMAIL',
        width: 200,
      },
      {
        title: '留言信息',
        dataIndex: 'LEAVE_INFO',
        key: 'LEAVE_INFO',
        showTooltip: true,
      },
    ];
  }

  componentDidMount() {
    const { dispatch } = this.props;
    // dispatch({
    //   type: 'pro/getpros',
    // });
  }

  controls = () => {
    const searchControl = { label: '内容', control: <Input /> };
    return [searchControl];
  };

  handleDel = ID => {
    this.props
      .dispatch({
        type: 'pro/del',
        payload: {
          ID,
        },
      })
      .then(() => {
        this.simpleListRefpro.handleReload();
      });
  };

  render() {
    return (
      <SimpleList
        namespace="message"
        rowKey="ID"
        fetchUrl="message/getMessage"
        columns={this.columns}
        {...this.props}
        ref={current => (this.simpleListRefpro = current)}
      ></SimpleList>
    );
  }
}

export default Page;
