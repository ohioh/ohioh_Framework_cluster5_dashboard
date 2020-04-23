import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Row, Col, Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, CustomerOverview } from 'ui';
import { getCompanyDetails } from 'store/company';
import { CompanySurveys, CreateSurvey } from './components';

const { TabPane } = Tabs;

const CompanySurveySchedules = () => {
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
              <TabPane tab='Surveys' key='1'>
                <CompanySurveys />
              </TabPane>
              <TabPane tab='Add Survey' key='2'>
                <CreateSurvey />
              </TabPane>
            </Tabs>
          </Wrapper>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CompanySurveySchedules;
