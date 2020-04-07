import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { Wrapper, Title } from 'ui';

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
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
];
const data = [
  {
    key: '1',
    companyName: 'Kutumbita',
    primaryAdmin: 'Salman Rahman',
    phone: '01254865',
  },
  {
    key: '2',
    companyName: 'Kinship',
    primaryAdmin: 'Talha',
    phone: '012546',
  },
  {
    key: '3',
    companyName: 'Hifi public',
    primaryAdmin: 'Raisul',
    phone: '42546',
  },
];

function Company() {
  return (
    <>
      <Wrapper flex justify='space-between' mb={3}>
        <Title h4>Customers List</Title>{' '}
        <Link to='/customer/create'>
          <Button type='primary' ghost>
            Onboard A Customer
          </Button>
        </Link>
      </Wrapper>
      <Table columns={columns} dataSource={data} />
    </>
  );
}

export default Company;
