import React from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;

const CriteriaForm = () => {
  return (
    <>
      <Form.Item label='Connect Type' name='connect_type'>
        <Select>
          <Option value='app'>App</Option>
          <Option value='sms'>SMS</Option>
        </Select>
      </Form.Item>
      <Form.Item label='Factory' name='factory_uuid'>
        <Select>
          <Option value='app'>App</Option>
          <Option value='sms'>SMS</Option>
        </Select>
      </Form.Item>
      <Form.Item label='Department' name='department_uuid'>
        <Select>
          <Option value='app'>App</Option>
          <Option value='sms'>SMS</Option>
        </Select>
      </Form.Item>
      <Form.Item label='Position' name='position_uuid'>
        <Select>
          <Option value='app'>App</Option>
          <Option value='sms'>SMS</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default CriteriaForm;
