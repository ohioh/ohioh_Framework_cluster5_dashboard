import React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { Logout } from 'store/auth';

const UserDropDown = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(Logout());
  };

  return (
    <Menu>
      <Menu.Item onClick={handleLogOut}>Log Out</Menu.Item>
    </Menu>
  );
};

export default UserDropDown;
