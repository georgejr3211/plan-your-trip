import React from 'react';
import { Layout } from 'antd';
import { Container, Logo } from './style';

import logo from '../../../assets/logo.svg';
import Navigation from '../Navigation';

export default function Sidebar({ collapsed }) {
  return (
    <Container
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Logo>
        <img src={logo} alt='' />
      </Logo>
      <Navigation />
    </Container>
  );
}
