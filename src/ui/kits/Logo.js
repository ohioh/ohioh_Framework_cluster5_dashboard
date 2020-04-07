import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.div`
  background: transparent;
  text-align: center;
  padding: 15px 0;
`;

const LogoImg = styled.img`
  display: inline-block;
  height: 50px;
`;

const Logo = ({ children }) => {
  return (
    <LogoStyled>
      <LogoImg src={children} />
    </LogoStyled>
  );
};

export default Logo;
