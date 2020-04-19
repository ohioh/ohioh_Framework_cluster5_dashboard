import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanySubscriptions } from 'store/company';
import { Wrapper, Title, Text } from 'ui';
import { parseDate } from 'utils';

const CompanySubscriptions = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanySubscriptions(param.uuid));
  }, [dispatch]);

  const { subscriptions } = useSelector((state) => state.company);
  console.log(subscriptions);
  return (
    <Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Description
        </Title>
        <Text>
          Onboarding Date : {parseDate(_.get(subscriptions, 'onBoardingDate'))}
        </Text>
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Modules
        </Title>
        {_.map(_.get(subscriptions, 'modules'), (module) => {
          return (
            <Text>
              {module.name} : Started On {parseDate(_.get(module, 'startDate'))}
            </Text>
          );
        })}
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Worker Limit
        </Title>
        <Text>
          Maximum Workers : {_.get(subscriptions, 'workerLimit.maxWorkers')}
        </Text>
        <Text>
          Remaining Workers :{' '}
          {_.get(subscriptions, 'workerLimit.remainingWorkers')}
        </Text>
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          SMS
        </Title>
        <Text>
          Total Purchased : {_.get(subscriptions, 'smsLimit.purchasedSms')}
        </Text>
        <Text>Remaining : {_.get(subscriptions, 'smsLimit.remainingSms')}</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default CompanySubscriptions;
