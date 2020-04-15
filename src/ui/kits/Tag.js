import { Tag } from 'antd';
import { space, color } from 'styled-system';
import styled from 'styled-components';

const TagExtended = styled(Tag)`
  pointer-events: none;
  margin-bottom: ${(props) => (props.mbnone ? '0px' : '13px')} ${space} ${color};
`;

export default TagExtended;
