import styled, { css } from 'styled-components';
import { space, color, border } from 'styled-system';

const Title = styled.h1`
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  color: rgba(0, 0, 0, 0.85);
  line-height: 1.35;
  margin-bottom: 0;
  font-size: 1rem;
    ${({ h1 }) =>
      h1 &&
      css`
        font-size: 2.5rem;
        font-weight: 700;
      `}
    ${({ h2 }) =>
      h2 &&
      css`
        font-size: 2rem;
        font-weight: 700;
      `}
    ${({ h3 }) =>
      h3 &&
      css`
        font-size: 1.75rem;
        font-weight: 600;
      `}
    ${({ h4 }) =>
      h4 &&
      css`
        font-size: 1.5rem;
        font-weight: 600;
      `}
    ${({ h5 }) =>
      h5 &&
      css`
        font-size: 1.25rem;
        font-weight: 600;
      `}
    ${({ h6 }) =>
      h6 &&
      css`
        font-size: 1rem;
        font-weight: 600;
      `}


  ${space}
  ${color}
  ${border};
`;

export default Title;
