import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { media } from '../../styles';

const Container = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
  max-width: 1140px;
	margin-right: auto;
	margin-left: auto;

	${media.xl`
    ${(props) =>
      props.large &&
      css`
        max-width: 1600px;
      `}
    `}

    ${(props) =>
      props.fluid &&
      css`
        max-width: 100%;
        ${media.xl`
					padding-right: 48px;
					padding-left: 48px;
				`}
      `}

	${space}
`;

export default Container;
