import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { Table } from 'antd';
import { useQueryParams } from 'hooks';
import { Wrapper, AvatarNameTitle } from 'ui';

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

function Customers({ companies }) {
  const location = useLocation();
  const { handleQueryParams } = useQueryParams();

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
          <Link to={`${location.pathname}/${company.uuid}`}>
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

  const handlePagination = (paginator) => {
    handleQueryParams({ page: paginator.current });
  };

  return (
    <Wrapper p={3} bg='white'>
      <Table
        columns={columns}
        dataSource={renderCompanies()}
        pagination={companies.paginator}
        onChange={(paginator) => {
          handlePagination(paginator);
        }}
      />
    </Wrapper>
  );
}

export default Customers;
