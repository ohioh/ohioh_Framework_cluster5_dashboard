import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { Row, Col, Avatar, Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { parseDate } from 'utils';
import {
  UserOutlined,
  MobileOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons';
import { Wrapper, Title, Text, Tag } from 'ui';
import { getCompanyDetails } from 'store/company';
import {
  CompanyModules,
  WorkerPlatforms,
  CompanySetUp,
  CompanyAdministrator,
} from './component';

const { TabPane } = Tabs;

const CompanyDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyDetails(param.uuid));
  }, [dispatch]);

  const { companyDetails } = useSelector((state) => state.company);

  return (
    <Wrapper>
      <Row gutter={16}>
        <Col md={8}>
          <Wrapper backgroundColor='white' p={3}>
            <Wrapper flex direction='column' align='center' mb={2} px={3}>
              <Avatar size={80} src={companyDetails.companyLogo} />
              <Title h5 mt={2} mb={1}>
                {companyDetails.name}
              </Title>
              <Text h5 textAlign='center'>
                {companyDetails.description}
              </Text>
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg' px={3}>
              <Text>
                {' '}
                <UserOutlined /> {companyDetails.primaryName}
              </Text>
              {companyDetails.primaryPhone && (
                <Text>
                  {' '}
                  <MobileOutlined /> {companyDetails.primaryPhone}
                </Text>
              )}

              {companyDetails.primaryEmail && (
                <Text>
                  {' '}
                  <RedEnvelopeOutlined /> {companyDetails.primaryEmail}
                </Text>
              )}
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg'>
              <Title h6 mb={1}>
                Modules
              </Title>
              {_.map(companyDetails.modules, (module, i) => {
                return <Tag key={i}>{module}</Tag>;
              })}
            </Wrapper>
            <Wrapper py={2} borderTop='1px solid' borderColor='grayBg'>
              <Text>
                Onboarding: {parseDate(_.get(companyDetails, 'onBoardingDate'))}
              </Text>
              <Text>
                Expire Date: {parseDate(_.get(companyDetails, 'expireDate'))}
              </Text>
              <Text>Package: {_.capitalize(companyDetails.package.name)}</Text>
              <Text>
                Worker Limit:{' '}
                {_.get(companyDetails, 'package.maxWorkers', '---')}
              </Text>
            </Wrapper>
          </Wrapper>
        </Col>
        <Col md={16}>
          <Wrapper backgroundColor='white' px={3}>
            <Tabs defaultActiveKey='1' animated={false}>
              <TabPane tab='Modules' key='1'>
                <CompanyModules />
              </TabPane>
              <TabPane tab='Worker Platforms' key='2'>
                <WorkerPlatforms companyDetails={companyDetails} />
              </TabPane>

              <TabPane tab='Company Setup' key='3'>
                <CompanySetUp />
              </TabPane>

              <TabPane tab='Administrator' key='4'>
                <CompanyAdministrator />
              </TabPane>

              {/* {permissions.engage && (
                <TabPane tab='Surveys' key='5'>
                  <CompanySurvey />
                </TabPane>
              )}
              {permissions.engage && (
                <TabPane tab='Issue' key='6'>
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
