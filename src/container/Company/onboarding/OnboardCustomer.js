import React, { useEffect } from 'react';
import { Form, Select, Input, Row, Col } from 'antd';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from 'store/company';
import { formLayout, formTailLayout } from 'utils';
import { PageHeader, Wrapper, Title, Button } from 'ui';
const { Option } = Select;
const { TextArea } = Input;

function OnboardCustomer() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (fieldsValue) => {
    await form.resetFields();
  };
  const headerData = {
    title: 'Onboard A Customer',
    buttons: [
      {
        label: 'Back',
        link: '/customers',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Row gutter={16} type='flex' justify='center'>
          <Col span={12}>
            <Form
              form={form}
              name='create-survey'
              onFinish={onFinish}
              {...formLayout}
              initialValues={{
                joined_at: true,
              }}
            >
              <Title
                h6
                borderBottom='1px solid'
                borderColor='grayBg'
                pb={1}
                mb={2}
              >
                Company Info
              </Title>
              <Form.Item
                label='Country'
                name='country'
                rules={[
                  {
                    required: true,
                    message: 'Please select a country!',
                  },
                ]}
              >
                {/* <Select>
              {_.map(templates, (template) => {
                return (
                  <Option key={template.uuid} value={template.uuid}>
                    {template.name}
                  </Option>
                );
              })}
            </Select> */}
              </Form.Item>
              <Form.Item
                label='Company Name'
                name='company_name'
                rules={[
                  {
                    required: true,
                    message: 'Please write company name!',
                  },
                ]}
              >
                <Input placeholder='Write your company name ..' />
              </Form.Item>
              <Form.Item label='Description' name='description'>
                <TextArea
                  rows={4}
                  placeholder='Write your company description'
                />
              </Form.Item>

              <Form.Item {...formTailLayout}>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

export default OnboardCustomer;
