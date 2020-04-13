import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Button } from 'antd';
import { Wrapper, Title, Link } from 'ui';

const HeaderWrapper = styled.div`
  background-color: #fff;
  border-bottom: 16px solid ${(props) => props.theme.colors.grayBg};
  // box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  padding: 0 24px;
  margin-bottom: 10px;
`;

function PageHeader({ headerData }) {
  return (
    <HeaderWrapper>
      <Wrapper flex align='center' justify='space-between' py='1rem'>
        <Title h4>{headerData.title}</Title>
        <Wrapper flex>
          {_.map(headerData.buttons, (btn, i) => {
            return btn.method ? (
              <Wrapper key={i}>
                {typeof btn.method === 'function' && (
                  <Button
                    size='large'
                    ml={1}
                    type='primary'
                    ghost
                    onClick={btn.method}
                  >
                    {btn.label}
                  </Button>
                )}
              </Wrapper>
            ) : (
              <Link to={btn.link} ml={1} key={i}>
                <Button type='primary' ghost>
                  {btn.label}
                </Button>
              </Link>
            );
          })}
        </Wrapper>
      </Wrapper>
    </HeaderWrapper>
  );
}
export default PageHeader;
