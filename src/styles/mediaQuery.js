import { css } from 'styled-components';

const sizes = {
  xs: '0',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export default media;
