import React, { useEffect } from 'react';
import _ from 'lodash';
import { Form, DatePicker, Button, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getSurveyTemplates } from 'store/survey';
import { parseDate } from 'utils';
import { Wrapper, CriteriaForm } from 'ui';
import { formLayout, formTailLayout } from 'utils';
const { Option } = Select;

const CreateSurvey = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurveyTemplates());
  }, [dispatch]);

  const { templates } = useSelector((state) => state.survey);
  const onFinish = (fieldsValue) => {
    const value = {
      ...fieldsValue,
      start_date: fieldsValue['start_date'].format('YYYY-MM-DD'),
      end_date: fieldsValue['end_date'].format('YYYY-MM-DD'),
    };
    console.log(value);
  };
  return (
    <Wrapper>
      <Form
        form={form}
        name='create-survey'
        onFinish={onFinish}
        {...formLayout}
      >
        <Form.Item label='Template' name='template'>
          <Select>
            {_.map(templates, (template) => {
              return (
                <Option key={template.uuid} value={template.uuid}>
                  {template.name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label='Schedule Type' name='schedule_type'>
          <Select>
            <Option value='adhoc'>Adhoc</Option>
            <Option value='default'>Default</Option>
          </Select>
        </Form.Item>
        <Form.Item label='Start Date' name='start_date'>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label='End Date' name='end_date'>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <CriteriaForm />
        <Form.Item {...formTailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default CreateSurvey;
