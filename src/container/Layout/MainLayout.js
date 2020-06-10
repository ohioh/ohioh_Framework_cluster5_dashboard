import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { Logout } from 'store/auth';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { Logo, Wrapper, Title } from 'ui';
import logoImg from 'assets/images/logo.png';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(Logout());
  };
  const [collapsed, handleCollapsed] = useToggle();

  const UserDropDown = (
    <Menu>
      <Menu.Item onClick={handleLogOut}>Log Out</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider trigger={null} width='250' collapsible collapsed={collapsed}>
        <Link to='/'>
          <Logo>{logoImg}</Logo>
        </Link>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <SubMenu
            key='sub1'
            title={
              <span>
                <UserOutlined />
                <span>OIOH</span>
              </span>
            }
          >
            <Menu.Item key='3'>
              <Link to='/key-generation'>Key Generation</Link>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/documentation'>Documentation</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          <Wrapper flex justify='space-between' align='center'>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: handleCollapsed,
              }
            )}
            <Dropdown overlay={UserDropDown}>
              <Wrapper
                flex
                align='center'
                mr='16px'
                style={{ cursor: 'pointer' }}
              >
                <Title h6 ml={1}>
                  Salman
                </Title>
              </Wrapper>
            </Dropdown>
          </Wrapper>
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '16px',
            minHeight: 'calc(100vh - 96px)',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
