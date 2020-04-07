import styled, { css } from 'styled-components';
import { space, color, border } from 'styled-system';

const Text = styled.p`
  font-size: 14px;
  display: ${({ inline }) => (inline ? 'inline' : 'block')};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}

  ${({ semiBold }) =>
    semiBold &&
    css`
      font-weight: 600;
    `}

  ${({ light }) =>
    light &&
    css`
      font-weight: 300;
    `}

  ${({ warning }) =>
    warning &&
    css`
      background-color: #ffe58f;
      padding: 0 5px;
      margin-bottom: 0;
    `}

    ${space}
    ${color}
    ${border};
`;

export default Text;
