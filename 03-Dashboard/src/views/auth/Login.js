import React from 'react'
import { Row, Col } from 'antd'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
      <Row>
        {/* Main Col */}
        <Col xs={20} sm={20} md={24} lg={16}>
          <div className="container d-flex flex flex-column justify-content-center h-100">
            <Row justify="center">
              <Col xs={24} sm={24} md={20} lg={12} xl={8}>
                <h1>Sign In</h1>
                <p>
                  Don't have an account yet?{' '}
                  <a href="/auth/register">Sign Up</a>
                </p>
                <div className="mt-4">
                  <LoginForm />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* Right Col */}
        <Col xs={0} sm={0} md={0} lg={20}></Col>
      </Row>
    </div>
  )
}

export default Login
