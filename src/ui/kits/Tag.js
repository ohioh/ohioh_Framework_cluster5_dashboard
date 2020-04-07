import React from 'react';
import { Tag } from 'antd';
import styled from 'styled-components';

const TagStyled = styled(Tag)`
  font-size: 12px;
  text-transform: uppercase;
  pointer-events: none;
  margin-bottom: 13px;
  margin-right: 15px;
`;

const TagExtended = ({ children }) => <TagStyled>{children}</TagStyled>;

export default TagExtended;
