import React from 'react'
import { Button, Form, Input, Divider, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

const easyLogin = {
  username: 'thejamesgore',
  password: 'MasterPo',
}

const LoginForm = () => {
  return (
    <Form layout="vertical" name="login-form" initialValues={easyLogin}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
          {
            type: 'email',
            message: 'Please enter a validate email!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item
        name="password"
        label={
          <div
            className={`${
              easyLogin
                ? 'd-flex justify-content-between w-100 align-items-center'
                : ''
            }`}
          >
            <span>Password</span>
          </div>
        }
        rules={[
          {
            required: true,
            message: 'Please input your password',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
