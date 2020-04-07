import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import { Logo } from 'ui';
import logoImg from 'assets/images/logo.png';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class MainLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to='/'>
            <Logo>{logoImg}</Logo>
          </Link>
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <SubMenu
              key='sub1'
              title={
                <span>
                  <UserOutlined />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key='3'>
                <Link to='/customer'>Customer</Link>
              </Menu.Item>
              <Menu.Item key='4'>Workers</Menu.Item>
              <Menu.Item key='5'>Brand</Menu.Item>
              <Menu.Item key='6'>Partner</Menu.Item>
            </SubMenu>
            <SubMenu
              key='sub2'
              title={
                <span>
                  <MobileOutlined />
                  <span>Platform (App/Bot)</span>
                </span>
              }
            >
              <Menu.Item key='7'>
                <Link to='/customer'>Survey</Link>
              </Menu.Item>
              <Menu.Item key='8'>
                <Link to='/customer'>Issue</Link>
              </Menu.Item>
              <Menu.Item key='9'>
                <Link to='/customer'>Leave</Link>
              </Menu.Item>
              <Menu.Item key='10'>
                <Link to='/customer'>Attendence</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 'calc(100vh - 112px)',
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
