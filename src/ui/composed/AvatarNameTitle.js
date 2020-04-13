import React from 'react';
import { Avatar } from 'antd';
import { Wrapper, Title, Text, Link } from 'ui';

const AvatarNameTitle = ({ name, subtitle, thumb, link }) => {
  return (
    <Link to={link}>
      <Wrapper flex align='center'>
        <Avatar size={50} shape='square' src={thumb} />
        <Wrapper ml={1}>
          <Title h6>{name}</Title>
          <Text mbnone>{subtitle}</Text>
        </Wrapper>
      </Wrapper>
    </Link>
  );
};

export default AvatarNameTitle;
