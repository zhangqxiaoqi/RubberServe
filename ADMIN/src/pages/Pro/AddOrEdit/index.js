import React, { Component } from 'react';
import { Button, Upload, Icon, message, Card, Input, Row, Col, Radio } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import UEditor from '@/components/Ueditor';
import router from 'umi/router';

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
@connect(({ proAddOrEdit }) => proAddOrEdit)
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: props.fileList,
    };
  }
  componentDidMount() {
    const ID = this.props.location.query.ID;
    if (ID) {
      this.props
        .dispatch({
          type: 'proAddOrEdit/getDetail',
          payload: {
            ID,
          },
        })
        .then(() => {
          const { fileList } = this.props;
          console.log(fileList);
          this.setState({ fileList });
        });
    } else {
      this.props.dispatch({
        type: 'proAddOrEdit/clearPro',
      });
      this.setState({ fileList: [] });
    }
  }
  handleChange = ({ fileList }) => {
    this.setState({ fileList });
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
    const key = e.target.id;
    const value = e.target.value;
    this.props.dispatch({
      type: 'proAddOrEdit/save',
      payload: {
        formData: {
          ...formData,
          ...{ [key]: value },
        },
      },
    });
  };
  handleSubmit = () => {
    const { fileList } = this.state;
    this.props.dispatch({
      type: 'proAddOrEdit/save',
      payload: {
        fileList,
      },
    });
    const { formData } = this.props;
    const content_cn = this.editorCN.getContent();
    const content_en = this.editorEN.getContent();
    const digest_cn = this.editorCN.getContentTxt();
    const digest_en = this.editorEN.getContentTxt();
    this.props.dispatch({
      type: 'proAddOrEdit/save',
      payload: {
        formData: {
          ...formData,
          ...{ content_cn, content_en, digest_cn, digest_en },
        },
      },
    });
    this.props.dispatch({
      type: 'proAddOrEdit/saveProduce',
    });
  };
  handleCancel = () => {
    router.push('/pro');
  };
  handleRadioChange = e => {
    const { formData } = this.props;
    this.props.dispatch({
      type: 'proAddOrEdit/save',
      payload: {
        formData: {
          ...formData,
          ...{ type: e.target.value },
        },
      },
    });
  };
  render() {
    const { loading, imageUrl, formData } = this.props;
    const { fileList } = this.state;
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
            <Row className={styles.form_row}>
              <Col span={2}>中文标题</Col>
              <Col span={18}>
                <Input
                  placeholder="中文标题"
                  value={formData.title_cn}
                  onChange={this.inputChange}
                  id="title_cn"
                />
              </Col>
            </Row>
            <Row className={styles.form_row}>
              <Col span={2}>英文标题</Col>
              <Col span={18}>
                <Input
                  placeholder="英文标题"
                  value={formData.title_en}
                  id="title_en"
                  onChange={this.inputChange}
                />
              </Col>
            </Row>
            <Row className={styles.form_row}>
              <Col span={2}>图片上传</Col>
              <Col span={18}>
                <Upload
                  name="uploadFile"
                  listType="picture-card"
                  fileList={fileList}
                  // action="/api/util/upload/"
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
