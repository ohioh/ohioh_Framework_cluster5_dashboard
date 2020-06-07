import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { useParams } from 'react-router';
import { EditOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanySubscriptions } from 'store/company';
import { Wrapper, Title, Text, Button, ModuleUpdate } from 'ui';
import { parseDate } from 'utils';

const CompanySubscriptions = () => {
  const [visible, setVisible] = useState(false);
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanySubscriptions(param.uuid));
  }, [dispatch, param.uuid]);

  const { subscriptions } = useSelector((state) => state.company);

  const moduleUpdate = {
    redirectLink: undefined,
    prevModules: _.get(subscriptions, 'modules'),
    companyUUID: _.get(subscriptions, 'companyUuid'),
  };

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
          <Wrapper flex justify='space-between'>
            Modules
            <Button
              type='primary'
              ghost
              shape='circle'
              size='small'
              icon={<EditOutlined />}
              onClick={() => setVisible(true)}
            />
          </Wrapper>
        </Title>
        <Modal
          title='Update Modules'
          footer={null}
          onCancel={() => setVisible(false)}
          visible={visible}
        >
          <ModuleUpdate moduleUpdate={moduleUpdate} />
        </Modal>
        {_.map(_.get(subscriptions, 'modules'), (module, i) => {
          return (
            <Text key={i}>
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
