import styled, { css } from 'styled-components';
import { space, color, border, fontSize, typography } from 'styled-system';

const Text = styled.p`
  margin-bottom: ${(props) => (props.mbnone ? '0px' : '5px')};
  font-size: 14px;
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  color: ${(props) => props.theme.colors.textColor};
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
    ${fontSize} ${space} ${color} ${border} ${typography};
`;

export default Text;
