import React from 'react';
import locale from 'antd/es/date-picker/locale/pt_BR';
import { Button, Row, Col, Divider, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import { Container } from './style';
import CarrinhoList from './CarrinhoList';

// - Novo - Importar (Baixar modelo) - Remover - Habilitar - Desabilitar -
//       Exportar para excel - Filtrar - Procurar

const Carrinho = ({ match }) => {
  return (
    <Container>
      <h1>Carrinho</h1>
      <Row type='flex' justify='space-between'>
        <Col>
          <Row type='flex' gutter={10}>
            <Col>
              <Button type='primary'>
                <Link to={`${match.path}/new`}>Novo</Link>
              </Button>
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
      <CarrinhoList />
    </Container>
  );
};

export default Carrinho;
