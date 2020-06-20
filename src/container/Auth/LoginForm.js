import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Modal, Button } from 'antd';
import { Wrapper, Logo, Text } from 'ui';
import { Login, signUp } from 'store/auth';
import logoImg from 'assets/images/logo.png';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onFinish = (values) => {
    dispatch(Login(values));
  };
  const onFinishSignup = (values) => {
    dispatch(signUp(values));
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Wrapper
      flex
      width='100vw'
      height='100vh'
      justify='center'
      align='center'
      p={5}
    >
      <Wrapper width='400px'>
        <Logo>{logoImg}</Logo>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>

        <Wrapper flex align='center' justify='flex-end'>
          <Text mbnone mr={2}>
            You have no account?{' '}
          </Text>
          <Button type='primary' onClick={() => setVisible(true)}>
            Sign up
          </Button>
        </Wrapper>

        <Modal
          title='Sign up form'
          visible={visible}
          footer={false}
          onCancel={() => setVisible(false)}
        >
          <Form
            {...layout}
            name='basic'
            initialValues={{ remember: true }}
            onFinish={onFinishSignup}
          >
            <Form.Item
              label='Username'
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='First Name'
              name='first_name'
              rules={[
                { required: true, message: 'Please input your first name!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Last Name'
              name='last_name'
              rules={[
                { required: true, message: 'Please input your last name!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Wrapper>
    </Wrapper>
  );
};

export default LoginForm;
