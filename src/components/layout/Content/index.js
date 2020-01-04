import React from 'react';
import { Breadcrumb } from 'antd';
import { Container, Pages } from './style';
import Carrinho from '../../../pages/Carrinho';

export default function Content() {
  return (
    <Container>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Carrinho</Breadcrumb.Item>
      </Breadcrumb>

      {/* PAGES */}
      <Pages>
        <Carrinho />
      </Pages>
    </Container>
  );
}
