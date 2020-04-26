import React, { useEffect } from 'react';
import _ from 'lodash';
import { useParams } from 'react-router';
import { Form, DatePicker, Button, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getSurveyTemplates, createCompanySurveySchedule } from 'store/survey';
import { Wrapper, CriteriaForm, Title } from 'ui';
import { formLayout, formTailLayout, removeEmptyKey } from 'utils';
const { Option } = Select;

const CreateSurvey = () => {
  const param = useParams();
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurveyTemplates());
  }, [dispatch]);

  const { templates } = useSelector((state) => state.survey);
  const onFinish = async (fieldsValue) => {
    const criteria = {
      factory_uuid: fieldsValue['factory_uuid'],
      department_uuid: fieldsValue['department_uuid'],
      position_uuid: fieldsValue['position_uuid'],
      joined_at: fieldsValue['joined_at'],
      connect_type: fieldsValue['connect_type'],
      subscribed_on: fieldsValue['subscribed_on'],
    };
    await removeEmptyKey(criteria);
    const payload = {
      template: fieldsValue['template'],
      schedule_type: fieldsValue['schedule_type'],
      start_date: fieldsValue['start_date'].format('YYYY-MM-DD'),
      end_date: fieldsValue['end_date'].format('YYYY-MM-DD'),
      criteria: {
        ...criteria,
      },
    };
    await dispatch(createCompanySurveySchedule(payload, param.uuid));
    await form.resetFields();
  };
  return (
    <Wrapper>
      <Form
        form={form}
        name='create-survey'
        onFinish={onFinish}
        {...formLayout}
        initialValues={{
          joined_at: true,
        }}
      >
        <Form.Item
          label='Template'
          name='template'
          rules={[
            {
              required: true,
              message: 'Please select a template!',
            },
          ]}
        >
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
        <Form.Item
          label='Schedule Type'
          name='schedule_type'
          rules={[
            {
              required: true,
              message: 'Please select a schedule type!',
            },
          ]}
        >
          <Select>
            <Option value='adhoc'>Adhoc</Option>
            <Option value='default'>Default</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label='Start Date'
          name='start_date'
          rules={[
            {
              required: true,
              message: 'Please select start date!',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label='End Date'
          name='end_date'
          rules={[
            {
              required: true,
              message: 'Please select end date!',
            },
          ]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={2}>
          Criteria
        </Title>
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
