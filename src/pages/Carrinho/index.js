import React from 'react';
import locale from 'antd/es/date-picker/locale/pt_BR';
import { Button, Row, Col, Divider, DatePicker } from 'antd';
import { Container } from './style';
import List from './List';

// - Novo - Importar (Baixar modelo) - Remover - Habilitar - Desabilitar -
//       Exportar para excel - Filtrar - Procurar

const Carrinho = () => {
  return (
    <Container>
      <h1>Carrinho</h1>

      <Row type='flex' justify='space-between'>
        <Col>
          <Row type='flex' gutter={10}>
            <Col>
              <Button type='primary'>Novo</Button>
            </Col>

            <Col>
              <Button type='primary'>Exportar para excel</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <DatePicker locale={locale} placeholder='Selecione uma data' />
        </Col>
      </Row>
      <Divider />
      <List />
    </Container>
  );
};

export default Carrinho;
