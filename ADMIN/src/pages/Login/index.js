import React from 'react';
import { Button, Form, Input, Icon, Checkbox } from 'antd';
import { connect } from 'dva';
import styles from './style.less';

const LoginComponent = ({ login: { submitting, password, account, remember }, dispatch }) => {
  const updateState = payload => dispatch({ type: 'login/updateState', payload });
  return (
    <div className="login-page">
      <div className={styles['login-section']}>
        <Form>
          <Form.Item>
            <Input
              value={account}
              size="large"
              prefix={<Icon type="user" />}
              placeholder="登录账号"
              onChange={e => updateState({ account: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Input
              value={password}
              size="large"
              prefix={<Icon type="lock" />}
              placeholder="密码"
              type="password"
              onChange={e => updateState({ password: e.target.value })}
            />
          </Form.Item>

          <Form.Item>
            <Checkbox
              checked={remember}
              onChange={e => updateState({ remember: e.target.checked })}
            >
              自动登录
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className="submit-btn"
              type="primary"
              size="large"
              htmlType="submit"
              loading={submitting}
              onClick={() => dispatch({ type: 'login/login' })}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ login }) => ({
  login,
}))(LoginComponent);
