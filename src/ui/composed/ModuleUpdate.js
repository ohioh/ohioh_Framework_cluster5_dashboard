import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompanyModules, getCompanies } from 'store/company';
import { Button } from 'ui';

function ModuleUpdate() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const { companies } = useSelector((state) => state.company);
  const lastCompany = companies.results[0];

  const onFinish = async (fieldsValue) => {
    for (let key in fieldsValue) {
      if (fieldsValue[key] === undefined) {
        fieldsValue[key] = false;
      }
    }
    await dispatch(updateCompanyModules(lastCompany.uuid, fieldsValue));
    await history.push('/customer/companies');
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
