import React, { Component } from 'react';
import { Button, Upload, Icon, message, Card, Input, Row, Col } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import UEditor from '@/components/Ueditor';

import styles from './style.less';
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('只能上传 JPG/PNG 图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片小于 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
@connect(({ newsAddOrEdit }) => newsAddOrEdit)
class Page extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'newsAddOrEdit/fetch',
    });
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.props.dispatch({
        type: 'newsAddOrEdit/save',
        payload: { loading: true },
      });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const { formData } = this.props;
      getBase64(info.file.originFileObj, imageUrl => {
        this.props.dispatch({
          type: 'newsAddOrEdit/save',
          payload: {
            formData: {
              ...formData,
              cover: imageUrl,
            },
          },
        });
      });
    }
  };
  attachEditor = ref => {
    this.editorCN = ref;
  };
  onReady = () => {
    const { formData } = this.props;
    if (this.editorCN && formData.content_cn) {
      this.editorCN.setContent(formData.content_cn);
    }
  };
  attachEditorEN = ref => {
    this.editorEN = ref;
  };
  onReadyEN = () => {
    const { formData } = this.props;
    if (this.editorEN && formData.content_en) {
      this.editorEN.setContent(formData.content_en);
    }
  };
  inputChange = e => {
    const { formData } = this.props;
    console.log(e.target);
    const key = e.target.id;
    const value = e.target.value;
    console.log(key);
    console.log(value);
    this.props.dispatch({
      type: 'newsAddOrEdit/save',
      payload: {
        formData: {
          ...formData,
          ...{ key: value },
        },
      },
    });
  };
  handleSubmit = () => {
    const { formData } = this.props;
    const content_cn = this.editorCN.getContent();
    const content_en = this.editorEN.getContent();
    this.props.dispatch({
      type: 'newsAddOrEdit/save',
      payload: {
        formData: {
          ...formData,
          ...{ content_cn, content_en },
        },
      },
    });
    this.props.dispatch({
      type: 'newsAddOrEdit/saveNews',
    });
  };
  render() {
    const { loading, imageUrl, formData } = this.props;
    const uploadButton = (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <PageHeaderWrapper>
        <Card>
          <div className={styles.form_main}>
            <Row>
              <Col span={2}>中文标题</Col>
              <Col span={18}>
                <Input
                  placeholder="中文标题"
                  defaultValue={formData.title_cn}
                  onChange={this.inputChange}
                  id="title_cn"
                />
              </Col>
            </Row>
            <Row>
              <Col span={2}>英文标题</Col>
              <Col span={18}>
                <Input
                  placeholder="英文标题"
                  defaultValue={formData.title_cn}
                  id="title_en"
                  onChange={this.inputChange}
                />
              </Col>
            </Row>
            <Row>
              <Col span={2}>封面上传</Col>
              <Col span={18}>
                <Upload
                  name="uploadFile"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="/api/util/upload/"
                  beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                >
                  {formData.cover ? (
                    <img src={formData.cover} alt="avatar" style={{ width: '100%' }} />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Col>
            </Row>
            <Row>
              <Col span={4}>中文新闻内容</Col>
              <Col span={14}></Col>
            </Row>
            <Row>
              <Col span={20}>
                <UEditor onReady={this.onReady()} ref={this.attachEditor} />
              </Col>
            </Row>
            <Row>
              <Col span={4}>英文新闻内容</Col>
              <Col span={14}></Col>
            </Row>
            <Row>
              <Col span={20}>
                <UEditor onReady={this.onReadyEN()} ref={this.attachEditorEN} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="primary" onClick={this.handleSubmit}>
                  提交
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button>取消</Button>
              </Col>
            </Row>
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default Page;
