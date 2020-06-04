import React from 'react';
import { Row, Col } from 'antd';
import { PageHeader, Wrapper, ModuleUpdate } from 'ui';

function ModulePermissions() {
  const headerData = {
    title: 'Customer On-boarding : Modules',
    buttons: [
      {
        label: 'Back',
        link: '/customer/onboard',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Row gutter={16} type='flex' justify='center'>
          <Col span={12}>
            <ModuleUpdate />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

export default ModulePermissions;
