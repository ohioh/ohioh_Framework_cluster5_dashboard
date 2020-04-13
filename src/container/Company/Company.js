import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { Wrapper, Title, PageHeader, AvatarNameTitle } from 'ui';

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
const data = [
  {
    key: '1',
    companyName: (
      <AvatarNameTitle
        name='Kutumbita'
        subtitle='Bangladesh'
        thumb='https://picsum.photos/200/300'
      />
    ),
    smsGateway: 'infobip',
    chatbotNumber: '888044578458',
    workerPlatforms: 'Smart Phone, SMS, Kiosk',
    primaryAdmin: 'Salman Rahman',
    phone: '01254865',
  },
  {
    key: '2',
    companyName: (
      <AvatarNameTitle
        name='Kinship'
        subtitle='Canada'
        thumb='https://picsum.photos/200/300'
      />
    ),
    smsGateway: 'Twilo',
    chatbotNumber: '12452454545',
    workerPlatforms: 'Smart Phone, SMS',
    primaryAdmin: 'Talha',
    phone: '012546',
  },
  {
    key: '3',
    companyName: (
      <AvatarNameTitle
        name='HiFi'
        subtitle='India'
        thumb='https://picsum.photos/200/300'
      />
    ),
    smsGateway: 'infobip',
    chatbotNumber: '88457966996',
    workerPlatforms: 'Smart Phone, SMS, Kiosk',
    primaryAdmin: 'Raisul',
    phone: '42546',
  },
];

function Company() {
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
      <Wrapper p={3}>
        <Table columns={columns} dataSource={data} />
      </Wrapper>
    </>
  );
}

export default Company;
