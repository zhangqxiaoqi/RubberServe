/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { message, notification, Progress } from 'antd';
import ReactUeditor from 'ifanrx-react-ueditor';
import { isDev } from '@/utils/utils';
import request from '@/utils/request';

import './index.less';

class Ueditor extends React.Component {
  attachEditor = ref => {
    this.editor = ref;
  };

  updateEditorContent = content => {
    // this.props.onChange(content);
    this.editorContent = content;
  };

  onReady = () => {
    // console.log(this.editor);
    // console.log(this.props.content);
    if (this.editor && this.initialContent) {
      // this.editor.setHeight(300);
      this.editor.setContent(this.initialContent);
    }
  };

  getContent = () => this.editorContent;
  getContentTxt = () => this.editor.getContentTxt();

  setContent = content => {
    if (this.editor && this.editor.isReady) {
      this.editor.setContent(content);
    }
    this.initialContent = content;
    // console.log(this.initialContent);
    // console.log(this.getContentTxt());
  };

  uploadImage = async e => {
    const file = e.target.files[0];
    if (file) {
      try {
        let form = new FormData();
        form.append('uploadFile', file);

        const res = await request('/api/util/upload/', { method: 'POST', data: form });
        return res.data.url;
      } catch (error) {
        message.error('上传图片失败');
        throw error;
      }
    }
    return null;
  };

  render() {
    return (
      <ReactUeditor
        plugins={[
          'insertCode',
          'uploadImage',
          // 'uploadAudio',
          'insertLink',
          // uploadImagePlugin,
        ]}
        getRef={this.attachEditor}
        uploadImage={this.uploadImage}
        onChange={this.updateEditorContent}
        onReady={this.onReady}
        ueditorPath={`${window.location.origin}${isDev ? '' : '/ADMIN'}/ueditor`}
      />
    );
  }
}
export default Ueditor;
