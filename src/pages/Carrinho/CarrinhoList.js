import React, { useEffect, useState } from 'react';
import { Container } from './style';
import { Input, Icon } from 'antd';
import TableComponent from '../../components/TableComponent';
import CarrinhoService from '../../services/carrinhoService';

const CarrinhoList = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setTimeout(() => list(), 1000);
  }, []);

  const list = () => {
    const carrinhoService = new CarrinhoService();
    carrinhoService.getAll().then(c => {
      const items = c.data.map(carrinho => {
        switch (carrinho.prioridade) {
          case 1:
            carrinho.prioridade = 'Baixa';
            break;

          case 2:
            carrinho.prioridade = 'Média';
            break;

          case 3:
            carrinho.prioridade = 'Alta';
            break;
          default:
            carrinho.prioridade = 'Outros';
            break;
        }

        switch (carrinho.produtoAdquirido) {
          case true:
            carrinho.produtoAdquirido = (
              <Icon
                type='smile'
                theme='twoTone'
                twoToneColor='#52c41a'
              />
            );
            break;

          default:
            carrinho.produtoAdquirido = <Icon type='frown'/>;
            break;
        }

        return carrinho;
      });

      setDataSource(items);
    });
  };

  const columns = [
    {
      title: 'Item',
      dataIndex: 'item',
      key: 'item',
      sorter: (a, b) => a.item.length - b.item.length,
      filters: dataSource.map(data => ({ text: data.item, value: data.item })),
      onFilter: (value, record) => record.item.indexOf(value) === 0,
    },
    {
      title: 'Preço estimado',
      dataIndex: 'precoEstimado',
      key: 'precoEstimado',
      sorter: (a, b) => a.precoEstimado - b.precoEstimado,
    },
    {
      title: 'Preço pago',
      dataIndex: 'precoPago',
      key: 'precoPago',
      sorter: (a, b) => a.precoPago - b.precoPago,
    },
    {
      title: 'Prioridade',
      dataIndex: 'prioridade',
      key: 'prioridade',
      sorter: (a, b) => a.prioridade - b.prioridade,
    },
    {
      title: 'Produto adquirido',
      dataIndex: 'produtoAdquirido',
      key: 'produtoAdquirido',
      sorter: (a, b) => a.produtoAdquirido - b.produtoAdquirido,
    },
    {
      title: 'Observação',
      dataIndex: 'observacao',
      key: 'observacao',
      sorter: (a, b) => a.observacao.length - b.observacao.length,
    },
  ];

  return (
    <Container>
      <Input.Search placeholder='Procurar' style={{ marginBottom: 30 }} />
      <TableComponent columns={columns} dataSource={dataSource} height={300} />
    </Container>
  );
};

export default CarrinhoList;
