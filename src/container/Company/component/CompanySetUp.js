import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { useParams } from 'react-router';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanySetupInfo } from 'store/company';
import { Wrapper, Text, Tag } from 'ui';

const { Panel } = Collapse;

const CompanySetUp = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanySetupInfo(param.uuid));
  }, [dispatch]);

  const { companySetupInfo } = useSelector((state) => state.company);
  return (
    <Wrapper pt={2} pb={4}>
      <Collapse accordion>
        {_.map(companySetupInfo, (factory, i) => {
          return (
            <Panel header={factory.name} key={i}>
              <Text>Departments :</Text>
              {_.map(factory.departments, (department, i) => {
                return <Tag key={i}>{department.name}</Tag>;
              })}
              <Text>Positions :</Text>
              {_.map(factory.positions, (position, i) => {
                return <Tag key={i}>{position.name}</Tag>;
              })}
            </Panel>
          );
        })}
      </Collapse>
    </Wrapper>
  );
};

export default CompanySetUp;
