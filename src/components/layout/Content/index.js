import React from 'react';
import { Breadcrumb } from 'antd';
import { Container, Pages } from './style';
import Compras from '../../../pages/Compras';

export default function Content() {
  return (
    <Container>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Lista de compras</Breadcrumb.Item>
      </Breadcrumb>

      {/* PAGES */}
      <Pages>
        <Compras />
      </Pages>
    </Container>
  );
}
