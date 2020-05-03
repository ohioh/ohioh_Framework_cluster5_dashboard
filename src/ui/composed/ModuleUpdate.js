import React, { useEffect } from 'react';
import { Form, Checkbox } from 'antd';
import { useDispatch } from 'react-redux';
// import { getPackages, getCountries } from 'store/company';
import { Button } from 'ui';

function ModuleUpdate() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (fieldsValue) => {
    console.log(fieldsValue);
  };
  return (
    <>
      <Form form={form} name='create-survey' onFinish={onFinish}>
        <Form.Item name='connect' valuePropName='checked'>
          <Checkbox>
            <b>Connect :</b> Connect with workers
          </Checkbox>
        </Form.Item>
        <Form.Item name='engage' valuePropName='checked'>
          <Checkbox>
            <b>Engage :</b> Get insight from worker engagement
          </Checkbox>
        </Form.Item>
        <Form.Item name='hr' valuePropName='checked'>
          <Checkbox>
            <b>HR :</b> Manage HR modules online
          </Checkbox>
        </Form.Item>
        <Form.Item name='training' valuePropName='checked'>
          <Checkbox>
            <b>Training :</b> Provide training to workers
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ModuleUpdate;
