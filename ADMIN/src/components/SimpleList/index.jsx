import React from 'react';
import { Card, Row, Col, Table, Button, Icon, Tooltip } from 'antd';
import MultiClamp from 'react-multi-clamp';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import './index.less';

class SimpleList extends React.Component {
  constructor(props) {
    super(props);
    const { controls = [], expandControls = [], columns } = props;
    this.allContrlsPackage = controls.concat(expandControls); // 所有搜索的控件集合
    this.namespace = props.namespace;
    this.fetchUrl = props.fetchUrl;
    this.columsList = this.packageColums(columns);
    this.scroll = props.scroll || {};
  }

  componentDidMount() {
    this.handleInitListData();
  }

  // 搜索
  handleSearch = () => {
    this.handleInitListData();
  };

  // 重新加载
  handleReload = () => {
    const { _pagination } = this.props;
    this.handleInitListData(_pagination.current);
  };

  // 初始化列表数据
  handleInitListData = (current = 1) => {
    const { dispatch, _pagination } = this.props;
    dispatch({
      type: `${this.namespace}/_fetch`,
      payload: {
        namespace: this.namespace,
        fetchUrl: this.fetchUrl,
        _pagination: { ..._pagination, ...{ current } },
      },
    });
  };

  // 改变状态
  handleChangeStatus = () => {
    const { _showExpend } = this.props;

    this.props.dispatch({
      type: `${this.namespace}/_save`,
      payload: { _showExpend: !_showExpend },
    });
  };

  // 列表change事件
  handleTablePageChange = (pagination, filters, sorter) => {
    this.props.dispatch({
      type: `${this.namespace}/_save`,
      payload: { _pagination: { ...pagination } },
    });
    this.handleInitListData(pagination.current);
    // 回调传入的change方法
    if (this.props.onChange instanceof Function) {
      this.props.onChange(pagination, filters, sorter);
    }
  };

  packageColums = columns =>
    columns.map(item => {
      const columItem = item;
      if (columItem.showTooltip) {
        columItem.render = text => (
          <Tooltip placement="topLeft" title={text}>
            <MultiClamp ellipsis="..." clamp={1}>
              {text}
            </MultiClamp>
          </Tooltip>
        );
      }
      return columItem;
    });

  // 简单搜索jsx
  renderSearch = () => {
    const { controls = [], expandControls = [] } = this.props;
    if (!controls.length) {
      // 如果没有要检索的内容
      return <div></div>;
    }
    return (
      <div className="search-header">
        <Row>
          {(controls || []).map((item, index) => (
            <Col span={6} key={index}>
              <div className="form-item-box">
                <div className="form-item-label">{item.label ? `${item.label}：` : ''}</div>
                <div className="form-item-input">{item.control}</div>
              </div>
            </Col>
          ))}
          {controls.length % 4 !== 0 && (
            <Col span={6}>
              <div className="form-item-box right-search">
                <Button type="primary" onClick={this.handleSearch}>
                  搜索
                </Button>
                {expandControls.length > 0 && (
                  <Button type="link" onClick={this.handleChangeStatus}>
                    高级
                    <Icon type="down" />
                  </Button>
                )}
              </div>
            </Col>
          )}
        </Row>
        {controls.length % 4 === 0 && (
          <div>
            <div className="search-btn">
              <Button type="primary" onClick={this.handleSearch}>
                搜索
              </Button>
              {expandControls.length > 0 && (
                <Button type="link" onClick={this.handleChangeStatus}>
                  高级
                  <Icon type="down" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // 高级搜索jsx
  renderExpendSearch = () => {
    const { expandControls = [] } = this.props;
    return (
      <div className="search-header">
        <Row>
          {(this.allContrlsPackage || []).map((item, index) => (
            <Col span={6} key={index}>
              <div className="form-item-box">
                <div className="form-item-label">{item.label ? `${item.label}：` : ''}</div>
                <div className="form-item-input">{item.control}</div>
              </div>
            </Col>
          ))}
          {this.allContrlsPackage.length % 4 !== 0 && (
            <Col span={6}>
              <div className="form-item-box right-search">
                <Button type="primary" onClick={this.handleSearch}>
                  搜索
                </Button>
                {expandControls.length > 0 && (
                  <Button type="link" onClick={this.handleChangeStatus}>
                    收起
                    <Icon type="up" />
                  </Button>
                )}
              </div>
            </Col>
          )}
        </Row>
        {this.allContrlsPackage.length % 4 === 0 && (
          <div>
            <div className="search-btn">
              <Button type="primary" onClick={this.handleSearch}>
                搜索
              </Button>
              {expandControls.length > 0 && (
                <Button type="link" onClick={this.handleChangeStatus}>
                  收起
                  <Icon type="up" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { _loading, _dataList, _pagination, _showExpend, rowKey, children, tabs } = this.props;
    console.log(this.props);
    return (
      <PageHeaderWrapper footer={tabs}>
        <Card>
          <div>
            {!_showExpend && this.renderSearch()} {_showExpend && this.renderExpendSearch()}
          </div>
          <div className="children-box">{children}</div>
          <Table
            loading={_loading}
            rowKey={rowKey}
            pagination={_pagination}
            dataSource={_dataList}
            columns={this.columsList}
            onChange={this.handleTablePageChange}
            scroll={this.scroll}
          ></Table>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default SimpleList;
