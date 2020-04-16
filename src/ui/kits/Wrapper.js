import styled, { css } from 'styled-components';
import { space, layout, border, color, shadow } from 'styled-system';

const Wrapper = styled.div`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex-wrap: ${(props) => (props.noWrap ? 'nowrap' : 'wrap')};
      justify-content: ${(props) =>
        props.justify ? props.justify : 'flex-start'};
      flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
    `}

  ${(props) =>
    props.flex && props.align
      ? css`
          align-items: ${props.align};
        `
      : props.align
      ? css`
          text-align: ${props.align};
        `
      : ''};

  ${(props) =>
    props.card &&
    css`
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      margin-bottom: 30px;
      border: 1px solid #e8e8e8;
    `}

    ${(props) =>
      props.bgImage &&
      css`
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.3)
          ),
          url(${props.bgImage});
        background-size: cover;
        background-repeat: no-repeat;
      `}

    ${(props) =>
      props.shadow && props.shadow === 1
        ? css`
            box-shadow: 0 8px 16px 0 rgba(51, 51, 51, 0.08);
          `
        : ''}

    ${(props) =>
      props.hover && props.shadow
        ? css`
            cursor: pointer;
            :hover {
              box-shadow: 0 16px 32px 0 rgba(51, 51, 51, 0.24);
            }
          `
        : ''}

    ${(props) =>
      props.hover &&
      css`
        cursor: pointer;
      `}
  ${shadow}
  ${space};
  ${layout};
  ${border};
  ${color};
`;

export default Wrapper;
