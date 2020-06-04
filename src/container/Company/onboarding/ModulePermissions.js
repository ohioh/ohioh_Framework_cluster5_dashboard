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
  const modulUpdate = {
    redirectLink: '/customer/worker-platforms',
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Row gutter={16} type='flex' justify='center'>
          <Col span={12}>
            <ModuleUpdate modulUpdate={modulUpdate} />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
}

export default ModulePermissions;
