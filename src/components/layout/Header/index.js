import React from 'react';
import { Container, Trigger, RowItem } from './style';
import { Col, Switch, Avatar, Dropdown, Menu, Button, Icon } from 'antd';

export default function Header({ collapsed, setCollapsed, user }) {
  const toggle = () => setCollapsed(!collapsed);

  const menu = () => (
    <Menu>
      <Menu.Item>Perfil</Menu.Item>
      <Menu.Item>Sair</Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <RowItem type='flex' justify='space-between'>
        <Col>
          <Trigger
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Col>
        <Col>
          <RowItem type='flex' gutter={20}>
            <Col>
              <Switch defaultChecked /> Light/Dark theme
            </Col>
            <Col>
              <Dropdown overlay={menu}>
                <span style={{ cursor: 'pointer' }}>
                  <Avatar icon='user' /> {user}
                </span>
              </Dropdown>
            </Col>
          </RowItem>
        </Col>
      </RowItem>
    </Container>
  );
}
