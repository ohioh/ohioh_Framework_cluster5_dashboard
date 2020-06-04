import React, { useEffect } from 'react';
import _ from 'lodash';
import { Form, Select, Input, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPackages,
  getCountries,
  getCouriers,
  getLanguages,
  createCompany,
} from 'store/company';
import { formLayout, formTailLayout } from 'utils';
import { PageHeader, Wrapper, Title, Button } from 'ui';
const { Option } = Select;
const { TextArea } = Input;

const TitleExtend = ({ children }) => {
  return (
    <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={2}>
      {children}
    </Title>
  );
};

function OnboardCustomer() {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getPackages());
    dispatch(getCouriers());
    dispatch(getLanguages());
  }, [dispatch]);

  const { countries, packages, couriers, languages } = useSelector(
    (state) => state.company
  );

  const onFinish = async (fieldsValue) => {
    await dispatch(createCompany(fieldsValue));
    await history.push('/customer/module-permission');
    await form.resetFields();
  };
  const headerData = {
    title: 'Customer On-boarding : Create Account',
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
          <Col xl={12} lg={16} md={18} sm={24}>
            <Form
              form={form}
              name='create-survey'
              onFinish={onFinish}
              {...formLayout}
            >
              <Wrapper mb={4}>
                <TitleExtend>Company Info</TitleExtend>
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
                  <Select>
                    {_.map(countries, (country) => {
                      return (
                        <Option key={country.code} value={country.code}>
                          {country.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Company Name'
                  name='name'
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
              </Wrapper>
              <Wrapper mb={4}>
                <TitleExtend>Primary Contact</TitleExtend>
                <Form.Item
                  label='Name'
                  name='primary_name'
                  rules={[
                    {
                      required: true,
                      message: 'Please write your name !',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label='Email'
                  name='primary_email'
                  rules={[
                    {
                      required: true,
                      message: 'Please write your email !',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label='Phone Number' name='primary_phone'>
                  <Input />
                </Form.Item>
              </Wrapper>
              <Wrapper mb={4}>
                <TitleExtend>Package Details</TitleExtend>
                <Form.Item
                  label='Package'
                  name='package'
                  rules={[
                    {
                      required: true,
                      message: 'Select your package',
                    },
                  ]}
                >
                  <Select>
                    {_.map(packages, (pack) => {
                      return (
                        <Option key={pack.uuid} value={pack.id}>
                          {pack.name}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Wrapper>
              <Wrapper mb={4}>
                <TitleExtend>SMS Bot</TitleExtend>
                <Form.Item
                  label='SMS Gateway'
                  name='sms_gateway'
                  rules={[
                    {
                      required: true,
                      message: 'Please write your bot no',
                    },
                  ]}
                >
                  <Select>
                    {_.map(couriers, (courier) => {
                      return (
                        <Option key={courier.slug} value={courier.slug}>
                          {courier.title}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  label='SMS Bot Number'
                  name='chatbot_number'
                  rules={[
                    {
                      required: true,
                      message: 'Select your package',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Wrapper>
              <Wrapper mb={4}>
                <TitleExtend>Language</TitleExtend>
                <Form.Item
                  label='Language'
                  name='language'
                  rules={[
                    {
                      required: true,
                      message: 'Select your language',
                    },
                  ]}
                >
                  <Select>
                    {_.map(languages, (language) => {
                      return (
                        <Option key={language.slug} value={language.slug}>
                          {language.title}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Wrapper>

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
