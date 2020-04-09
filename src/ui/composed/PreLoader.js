import React from 'react';
import { Spin } from 'antd';
import { Wrapper } from '../';

const PreLoader = () => {
  return (
    <Wrapper
      style={{ minHeight: '100vh', width: '100%' }}
      flex
      align='center'
      justify='center'
    >
      <Spin size='large' />
    </Wrapper>
  );
};

export default PreLoader;
