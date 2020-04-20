import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { UnlockOutlined } from '@ant-design/icons';
import { useParams } from 'react-router';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCompanyAdmins,
  getCompanyPrimaryAdmins,
  getCompanyManagers,
} from 'store/company';
import { parseDate } from 'utils';
import { Wrapper, Title } from 'ui';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Permission',
    dataIndex: 'permission',
    key: 'permission',
  },
];

const CompanyAdmins = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyPrimaryAdmins(param.uuid));
    dispatch(getCompanyAdmins(param.uuid));
    dispatch(getCompanyManagers(param.uuid));
  }, [dispatch, param.uuid]);

  const { primaryAdmins, admins, managers } = useSelector(
    (state) => state.company
  );

  const renderPrimaryAdmins = () => {
    return _.map(primaryAdmins, (admin) => {
      return {
        key: admin.uuid,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        createdAt: parseDate(admin.createdAt),
        updatedAt: parseDate(admin.updatedAt),
        permission: (
          <Wrapper flex justify='center'>
            <Button icon={<UnlockOutlined />} />
          </Wrapper>
        ),
      };
    });
  };

  const renderAdmins = () => {
    return _.map(admins, (admin) => {
      return {
        key: admin.uuid,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        createdAt: parseDate(admin.createdAt),
        updatedAt: parseDate(admin.updatedAt),
        permission: (
          <Wrapper flex justify='center'>
            <Button icon={<UnlockOutlined />} />
          </Wrapper>
        ),
      };
    });
  };

  const renderManagers = () => {
    return _.map(managers, (admin) => {
      return {
        key: admin.uuid,
        name: admin.name,
        email: admin.email,
        phone: admin.phone,
        createdAt: parseDate(admin.createdAt),
        updatedAt: parseDate(admin.updatedAt),
        permission: (
          <Wrapper flex justify='center'>
            <Button icon={<UnlockOutlined />} />
          </Wrapper>
        ),
      };
    });
  };

  return (
    <Wrapper pb={2}>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Primary Admins :
        </Title>
        <Table
          columns={columns}
          dataSource={renderPrimaryAdmins()}
          pagination={false}
        />
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Admins :
        </Title>
        <Table
          columns={columns}
          dataSource={renderAdmins()}
          pagination={false}
        />
      </Wrapper>
      <Wrapper py={2}>
        <Title h6 borderBottom='1px solid' borderColor='grayBg' pb={1} mb={1}>
          Managers :
        </Title>
        <Table
          columns={columns}
          dataSource={renderManagers()}
          pagination={false}
        />
      </Wrapper>
    </Wrapper>
  );
};

export default CompanyAdmins;
