import React from 'react';
import { Form, Input, Select, Collapse } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Wrapper, PageHeader } from 'ui';
const { TextArea } = Input;
const { Option } = Select;

const { Panel } = Collapse;

const QuestionPanel = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  return (
    <Collapse defaultActiveKey={['1']}>
      <Panel header='Question 1' key='1'>
        <Form.Item
          label='Question'
          name='description'
          rules={[
            {
              required: true,
              message: 'Description',
            },
          ]}
        >
          <TextArea rows={4} placeholder='Description' />
        </Form.Item>
        <Form.Item
          label='Answer Type'
          name='description'
          rules={[
            {
              required: true,
              message: 'Description',
            },
          ]}
        >
          <Select>
            <Option value='adhoc'>Adhoc</Option>
            <Option value='default'>Default</Option>
          </Select>
        </Form.Item>
      </Panel>
    </Collapse>
  );
};

export default QuestionPanel;
