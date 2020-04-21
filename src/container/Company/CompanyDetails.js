import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Row, Col, Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, CustomerOverview } from 'ui';
import { getCompanyDetails } from 'store/company';
import {
  CompanySubscriptions,
  WorkerPlatforms,
  CompanySetUp,
  CompanyAdmins,
} from './component';

const { TabPane } = Tabs;

const CompanyDetails = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyDetails(param.uuid));
  }, [dispatch, param.uuid]);

  const { companyDetails } = useSelector((state) => state.company);

  return (
    <Wrapper>
      <Row gutter={16}>
        <Col md={8}>
          <CustomerOverview companyDetails={companyDetails} />
        </Col>
        <Col md={16}>
          <Wrapper backgroundColor='white' px={3}>
            <Tabs defaultActiveKey='1' animated={false}>
              <TabPane tab='Subscriptions' key='1'>
                <CompanySubscriptions />
              </TabPane>
              <TabPane tab='Worker Platforms' key='2'>
                <WorkerPlatforms companyDetails={companyDetails} />
              </TabPane>

              <TabPane tab='Company Setup' key='3'>
                <CompanySetUp />
              </TabPane>

              <TabPane tab='Admins' key='4'>
                <CompanyAdmins />
              </TabPane>
            </Tabs>
          </Wrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CompanyDetails;
