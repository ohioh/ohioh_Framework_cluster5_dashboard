import React from 'react';
import _ from 'lodash';
import { Avatar } from 'antd';
import {
  UserOutlined,
  MobileOutlined,
  RedEnvelopeOutlined,
} from '@ant-design/icons';
import { parseDate } from 'utils';
import { Wrapper, Title, Text, Tag } from 'ui';

const CustomerOverview = ({ companyDetails }) => {
  return (
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
          Worker Limit: {_.get(companyDetails, 'package.maxWorkers', '---')}
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

export default CustomerOverview;
