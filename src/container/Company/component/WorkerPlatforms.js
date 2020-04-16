import React from 'react';
import _ from 'lodash';
import { Row, Col } from 'antd';
import { Wrapper, Title, Text } from 'ui';

const WorkerPlatforms = ({ companyDetails }) => {
  console.log(companyDetails);
  let workerplatforms = _.get(
    companyDetails,
    'onboardingDetails.workerPlatforms',
    '---'
  );
  return (
    <Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Onboarding Message
        </Title>
        <Text>
          {_.get(companyDetails, 'onboardingDetails.onboardingMessage', '---')}
        </Text>
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Platforms
        </Title>
        <Text>{workerplatforms.toString().split(',').join(', ')}</Text>
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          SMS Bot
        </Title>
        <Row>
          <Col span={12}>
            <Text>SMS Gateway</Text>
            <Text bold>{_.capitalize(companyDetails.smsGateway)}</Text>
          </Col>
          <Col span={12}>
            <Text>Chatbot Number</Text>
            <Text bold>{companyDetails.chatbotNumber}</Text>
          </Col>
        </Row>
      </Wrapper>
    </Wrapper>
  );
};

export default WorkerPlatforms;
