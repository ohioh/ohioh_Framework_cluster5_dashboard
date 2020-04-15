import React from 'react';
import { Row, Col, Avatar, Tabs } from 'antd';
import {
  UserOutlined,
  MobileOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons';
import { Wrapper, Title, Text, Tag } from 'ui';

const { TabPane } = Tabs;

const CompanyDetails = () => {
  return (
    <Wrapper>
      <Row gutter={16}>
        <Col md={8}>
          <Wrapper backgroundColor='white' p={3}>
            <Wrapper flex direction='column' align='center' mb={2} px={3}>
              <Avatar size={80} src='https://picsum.photos/200/300' />
              <Title h5 mt={2} mb={1}>
                Urmi Group
              </Title>
              <Text h5 textAlign='center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
                ipsum.
              </Text>
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg' px={3}>
              <Text>
                {' '}
                <UserOutlined /> Rashed Hossain
              </Text>
              <Text>
                {' '}
                <MobileOutlined /> 01812500000
              </Text>
              <Text>
                {' '}
                <RedEnvelopeOutlined /> rashed@urmi.com
              </Text>
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg'>
              <Title h6 mb={1}>
                Modules
              </Title>
              <Tag>Connect</Tag>
              <Tag>Engage</Tag>
              <Tag>HR</Tag>
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg'>
              <Text>Onboarding: 20th May 2019</Text>
              <Text>Expire Date: 20th May 2020</Text>
              <Text>Package: Premimum</Text>
              <Text>Worker Limit: 10,000</Text>
              <Text>SMS Purchased: 50,000</Text>
            </Wrapper>
          </Wrapper>
        </Col>
        <Col md={16}>
          <Wrapper backgroundColor='white' px={3}>
            <Tabs defaultActiveKey='1'>
              <TabPane tab='Modules' key='1'>
                Modules
                {/* <CompanyOverview uuid={uuid} /> */}
              </TabPane>
              <TabPane tab='Worker Platforms' key='2'>
                {/* <WorkerPlatforms companyDetails={companyDetails} /> */}
              </TabPane>

              <TabPane tab='Company Setup' key='3'>
                {/* <CompanySetUp uuid={uuid} /> */}
              </TabPane>

              <TabPane tab='Administrator' key='4'>
                {/* <CompanyAdministrator /> */}
              </TabPane>

              {/* {permissions.engage && (
            <TabPane tab="Surveys" key="5">
              <CompanySurvey />
            </TabPane>
          )}
          {permissions.engage && (
            <TabPane tab="Issue" key="6">
              <CompanyIssue />
            </TabPane>
          )} */}
            </Tabs>
          </Wrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CompanyDetails;
