import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Button, Input, Checkbox } from 'antd';
import { Wrapper, PageHeader } from 'ui';
import { formLayout, formTailLayout } from 'utils';
import { storeSurveyBasicInfo } from 'store/survey';
const { TextArea } = Input;

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Bangla', value: 'bn' },
];

const BasicInfoForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values) => {
    await dispatch(storeSurveyBasicInfo(values));
    await history.push('/survey/template/questions');
  };

  const headerData = {
    title: 'Basic Info',
  };

  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Form
          form={form}
          name='create-survey-template'
          onFinish={onFinish}
          {...formLayout}
        >
          <Form.Item
            label='Select Language'
            name='languages'
            rules={[
              {
                required: true,
                message: 'Please select a language!',
              },
            ]}
          >
            <Checkbox.Group options={languageOptions} />
          </Form.Item>
          <Form.Item
            label='Name'
            name='name'
            rules={[
              {
                required: true,
                message: 'Please write template name',
              },
            ]}
          >
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item
            label='Description'
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

          <Form.Item {...formTailLayout}>
            <Button type='primary' htmlType='submit'>
              Next
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default BasicInfoForm;
