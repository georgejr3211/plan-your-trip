import React from 'react';
import { Button, Row, Col } from 'antd';
import { Container } from './style';

const Carrinho = () => {
  return (
    <Container>
      <h1>Lista de Compras</h1>
      <Row type='flex' gutter={20}>
        <Col>
          <Button type='primary'>Novo</Button>
        </Col>
        <Col>
          <Button type='primary'>Exportar para excel</Button>
        </Col>
      </Row>
      - Novo - Importar (Baixar modelo) - Remover - Habilitar - Desabilitar -
      Exportar para excel - Filtrar - Procurar
    </Container>
  );
};

export default Carrinho;
