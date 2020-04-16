import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { getCompanies } from 'store/company';
import { Wrapper, PageHeader, AvatarNameTitle } from 'ui';

const columns = [
  {
    title: 'Compnay Name',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: 'Primary Admin',
    dataIndex: 'primaryAdmin',
    key: 'primaryAdmin',
  },
  {
    title: 'SMS Gateway',
    dataIndex: 'smsGateway',
    key: 'smsGateway',
  },
  {
    title: 'Chatbot Number',
    dataIndex: 'chatbotNumber',
    key: 'chatbotNumber',
  },
  {
    title: 'Worker Platforms',
    dataIndex: 'workerPlatforms',
    key: 'workerPlatforms',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];

function Companies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  const { companies } = useSelector((state) => state.company);

  const renderCompanies = () => {
    return _.map(companies.results, (company) => {
      let workerplatforms = _.get(
        company,
        'onboardingDetails.workerPlatforms',
        '---'
      );

      return {
        key: company.uuid,
        companyName: (
          <Link to={`/customers/${company.uuid}`}>
            <AvatarNameTitle
              name={company.name}
              subtitle={company.country}
              thumb={company.companyLogo}
            />
          </Link>
        ),
        smsGateway: company.smsGateway,
        primaryAdmin: company.primaryName,
        chatbotNumber: company.chatbotNumber,
        workerPlatforms: workerplatforms.toString().split(',').join(', '),
        phone: company.primaryPhone,
      };
    });
  };

  const headerData = {
    title: 'Customers',
    buttons: [
      {
        label: 'Onboard A Customer',
        link: '/customer/create',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Table columns={columns} dataSource={renderCompanies()} />
      </Wrapper>
    </>
  );
}

export default Companies;
