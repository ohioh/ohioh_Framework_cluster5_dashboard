import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Checkbox, Input, Row, Col } from 'antd';
// import { getCompanies } from 'store/company';
import { PageHeader, Wrapper, Button } from 'ui';
const { TextArea } = Input;
function WorkerPlatforms() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (fieldsValue) => {
    console.log(fieldsValue);
  };

  // useEffect(() => {
  //   dispatch(getCompanies(params.toString()));
  // }, [dispatch, params.toString()]);

  // const { companies } = useSelector((state) => state.company);

  const headerData = {
    title: 'Customer On-boarding : Worker Platforms',
    buttons: [
      {
        label: 'Back',
        link: '/customer/module-permission',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Row gutter={16} type='flex' justify='center'>
          <Col span={12}>
            <Form form={form} name='create-survey' onFinish={onFinish}>
              <Form.Item name='onboarding_message'>
                <TextArea placeholder='Write your message ...' rows={4} />
              </Form.Item>
              <Form.Item name='smart_phone' valuePropName='checked'>
                <Checkbox>Smart Phone</Checkbox>
              </Form.Item>
              <Form.Item name='engage' valuePropName='checked'>
                <Checkbox>SMS</Checkbox>
              </Form.Item>
              <Form.Item name='hr' valuePropName='checked'>
                <Checkbox>Kiosk</Checkbox>
              </Form.Item>
              <Form.Item>
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

export default WorkerPlatforms;
