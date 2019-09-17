import React, { Component } from 'react';
import { Button, Card, Row, Col } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import UEditor from '@/components/Ueditor';
import router from 'umi/router';

import styles from './style.less';

@connect(({ about }) => about)
class Page extends Component {
  componentDidMount() {
    const TYPE = this.props.location.query.TYPE;
    if (TYPE) {
      this.props.dispatch({
        type: 'about/getDetail',
        payload: {
          TYPE,
        },
      });
    }
  }
  attachEditor = ref => {
    this.editorCN = ref;
  };
  onReady = () => {
    const { formData } = this.props;
    if (this.editorCN && formData.CONTENT_CN) {
      this.editorCN.setContent(formData.CONTENT_CN);
    }
  };
  attachEditorEN = ref => {
    this.editorEN = ref;
  };
  onReadyEN = () => {
    const { formData } = this.props;
    if (this.editorEN && formData.CONTENT_EN) {
      this.editorEN.setContent(formData.CONTENT_EN);
    }
  };
  handleSubmit = () => {
    const { formData } = this.props;
    const CONTENT_CN = this.editorCN.getContent();
    const CONTENT_EN = this.editorEN.getContent();
    this.props.dispatch({
      type: 'about/save',
      payload: {
        formData: {
          ...formData,
          ...{ CONTENT_CN, CONTENT_EN },
        },
      },
    });
    this.props.dispatch({
      type: 'about/saveAbout',
    });
  };
  handleCancel = () => {
    router.push('/');
  };
  render() {
    const { text } = this.props;
    return (
      <PageHeaderWrapper>
        <Card>
          <div className={styles.form_main}>
            <Row className={styles.form_row}>
              <Col span={4}>中文内容</Col>
              <Col span={14}></Col>
            </Row>
            <Row className={styles.form_row}>
              <Col span={20}>
                <UEditor onReady={this.onReady()} ref={this.attachEditor} />
              </Col>
            </Row>
            <Row className={styles.form_row}>
              <Col span={4}>英文内容</Col>
              <Col span={14}></Col>
            </Row>
            <Row className={styles.form_row}>
              <Col span={20}>
                <UEditor onReady={this.onReadyEN()} ref={this.attachEditorEN} />
              </Col>
            </Row>
            <Row className={styles.form_row}>
              <Col>
                <Button type="primary" onClick={this.handleSubmit}>
                  提交
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button onClick={this.handleCancel}>取消</Button>
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Page;
