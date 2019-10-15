import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import { RouteContext } from '@ant-design/pro-layout';
import { PageHeader } from 'antd';
import styles from './index.less';
import GridContent from './GridContent';
import { filterFirstRouter } from '../../utils/utils';

const itemRender = route =>
  route.component && window.location.pathname !== route.path ? (
    <Link to={route.path}>{route.breadcrumbName}</Link>
  ) : (
    <span>{route.breadcrumbName}</span>
  );
const PageHeaderWrapper = ({
  children,
  contentWidth,
  wrapperClassName,
  footer,
  top,
  ...restProps
}) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <RouteContext.Consumer>
      {value => (
        <PageHeader
          footer={footer}
          breadcrumb={{ ...filterFirstRouter(value.breadcrumb), itemRender }}
        />
      )}
    </RouteContext.Consumer>
    {children ? (
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
);

export default connect(({ settings }) => ({
  contentWidth: settings.contentWidth,
}))(PageHeaderWrapper);
