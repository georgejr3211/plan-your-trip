import React from 'react';
import { Button, Row, Col, Divider } from 'antd';
import { Container } from './style';
import List from './List';

// - Novo - Importar (Baixar modelo) - Remover - Habilitar - Desabilitar -
//       Exportar para excel - Filtrar - Procurar

const Carrinho = () => {
  return (
    <Container>
      <h1>Lista de Compras</h1>
      <Row type='flex' gutter={10}>
        <Col>
          <Button type='primary'>Novo</Button>
        </Col>
        <Col>
          <Button type='primary'>Exportar para excel</Button>
        </Col>
      </Row>
      <Divider />
      <List />
    </Container>
  );
};

export default Carrinho;
